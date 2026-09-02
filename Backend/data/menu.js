export const menu = [
  {
    id: "fd_r7k0p5",
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
  {
    id: "fd_ujzde8",
    title: "Veg Manchurian Dry",
    description: "Fried veggie balls tossed in a tangy dry Manchurian glaze.",
    price: 189,
    rating: 4.5,
    prepTime: 16,
    isVeg: true,

    category: "Starters",
    subCategory: "Fried",

    isChefSpecial: false,
    isCraving: false,
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
        price: 189,
      },
    ],
  },

  {
    id: "fd_d6ncf1",
    title: "Paneer Chilli Dry",
    description:
      "Crispy paneer tossed dry with onions, capsicum and chilli-soy glaze.",
    price: 219,
    rating: 4.7,
    prepTime: 15,
    isVeg: true,

    category: "Starters",
    subCategory: "Fried",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 139,
      },
      {
        id: "v2",
        label: "Full",
        price: 219,
      },
    ],
  },

  {
    id: "fd_pf91dh",
    title: "Baby Corn Fritters",
    description: "Crunchy fried baby corn coated in a light spiced batter.",
    price: 179,
    rating: 4.9,
    prepTime: 14,
    isVeg: true,

    category: "Starters",
    subCategory: "Fried",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },

  {
    id: "fd_dzdoc9",
    title: "Tandoori Aloo",
    description: "Baby potatoes marinated in tandoori spices and char-grilled.",
    price: 159,
    rating: 4.8,
    prepTime: 16,
    isVeg: true,

    category: "Starters",
    subCategory: "Tandoor",

    isChefSpecial: false,
    isCraving: false,
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
        price: 159,
      },
    ],
  },

  {
    id: "fd_s0j8ht",
    title: "Crispy Veg Nuggets",
    description:
      "Golden fried veggie nuggets, crunchy on the outside, soft inside.",
    price: 169,
    rating: 4.7,
    prepTime: 13,
    isVeg: true,

    category: "Starters",
    subCategory: "Fried",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },

  {
    id: "fd_lgmxg9",
    title: "Stuffed Mushroom",
    description:
      "Button mushrooms stuffed with a spiced cheese filling and baked.",
    price: 209,
    rating: 4.8,
    prepTime: 18,
    isVeg: true,

    category: "Starters",
    subCategory: "Baked",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [
      {
        id: "v1",
        label: "4 Pieces",
        price: 139,
      },
      {
        id: "v2",
        label: "6 Pieces",
        price: 209,
      },
    ],
  },
  {
    id: "fd_bq4wxl",
    title: "Chana Masala",
    description: "Chickpeas simmered in a tangy, spiced onion-tomato gravy.",
    price: 179,
    rating: 4.7,
    prepTime: 16,
    isVeg: true,

    category: "Main Course",
    subCategory: "Curry",

    isChefSpecial: false,
    isCraving: false,
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
    id: "fd_ny7tzq",
    title: "Veg Handi",
    description: "Mixed vegetables slow-cooked in a rich handi-style gravy.",
    price: 219,
    rating: 4.8,
    prepTime: 20,
    isVeg: true,

    category: "Main Course",
    subCategory: "Curry",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },

  {
    id: "fd_gx3mkp",
    title: "Paneer Lababdar",
    description: "Paneer cubes in a rich, buttery tomato and cashew gravy.",
    price: 249,
    rating: 4.9,
    prepTime: 20,
    isVeg: true,

    category: "Main Course",
    subCategory: "Curry",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

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
    id: "fd_wv8dhr",
    title: "Matar Paneer",
    description: "Soft paneer cubes and green peas in a light, spiced curry.",
    price: 209,
    rating: 4.7,
    prepTime: 18,
    isVeg: true,

    category: "Main Course",
    subCategory: "Curry",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 129,
      },
      {
        id: "v2",
        label: "Full",
        price: 209,
      },
    ],
  },

  {
    id: "fd_ftl2b6",
    title: "Kadai Vegetable",
    description:
      "Seasonal vegetables tossed in a spicy kadai masala with peppers.",
    price: 199,
    rating: 4.6,
    prepTime: 18,
    isVeg: true,

    category: "Main Course",
    subCategory: "Curry",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },

  {
    id: "fd_uc9jre",
    title: "Vegetable Korma",
    description:
      "Mixed vegetables simmered in a mild, creamy coconut-cashew gravy.",
    price: 219,
    rating: 4.8,
    prepTime: 19,
    isVeg: true,

    category: "Main Course",
    subCategory: "Curry",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [
      {
        id: "v1",
        label: "Half",
        price: 129,
      },
      {
        id: "v2",
        label: "Full",
        price: 219,
      },
    ],
  },
  // Paste these objects into the `menu` array in menu.js
  // Make sure menu.js has: import fallback from "../assets/images/fallback.jpg";

  // ---- Pizza ----
  {
    id: "fd_0s4n46",
    title: "Onion Pizza",
    description:
      "Simple and classic pizza topped with fresh onions and cheese.",
    price: 229,
    rating: 4.6,
    prepTime: 20,
    isVeg: true,

    category: "Pizza",
    subCategory: "Classic",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [
      {
        id: "v1",
        label: "7 inch",
        price: 159,
      },
      {
        id: "v2",
        label: "10 inch",
        price: 229,
      },
    ],
  },
  {
    id: "fd_paax1e",
    title: "Paneer Makhani Pizza",
    description: "Pizza topped with paneer tossed in a rich makhani sauce.",
    price: 289,
    rating: 4.6,
    prepTime: 18,
    isVeg: true,

    category: "Pizza",
    subCategory: "Paneer",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_ooc102",
    title: "BBQ Paneer Pizza",
    description: "Smoky BBQ glazed paneer with onions on a cheesy base.",
    price: 289,
    rating: 4.6,
    prepTime: 22,
    isVeg: true,

    category: "Pizza",
    subCategory: "Paneer",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [
      {
        id: "v1",
        label: "7 inch",
        price: 209,
      },
      {
        id: "v2",
        label: "10 inch",
        price: 289,
      },
    ],
  },
  {
    id: "fd_85hxbj",
    title: "Double Cheese Margherita",
    description: "Classic Margherita loaded with an extra layer of mozzarella.",
    price: 259,
    rating: 4.5,
    prepTime: 15,
    isVeg: true,

    category: "Pizza",
    subCategory: "Cheese",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_hb3k9v",
    title: "Achari Paneer Pizza",
    description: "Tangy pickle-spiced paneer with onions and capsicum.",
    price: 279,
    rating: 4.8,
    prepTime: 12,
    isVeg: true,

    category: "Pizza",
    subCategory: "Paneer",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [
      {
        id: "v1",
        label: "7 inch",
        price: 199,
      },
      {
        id: "v2",
        label: "10 inch",
        price: 279,
      },
    ],
  },
  {
    id: "fd_lc4pem",
    title: "Spicy Triple Pizza",
    description: "Loaded with jalapenos, paneer and a fiery red sauce.",
    price: 299,
    rating: 4.7,
    prepTime: 14,
    isVeg: true,

    category: "Pizza",
    subCategory: "Spicy",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },

  // ---- Burger ----
  {
    id: "fd_eh949y",
    title: "Schezwan Burger",
    description: "Crispy veg patty tossed in a fiery schezwan glaze.",
    price: 159,
    rating: 4.6,
    prepTime: 22,
    isVeg: true,

    category: "Burger",
    subCategory: "Spicy",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_80sx26",
    title: "Grilled Veg Burger",
    description: "Grilled veggie patty with fresh lettuce and tangy sauce.",
    price: 149,
    rating: 4.6,
    prepTime: 14,
    isVeg: true,

    category: "Burger",
    subCategory: "Grilled",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_yrbfk5",
    title: "Crispy Corn Burger",
    description: "Crunchy corn patty stacked with mayo and fresh veggies.",
    price: 139,
    rating: 4.7,
    prepTime: 16,
    isVeg: true,

    category: "Burger",
    subCategory: "Classic",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_97ou9h",
    title: "Paneer Tikka Burger",
    description: "Smoky tandoori paneer patty with mint mayo and onions.",
    price: 179,
    rating: 4.5,
    prepTime: 12,
    isVeg: true,

    category: "Burger",
    subCategory: "Paneer",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_wvwtpg",
    title: "Loaded Veggie Burger",
    description: "Stacked with double veggies, cheese and tangy sauces.",
    price: 189,
    rating: 4.6,
    prepTime: 14,
    isVeg: true,

    category: "Burger",
    subCategory: "Loaded",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_l1xkc7",
    title: "Smoky BBQ Paneer Burger",
    description: "Grilled paneer patty glazed with a smoky BBQ sauce.",
    price: 199,
    rating: 4.6,
    prepTime: 22,
    isVeg: true,

    category: "Burger",
    subCategory: "BBQ",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },

  // ---- Momos ----
  {
    id: "fd_0kaw56",
    title: "Peri Peri Momos",
    description: "Steamed momos tossed in a tangy peri peri seasoning.",
    price: 169,
    rating: 4.9,
    prepTime: 14,
    isVeg: true,

    category: "Momos",
    subCategory: "Spicy",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_pk9e20",
    title: "Manchurian Momos",
    description: "Steamed momos tossed in a tangy Manchurian sauce.",
    price: 179,
    rating: 4.7,
    prepTime: 14,
    isVeg: true,

    category: "Momos",
    subCategory: "Gravy",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_dsdqsc",
    title: "Butter Momos",
    description: "Soft steamed momos tossed in a rich buttery sauce.",
    price: 189,
    rating: 4.8,
    prepTime: 16,
    isVeg: true,

    category: "Momos",
    subCategory: "Creamy",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_zevjj4",
    title: "Malai Momos",
    description: "Steamed momos in a mild, creamy malai gravy.",
    price: 199,
    rating: 4.7,
    prepTime: 14,
    isVeg: true,

    category: "Momos",
    subCategory: "Creamy",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_74bnxj",
    title: "Crispy Chilli Momos",
    description: "Deep-fried momos tossed in a spicy chilli-soy glaze.",
    price: 189,
    rating: 4.5,
    prepTime: 14,
    isVeg: true,

    category: "Momos",
    subCategory: "Fried",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_154ti8",
    title: "Steamed Spicy Momos",
    description: "Classic steamed veg momos with an extra spicy filling.",
    price: 159,
    rating: 4.9,
    prepTime: 18,
    isVeg: true,

    category: "Momos",
    subCategory: "Steamed",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [
      {
        id: "v1",
        label: "6 Pieces",
        price: 109,
      },
      {
        id: "v2",
        label: "10 Pieces",
        price: 159,
      },
    ],
  },

  // ---- Sandwich ----
  {
    id: "fd_ayibqu",
    title: "Mumbai Masala Sandwich",
    description: "Spiced potato and chutney sandwich, Mumbai street style.",
    price: 139,
    rating: 4.7,
    prepTime: 14,
    isVeg: true,

    category: "Sandwich",
    subCategory: "Street Style",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_0qziij",
    title: "Cheese Garlic Sandwich",
    description: "Toasted sandwich loaded with garlic butter and cheese.",
    price: 149,
    rating: 4.8,
    prepTime: 22,
    isVeg: true,

    category: "Sandwich",
    subCategory: "Cheese",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_lb2jeh",
    title: "Veg Mayo Sandwich",
    description: "Soft bread loaded with fresh veggies and creamy mayo.",
    price: 129,
    rating: 4.5,
    prepTime: 12,
    isVeg: true,

    category: "Sandwich",
    subCategory: "Classic",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_t8uz5o",
    title: "Peri Peri Paneer Sandwich",
    description: "Grilled sandwich stuffed with peri peri spiced paneer.",
    price: 179,
    rating: 4.8,
    prepTime: 14,
    isVeg: true,

    category: "Sandwich",
    subCategory: "Paneer",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_lym9c6",
    title: "Tandoori Veg Sandwich",
    description: "Tandoori spiced veggies grilled between soft bread.",
    price: 159,
    rating: 4.7,
    prepTime: 14,
    isVeg: true,

    category: "Sandwich",
    subCategory: "Grilled",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_day3ez",
    title: "Open Grilled Sandwich",
    description: "Open-faced toasted sandwich topped with veggies and cheese.",
    price: 169,
    rating: 4.8,
    prepTime: 22,
    isVeg: true,

    category: "Sandwich",
    subCategory: "Grilled",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },

  // ---- Pasta ----
  {
    id: "fd_oqucpy",
    title: "Alfredo Pasta",
    description: "Penne tossed in a rich, creamy alfredo sauce.",
    price: 249,
    rating: 4.8,
    prepTime: 14,
    isVeg: true,

    category: "Pasta",
    subCategory: "Italian",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

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
    id: "fd_s695g8",
    title: "Tomato Basil Pasta",
    description: "Pasta tossed in a fresh tomato and basil sauce.",
    price: 219,
    rating: 4.6,
    prepTime: 20,
    isVeg: true,

    category: "Pasta",
    subCategory: "Italian",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_u7ts79",
    title: "Spinach & Cheese Pasta",
    description: "Pasta tossed with sauteed spinach in a cheesy sauce.",
    price: 239,
    rating: 4.7,
    prepTime: 18,
    isVeg: true,

    category: "Pasta",
    subCategory: "Cheese",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_umweu0",
    title: "Garlic Butter Pasta",
    description: "Pasta tossed in a fragrant garlic butter sauce.",
    price: 219,
    rating: 4.6,
    prepTime: 18,
    isVeg: true,

    category: "Pasta",
    subCategory: "Italian",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_e26b24",
    title: "Creamy Mushroom Pasta",
    description: "Pasta tossed with mushrooms in a creamy white sauce.",
    price: 249,
    rating: 4.5,
    prepTime: 12,
    isVeg: true,

    category: "Pasta",
    subCategory: "Creamy",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

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
    id: "fd_zeobd1",
    title: "Baked Pasta",
    description: "Pasta baked with a cheesy tomato sauce till golden.",
    price: 259,
    rating: 4.7,
    prepTime: 16,
    isVeg: true,

    category: "Pasta",
    subCategory: "Baked",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  // Paste these objects into the `menu` array in menu.js
  // Make sure menu.js has: import fallback from "../assets/images/fallback.jpg";

  // ---- Rolls ----
  {
    id: "fd_vjs1qd",
    title: "Mushroom Roll",
    description: "Sauteed spiced mushrooms rolled in a soft paratha.",
    price: 149,
    rating: 4.7,
    prepTime: 10,
    isVeg: true,

    category: "Rolls",
    subCategory: "Classic",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_xgxa6a",
    title: "Corn Cheese Roll",
    description: "Sweet corn and melted cheese rolled in a soft paratha.",
    price: 139,
    rating: 4.8,
    prepTime: 14,
    isVeg: true,

    category: "Rolls",
    subCategory: "Cheese",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_xbv5db",
    title: "Achari Paneer Roll",
    description: "Tangy pickle-spiced paneer rolled in a soft paratha.",
    price: 169,
    rating: 4.5,
    prepTime: 18,
    isVeg: true,

    category: "Rolls",
    subCategory: "Paneer",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_fkvke4",
    title: "Chilli Paneer Roll",
    description: "Spicy Indo-Chinese paneer filling wrapped in a soft roti.",
    price: 169,
    rating: 4.6,
    prepTime: 15,
    isVeg: true,

    category: "Rolls",
    subCategory: "Paneer",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_skei82",
    title: "Kurkure Roll",
    description:
      "Crunchy fried filling rolled in a soft paratha for extra crisp.",
    price: 159,
    rating: 4.8,
    prepTime: 8,
    isVeg: true,

    category: "Rolls",
    subCategory: "Fried",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_uzycq3",
    title: "Peri Peri Veg Roll",
    description: "Mixed veggies tossed in peri peri seasoning, rolled up.",
    price: 149,
    rating: 4.9,
    prepTime: 18,
    isVeg: true,

    category: "Rolls",
    subCategory: "Spicy",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },

  // ---- Chinese ----
  {
    id: "fd_hv94ge",
    title: "Veg Manchurian Rice",
    description: "Fried rice topped with veg manchurian in a tangy gravy.",
    price: 229,
    rating: 4.7,
    prepTime: 5,
    isVeg: true,

    category: "Chinese",
    subCategory: "Rice",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_2yaqop",
    title: "Singapore Noodles",
    description:
      "Stir-fried rice noodles tossed with vegetables and mild spices.",
    price: 209,
    rating: 4.7,
    prepTime: 12,
    isVeg: true,

    category: "Chinese",
    subCategory: "Noodles",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_bfghlb",
    title: "Veg Manchow Soup",
    description: "Spicy, tangy soup loaded with vegetables and crispy noodles.",
    price: 129,
    rating: 4.8,
    prepTime: 10,
    isVeg: true,

    category: "Chinese",
    subCategory: "Soup",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_a36k8s",
    title: "Paneer Chilli Gravy",
    description: "Paneer tossed in a rich, spicy chilli gravy sauce.",
    price: 229,
    rating: 4.6,
    prepTime: 18,
    isVeg: true,

    category: "Chinese",
    subCategory: "Paneer",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_dy7r86",
    title: "Dragon Potato",
    description: "Crispy fried potatoes tossed in a fiery dragon sauce.",
    price: 179,
    rating: 4.7,
    prepTime: 16,
    isVeg: true,

    category: "Chinese",
    subCategory: "Fried",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_s5gw8f",
    title: "Chilli Garlic Veggies",
    description: "Crisp vegetables tossed in a bold chilli garlic sauce.",
    price: 199,
    rating: 4.6,
    prepTime: 18,
    isVeg: true,

    category: "Chinese",
    subCategory: "Gravy",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },

  // ---- South Indian ----
  {
    id: "fd_3ya23g",
    title: "Onion Dosa",
    description: "Crispy rice crepe topped with finely chopped onions.",
    price: 129,
    rating: 4.7,
    prepTime: 15,
    isVeg: true,

    category: "South Indian",
    subCategory: "Dosa",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_8k3gpt",
    title: "Paneer Dosa",
    description: "Crispy dosa stuffed with a spiced paneer filling.",
    price: 169,
    rating: 4.6,
    prepTime: 15,
    isVeg: true,

    category: "South Indian",
    subCategory: "Dosa",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_d0w39b",
    title: "Idli Fry",
    description: "Steamed idlis pan-fried with a spiced tempering.",
    price: 109,
    rating: 4.5,
    prepTime: 16,
    isVeg: true,

    category: "South Indian",
    subCategory: "Idli",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_5u6g7p",
    title: "Rava Idli",
    description: "Soft steamed semolina idlis served with sambar and chutney.",
    price: 109,
    rating: 4.6,
    prepTime: 8,
    isVeg: true,

    category: "South Indian",
    subCategory: "Idli",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_2pjnzn",
    title: "Bisi Bele Bath",
    description: "Spiced rice and lentil dish loaded with vegetables.",
    price: 139,
    rating: 4.8,
    prepTime: 20,
    isVeg: true,

    category: "South Indian",
    subCategory: "Rice",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_86z2mj",
    title: "Coconut Rice",
    description:
      "Fragrant rice tempered with coconut, curry leaves and mustard seeds.",
    price: 119,
    rating: 4.6,
    prepTime: 12,
    isVeg: true,

    category: "South Indian",
    subCategory: "Rice",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },

  // ---- Thali ----
  {
    id: "fd_28naw0",
    title: "Bengali Thali",
    description: "Platter featuring classic Bengali curries and steamed rice.",
    price: 279,
    rating: 4.9,
    prepTime: 8,
    isVeg: true,

    category: "Thali",
    subCategory: "Regional",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_omxxc8",
    title: "Maharashtrian Thali",
    description: "Traditional platter with varan bhaat and local specialties.",
    price: 269,
    rating: 4.8,
    prepTime: 14,
    isVeg: true,

    category: "Thali",
    subCategory: "Regional",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_ushfy4",
    title: "Kids Thali",
    description: "A smaller, mild platter designed for children.",
    price: 149,
    rating: 4.6,
    prepTime: 18,
    isVeg: true,

    category: "Thali",
    subCategory: "Light",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_dy1bwq",
    title: "Weekend Special Thali",
    description: "An extra-special platter with festive curries and dessert.",
    price: 339,
    rating: 4.9,
    prepTime: 5,
    isVeg: true,

    category: "Thali",
    subCategory: "Special",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_35htv3",
    title: "North Indian Thali",
    description: "Platter with rich North Indian curries, dal, roti and rice.",
    price: 259,
    rating: 4.5,
    prepTime: 10,
    isVeg: true,

    category: "Thali",
    subCategory: "Regional",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_9fjw6s",
    title: "Executive Thali",
    description: "A quick, balanced platter perfect for a working lunch.",
    price: 199,
    rating: 4.7,
    prepTime: 5,
    isVeg: true,

    category: "Thali",
    subCategory: "Value",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },

  // ---- Snacks ----
  {
    id: "fd_nv2wy1",
    title: "Paneer Pakora",
    description: "Crispy fried paneer fritters in a spiced gram flour batter.",
    price: 149,
    rating: 4.7,
    prepTime: 5,
    isVeg: true,

    category: "Snacks",
    subCategory: "Fried",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_7xecm1",
    title: "Sev Puri",
    description: "Crisp puris topped with chutneys, potatoes and crunchy sev.",
    price: 99,
    rating: 4.5,
    prepTime: 8,
    isVeg: true,

    category: "Snacks",
    subCategory: "Street Food",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_tewujq",
    title: "Pani Puri",
    description: "Crispy puris filled with spiced water, tamarind and potato.",
    price: 79,
    rating: 4.6,
    prepTime: 16,
    isVeg: true,

    category: "Snacks",
    subCategory: "Street Food",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_km22xe",
    title: "French Fries",
    description: "Golden, crispy salted fries served hot.",
    price: 119,
    rating: 4.9,
    prepTime: 14,
    isVeg: true,

    category: "Snacks",
    subCategory: "Fried",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_5jx06j",
    title: "Masala Papad",
    description:
      "Roasted papad topped with chopped onions, tomatoes and spices.",
    price: 69,
    rating: 4.8,
    prepTime: 10,
    isVeg: true,

    category: "Snacks",
    subCategory: "Classic",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_cnpr6o",
    title: "Aloo Chaat",
    description: "Crispy fried potatoes tossed in tangy chutneys and spices.",
    price: 109,
    rating: 4.8,
    prepTime: 12,
    isVeg: true,

    category: "Snacks",
    subCategory: "Street Food",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },

  // ---- Desserts ----
  {
    id: "fd_cs3ls9",
    title: "Gajar Halwa",
    description: "Traditional carrot halwa slow-cooked with milk and ghee.",
    price: 119,
    rating: 4.5,
    prepTime: 10,
    isVeg: true,

    category: "Desserts",
    subCategory: "Indian",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_c0tvq5",
    title: "Rabri",
    description: "Thick, sweetened condensed milk flavoured with cardamom.",
    price: 109,
    rating: 4.6,
    prepTime: 18,
    isVeg: true,

    category: "Desserts",
    subCategory: "Indian",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_rllsiy",
    title: "Vanilla Ice Cream Sundae",
    description: "Vanilla ice cream topped with chocolate sauce and nuts.",
    price: 129,
    rating: 4.9,
    prepTime: 15,
    isVeg: true,

    category: "Desserts",
    subCategory: "Cold",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_nhfxml",
    title: "Cheesecake",
    description: "Rich, creamy baked cheesecake with a biscuit base.",
    price: 159,
    rating: 4.8,
    prepTime: 12,
    isVeg: true,

    category: "Desserts",
    subCategory: "Baked",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_52ivma",
    title: "Moong Dal Halwa",
    description: "Classic lentil halwa slow-cooked with ghee and nuts.",
    price: 129,
    rating: 4.6,
    prepTime: 14,
    isVeg: true,

    category: "Desserts",
    subCategory: "Indian",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_s0g40i",
    title: "Angoori Rasmalai",
    description: "Bite-sized rasmalai balls soaked in sweetened milk.",
    price: 139,
    rating: 4.7,
    prepTime: 18,
    isVeg: true,

    category: "Desserts",
    subCategory: "Indian",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },

  // ---- Beverages ----
  {
    id: "fd_sdi5pt",
    title: "Oreo Shake",
    description: "Creamy milkshake blended with crushed Oreo cookies.",
    price: 139,
    rating: 4.7,
    prepTime: 15,
    isVeg: true,

    category: "Beverages",
    subCategory: "Cold",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_el6jxt",
    title: "Virgin Mojito",
    description: "Refreshing mint and lime mocktail, served chilled.",
    price: 109,
    rating: 4.9,
    prepTime: 8,
    isVeg: true,

    category: "Beverages",
    subCategory: "Cold",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_empiwq",
    title: "Watermelon Juice",
    description: "Fresh, chilled watermelon juice.",
    price: 89,
    rating: 4.7,
    prepTime: 12,
    isVeg: true,

    category: "Beverages",
    subCategory: "Cold",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_jau3qk",
    title: "Filter Coffee",
    description: "Traditional South Indian style strong filter coffee.",
    price: 59,
    rating: 4.7,
    prepTime: 10,
    isVeg: true,

    category: "Beverages",
    subCategory: "Hot",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_885zvy",
    title: "Strawberry Shake",
    description: "Creamy shake blended with fresh strawberries.",
    price: 129,
    rating: 4.8,
    prepTime: 18,
    isVeg: true,

    category: "Beverages",
    subCategory: "Cold",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
  {
    id: "fd_b50rq6",
    title: "Green Tea",
    description: "Light and refreshing green tea, served hot.",
    price: 49,
    rating: 4.6,
    prepTime: 8,
    isVeg: true,

    category: "Beverages",
    subCategory: "Hot",

    isChefSpecial: false,
    isCraving: false,
    isPopular: false,

    variants: [],
  },
];
