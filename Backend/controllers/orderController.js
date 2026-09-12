import Order from "../models/order.js";

export const getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const userId = req.user.id;

    const order = await Order.findOne({
      _id: orderId,
      user: userId,
    })
      .populate("items.product", "title image prepTime")
      .populate("address");

    if (!order) {
      return res.status(400).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Get order error", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch error",
    });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const userId = req.user.id;

    const orders = await Order.find({ user: userId })
      .populate("items.product", "title image")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Order fetching error");
    res.status(500).json({
      success: false,
      message: "Failed to fetch order",
    });
  }
};

export const getAllOrdersAdmin = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("user", "name email phone")
      .populate("items.product", "title image")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Admin fetch orders error", error);
    res.status(500).json({
      success: false,
      message: "Failedd to fetched orders",
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { deliveryStatus } = req.body;

    const validStatuses = [
      "placed",
      "preparing",
      "out_for_delivery",
      "delivered",
      "cancelled",
    ];

    if (!validStatuses.includes(deliveryStatus)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    const order = await Order.findByIdAndUpdate(
      orderId,
      { deliveryStatus },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Update order status error", error);
    res.status(500).json({
      success: false,
      message: "Failed to update order status",
    });
  }
};
