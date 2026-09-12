import Product from "../models/product.js";
import User from "../models/user.js";
import {
  DELIVERY_FEE,
  FREE_DELIVERY_THRESHOLD,
  OTHER_CHARGES,
} from "../constants/pricing.js";
import razorpayInstance from "../config/razorpay.js";
import Order from "../models/order.js";
import crypto from "crypto";
import { sendOtpConfirmationEmail } from "../services/emailService.js";

export const createOrder = async (req, res) => {
  try {
    const { addressId, cartItems } = req.body;
    const userId = req.user.id;

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    if (!addressId) {
      return res.status(400).json({
        success: false,
        message: "Address is required",
      });
    }

    const orderItems = [];
    let itemTotal = 0;

    for (const cartItem of cartItems) {
      const product = await Product.findById(cartItem.productId);

      if (!product) {
        return res.status(400).json({
          success: false,
          message: `Product not found ${cartItem.productId}`,
        });
      }

      let price = product.price;
      let variantLabel = null;

      if (cartItem.variantId) {
        const variant = product.variants.id(cartItem.variantId);

        if (!variant) {
          return res.status(400).json({
            success: false,
            message: `Variant not found for product: ${product.title}`,
          });
        }

        price = variant.price;
        variantLabel = variant.label;
      }

      const quantity = cartItem.quantity;

      if (!quantity || quantity <= 0) {
        return res.status(400).json({
          success: false,
          message: `Invalid qunatity for product: ${product.title}`,
        });
      }

      orderItems.push({
        product: product._id,
        variant: cartItem.variantId || null,
        variantLabel: variantLabel,
        quantity: quantity,
        price: price,
      });

      itemTotal += price * quantity;
    }
    const deliveryFee = itemTotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    const totalAmount = itemTotal + deliveryFee + OTHER_CHARGES;

    const razorpayOrder = await razorpayInstance.orders.create({
      amount: totalAmount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    const newOrder = await Order.create({
      user: userId,
      address: addressId,
      items: orderItems,
      itemTotal,
      deliveryFee,
      otherCharges: OTHER_CHARGES,
      totalAmount,
      razorpayOrderId: razorpayOrder.id,
      status: "created",
    });

    res.status(200).json({
      success: true,
      orderId: newOrder._id,
      razorpayOrderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Create order error", error);

    res.status(500).json({
      success: false,
      message: "Failed to create order",
    });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Missing payment details",
      });
    }

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      await Order.findOneAndUpdate(
        { razorpayOrderId: razorpay_order_id },
        { status: "failed" }
      );

      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }

    const paymentDetails =
      await razorpayInstance.payments.fetch(razorpay_payment_id);

    const order = await Order.findOneAndUpdate(
      { razorpayOrderId: razorpay_order_id },
      {
        status: "paid",
        razorpayPaymentId: razorpay_payment_id,
        paymentMethod: paymentDetails.method,
      },
      { new: true }
    ).populate("items.product", "title immage");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    const user = await User.findById(order.user);

    if (user) {
      sendOtpConfirmationEmail(user.email, order);
    }

    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      order,
    });
  } catch (error) {
    console.error("Verify payment error", error);
    res.status(500).json({
      success: false,
      message: "Payment verification failed",
    });
  }
};

// export const razorpayWebhook = async (req, res) => {
//   try {
//     const WebhookSignature = req.headers["x-razorpay-signature"];

//     const generatedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET)
//       .update(req.body)
//       .digest("hex");

//     if (generatedSignature !== WebhookSignature) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid webhook signature",
//       });
//     }

//     const payload = JSON.parse(req.body.toString());

//     if (payload.event === "payment.captured") {
//       const paymentEntity = payload.payload.payment.entity;

//       await Order.findOneAndUpdate(
//         { razorpayOrderId: paymentEntity.order_id },
//         {
//           status: "paid",
//           razorpayPaymentId: paymentEntity.id,
//         }
//       );
//       console.log("Payment captured via webhook:", paymentEntity.entity);
//     }

//     if (payload.event === "payment.failed") {
//       const paymentEntity = payload.payload.payment.entity;

//       await Order.findOneAndUpdate(
//         { razorpayOrderId: paymentEntity.order_id },
//         { status: "failed" }
//       );
//     }

//     res.status(200).json({
//       success: true,
//     });
//   } catch (error) {
//     console.error("Webhook error", error);
//     res.status(500).json({
//       success: false,
//       message: "Webhook error",
//     });
//   }
// };
