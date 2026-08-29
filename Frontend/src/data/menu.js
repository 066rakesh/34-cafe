import chilli from "../assets/images/chilli.avif";
import pasta from "../assets/images/pasta.avif";
import chowmein from "../assets/images/chowmein.avif";
import momos from "../assets/images/momos.avif";
import pizza from "../assets/images/pizza.webp";
import burgers from "../assets/images/burgers.avif";
import Beverages from "../assets/images/drink.avif";
import cake from "../assets/images/cake.avif";
import Sandwitch from "../assets/images/Sandwitch.avif";
import samosa from "../assets/images/samosa.avif";
import rolls from "../assets/images/rolls.avif";
import biryani from "../assets/images/biryani.avif";
import bhature from "../assets/images/bhature.avif";
import bhaji from "../assets/images/bhaji.avif";
import kadhai_paneer from "../assets/images/kadhai paneer.avif";
import paneer_pizza from "../assets/images/paneer pizza.avif";
import shahi_paneer from "../assets/images/shahi paneer.avif";
import jeera_aloo from "../assets/images/jeera aloo.avif";
import chilli_paneer from "../assets/images/chilli paneer.avif";
import paratha from "../assets/images/paratha.avif";
import simple_maggie from "../assets/images/simple maggie.avif";
import dahi_tadka from "../assets/images/dahi tadka.avif";
import red_sauce_pasta from "../assets/images/red sauce pasta.jpg";
import paneer_masala_maggie from "../assets/images/paneer masala maggie.avif";
import sev_bhaji from "../assets/images/sev bhaji.avif";
import matar_pulao from "../assets/images/matar pulao.avif";

export const menu = [
  {
    id: "fd_r7k0p5",
    image: Sandwitch,
    title: "Sandwich",
    description:
      "Crispy grilled sandwich stuffed with cheese, veggies and a hint of masala.",
    price: 149,
    rating: 4.9,
    prepTime: 15,
    isVeg: true,

    category: "Sandwich",
    subCategory: "Snacks",

    isChefSpecial: true,
    isCraving: false,
    isPopular: true,

    variants: [],
  },

  {
    id: "fd_t9b2v6",
    image: rolls,
    title: "Paneer Roll",
    description:
      "Soft rumali roti rolled with spicy paneer filling and mint chutney.",
    price: 179,
    rating: 4.8,
    prepTime: 12,
    isVeg: true,

    category: "Rolls",
    subCategory: "Paneer",

    isChefSpecial: true,
    isCraving: false,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "1 Roll",
        price: 99,
      },
      {
        id: "v2",
        label: "2 Rolls",
        price: 179,
      },
    ],
  },

  {
    id: "fd_q3n4x0",
    image: biryani,
    title: "Biryani",
    description:
      "Aromatic basmati rice layered with rich spices, served with raita.",
    price: 249,
    rating: 4.9,
    prepTime: 25,
    isVeg: false,

    category: "North Indian",
    subCategory: "Rice & Biryani",

    isChefSpecial: true,
    isCraving: false,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 149,
      },
      {
        id: "v2",
        label: "Full",
        price: 249,
      },
    ],
  },

  {
    id: "fd_m1s7c8",
    image: samosa,
    title: "Samosa",
    description: "Golden fried pastry filled with spiced potatoes and peas.",
    price: 50,
    rating: 4.8,
    prepTime: 10,
    isVeg: true,

    category: "Snacks",
    subCategory: "Street Food",

    isChefSpecial: true,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "1 Piece",
        price: 25,
        prepTime: 5,
      },
      {
        id: "v2",
        label: "2 Pieces",
        price: 50,
        prepTime: 10,
      },
    ],
  },

  {
    id: "fd_5",
    image: pasta,
    title: "Pasta",
    description: "Creamy red sauce pasta tossed with herbs and bell peppers.",
    price: 229,
    rating: 4.8,
    prepTime: 18,
    isVeg: true,

    category: "Pasta",
    subCategory: "Italian",

    isChefSpecial: true,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 139,
        prepTime: 14,
      },
      {
        id: "v2",
        label: "Full",
        price: 229,
        prepTime: 18,
      },
    ],
  },

  {
    id: "fd_h5w9j2",
    image: pizza,
    title: "Pizza",
    description:
      "Wood-fired pizza topped with mozzarella, olives and fresh basil.",
    price: 299,
    rating: 4.9,
    prepTime: 20,
    isVeg: true,

    category: "Pizza",
    subCategory: "Veg Pizza",

    isChefSpecial: true,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "7 inch",
        price: 199,
      },
      {
        id: "v2",
        label: "10 inch",
        price: 299,
      },
    ],
  },

  {
    id: "fd_v6r0k4",
    image: cake,
    title: "Chocolate Cake",
    description:
      "Rich, moist chocolate cake slice with a smooth ganache topping.",
    price: 449,
    rating: 4.8,
    prepTime: 5,
    isVeg: true,

    category: "Desserts",
    subCategory: "Cake",

    isChefSpecial: true,
    isCraving: true,
    isPopular: false,

    variants: [
      {
        id: "v1",
        label: "500 g",
        price: 239,
      },
      {
        id: "v2",
        label: "1 kg",
        price: 449,
      },
    ],
  },

  {
    id: "fd_p2t8m6",
    image: burgers,
    title: "Veg Burger",
    description:
      "Juicy patty stacked with fresh veggies, cheese and tangy sauces.",
    price: 179,
    rating: 4.8,
    prepTime: 14,
    isVeg: true,

    category: "Burger",
    subCategory: "Veg Burger",

    isChefSpecial: true,
    isCraving: true,
    isPopular: true,

    variants: [],
  },

  {
    id: "fd_c9x5h3",
    image: momos,
    title: "Veg Momos",
    description:
      "Steamed dumplings filled with spiced veggies, served with chilli dip.",
    price: 149,
    rating: 4.8,
    prepTime: 16,
    isVeg: true,

    category: "Momos",
    subCategory: "Steamed Momos",

    isChefSpecial: true,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "6 Pieces",
        price: 99,
        prepTime: 12,
      },
      {
        id: "v2",
        label: "10 Pieces",
        price: 149,
        prepTime: 16,
      },
    ],
  },

  {
    id: "fd_b0n1w7",
    image: Beverages,
    title: "Cold Drink",
    description: "Refreshing chilled drink, perfect to go with any meal.",
    price: 80,
    rating: 4.6,
    prepTime: 5,
    isVeg: true,

    category: "Beverages",
    subCategory: "Cold Drinks",

    isChefSpecial: false,
    isCraving: true,
    isPopular: false,

    variants: [
      {
        id: "v1",
        label: "250 ml",
        price: 50,
        prepTime: 3,
      },
      {
        id: "v2",
        label: "500 ml",
        price: 80,
        prepTime: 5,
      },
    ],
  },

  {
    id: "fd_j4k0b9",
    image: bhaji,
    title: "Pav Bhaji",
    description: "Buttery mashed veggie bhaji served with soft toasted pav.",
    price: 179,
    rating: 4.8,
    prepTime: 18,
    isVeg: true,

    category: "North Indian",
    subCategory: "Street Food",

    isChefSpecial: true,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 109,
      },
      {
        id: "v2",
        label: "Full",
        price: 179,
      },
    ],
  },

  {
    id: "fd_j4k6b9",
    image: bhature,
    title: "Chole Bhature",
    description: "Fluffy fried bhature served with spicy tangy chole curry.",
    price: 199,
    rating: 4.9,
    prepTime: 20,
    isVeg: true,

    category: "North Indian",
    subCategory: "Punjabi",

    isChefSpecial: true,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "2 Bhature",
        price: 149,
      },
      {
        id: "v2",
        label: "3 Bhature",
        price: 199,
      },
    ],
  },

  {
    id: "fd_x1m9r4",
    image: chilli,
    title: "Chilli Paneer",
    description: "Crispy paneer tossed in a spicy Indo-Chinese sauce.",
    price: 229,
    rating: 4.8,
    prepTime: 16,
    isVeg: true,

    category: "Chinese",
    subCategory: "Paneer",

    isChefSpecial: true,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 139,
        prepTime: 12,
      },
      {
        id: "v2",
        label: "Full",
        price: 229,
        prepTime: 16,
      },
    ],
  },

  {
    id: "fd_n6p8j1",
    image: chowmein,
    title: "Veg Noodles",
    description:
      "Stir-fried noodles tossed with fresh veggies and soy-chilli sauce.",
    price: 199,
    rating: 4.8,
    prepTime: 14,
    isVeg: true,

    category: "Chinese",
    subCategory: "Noodles",

    isChefSpecial: true,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 119,
      },
      {
        id: "v2",
        label: "Full",
        price: 199,
      },
    ],
  },

  {
    id: "fd_8k2m9x",
    image: kadhai_paneer,
    title: "Kadhai Paneer",
    description:
      "Paneer cubes tossed in a spicy kadhai masala with bell peppers and onions.",
    price: 249,
    rating: 4.9,
    prepTime: 20,
    isVeg: true,

    category: "North Indian",
    subCategory: "Paneer",

    isChefSpecial: false,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 149,
      },
      {
        id: "v2",
        label: "Full",
        price: 249,
      },
    ],
  },

  {
    id: "fd_z9w4t6",
    image: paneer_pizza,
    title: "Paneer Pizza",
    description:
      "Cheesy pizza loaded with spiced paneer chunks, capsicum and onions.",
    price: 299,
    rating: 4.9,
    prepTime: 22,
    isVeg: true,

    category: "Pizza",
    subCategory: "Paneer Pizza",

    isChefSpecial: false,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "7 inch",
        price: 199,
      },
      {
        id: "v2",
        label: "10 inch",
        price: 299,
      },
    ],
  },

  {
    id: "fd_p3q7v1",
    image: matar_pulao,
    title: "Matar Pulao",
    description:
      "Fragrant basmati rice cooked with green peas, whole spices and ghee.",
    price: 199,
    rating: 4.8,
    prepTime: 18,
    isVeg: true,

    category: "North Indian",
    subCategory: "Rice & Biryani",

    isChefSpecial: false,
    isCraving: true,
    isPopular: false,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 119,
      },
      {
        id: "v2",
        label: "Full",
        price: 199,
      },
    ],
  },

  {
    id: "fd_h1n8s2",
    image: paratha,
    title: "Paratha",
    description:
      "Layered whole wheat flatbread, shallow fried till golden and flaky.",
    price: 99,
    rating: 4.8,
    prepTime: 12,
    isVeg: true,

    category: "North Indian",
    subCategory: "Breads",

    isChefSpecial: false,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "1 Piece",
        price: 59,
        prepTime: 8,
      },
      {
        id: "v2",
        label: "2 Pieces",
        price: 99,
        prepTime: 12,
      },
    ],
  },

  {
    id: "fd_c5r0y3",
    image: sev_bhaji,
    title: "Sev Bhaji",
    description:
      "Onion-tomato bhaji topped generously with crunchy sev, served hot.",
    price: 179,
    rating: 4.7,
    prepTime: 15,
    isVeg: true,

    category: "North Indian",
    subCategory: "Sabzi",

    isChefSpecial: false,
    isCraving: true,
    isPopular: false,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 109,
      },
      {
        id: "v2",
        label: "Full",
        price: 179,
      },
    ],
  },

  {
    id: "fd_m7j2k9",
    image: simple_maggie,
    title: "Simple Maggie",
    description:
      "Classic masala Maggi noodles cooked with veggies and tangy spices.",
    price: 99,
    rating: 4.7,
    prepTime: 10,
    isVeg: true,

    category: "Snacks",
    subCategory: "Maggie",

    isChefSpecial: false,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "Regular",
        price: 69,
      },
      {
        id: "v2",
        label: "Large",
        price: 99,
      },
    ],
  },

  {
    id: "fd_v4x1b8",
    image: dahi_tadka,
    title: "Dahi Tadka",
    description:
      "Creamy curd tempered with mustard seeds, curry leaves and dry red chilli.",
    price: 129,
    rating: 4.6,
    prepTime: 8,
    isVeg: true,

    category: "North Indian",
    subCategory: "Sides",

    isChefSpecial: false,
    isCraving: true,
    isPopular: false,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 79,
      },
      {
        id: "v2",
        label: "Full",
        price: 129,
      },
    ],
  },

  {
    id: "fd_q8t6n0",
    image: red_sauce_pasta,
    title: "Red Pasta",
    description:
      "Penne tossed in a rich tomato-basil sauce with herbs and garlic.",
    price: 229,
    rating: 4.8,
    prepTime: 18,
    isVeg: true,

    category: "Pasta",
    subCategory: "Italian",

    isChefSpecial: false,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 139,
      },
      {
        id: "v2",
        label: "Full",
        price: 229,
      },
    ],
  },

  {
    id: "fd_r2w9c4",
    image: paneer_masala_maggie,
    title: "Paneer Maggie",
    description:
      "Masala Maggi loaded with soft paneer cubes and a spicy tadka.",
    price: 149,
    rating: 4.8,
    prepTime: 12,
    isVeg: true,

    category: "Snacks",
    subCategory: "Maggie",

    isChefSpecial: false,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "Regular",
        price: 99,
      },
      {
        id: "v2",
        label: "Large",
        price: 149,
      },
    ],
  },

  {
    id: "fd_y5s1m7",
    image: shahi_paneer,
    title: "Shahi Paneer",
    description:
      "Paneer simmered in a rich, creamy cashew-tomato gravy with mild spices.",
    price: 269,
    rating: 4.9,
    prepTime: 22,
    isVeg: true,

    category: "North Indian",
    subCategory: "Paneer",

    isChefSpecial: false,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 159,
      },
      {
        id: "v2",
        label: "Full",
        price: 269,
      },
    ],
  },

  {
    id: "fd_k9b3v6",
    image: chilli_paneer,
    title: "Chilli Paneer",
    description:
      "Crispy paneer tossed in a spicy Indo-Chinese chilli-soy sauce.",
    price: 229,
    rating: 4.8,
    prepTime: 16,
    isVeg: true,

    category: "Chinese",
    subCategory: "Paneer",

    isChefSpecial: false,
    isCraving: true,
    isPopular: true,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 139,
      },
      {
        id: "v2",
        label: "Full",
        price: 229,
      },
    ],
  },

  {
    id: "fd_t0h4x2",
    image: jeera_aloo,
    title: "Jeera Aloo",
    description:
      "Baby potatoes sautéed with cumin seeds and light spices, dry style.",
    price: 169,
    rating: 4.7,
    prepTime: 14,
    isVeg: true,

    category: "North Indian",
    subCategory: "Sabzi",

    isChefSpecial: false,
    isCraving: true,
    isPopular: false,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 99,
      },
      {
        id: "v2",
        label: "Full",
        price: 169,
      },
    ],
  },
];