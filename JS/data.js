const users = [
  { id: "test", password: "123456", name: "Test User", role: "user" },
  { id: "admin", password: "admin", name: "Test Admin", role: "admin" },
];

const products = [
  {
    name: "Asus VivoBook",
    model: "A512FL - EJ567T",
    price: 18999000,
    brand: "Asus",
    spec: {
      cpu: "Intel Core i7 10510U",
      ram: "8",
      storage: "512GB SSD",
      vga: "NVIDIA MX250 2GB",
      screen: "15.6 FHD",
      os: "Win 10",
      color: "Silver",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse adipisci vero odit ducimus distinctio et sequi minima, ratione beatae consectetur quaerat dolorem animi consequatur aspernatur dolorum dignissimos quos saepe!",
  },
  {
    name: "Asus asdasd",
    model: "A512FL - EJ567T",
    price: 10999000,
    brand: "Asus",
    spec: {
      cpu: "Intel Core i7 10510U",
      ram: "8",
      storage: "512GB SSD",
      vga: "NVIDIA MX250 2GB",
      screen: "15.6 FHD",
      os: "Win 10",
      color: "Silver",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse adipisci vero odit ducimus distinctio et sequi minima, ratione beatae consectetur quaerat dolorem animi consequatur aspernatur dolorum dignissimos quos saepe!",
  },
  {
    name: "Asus 123123",
    model: "A512FL - EJ567T",
    price: 23999000,
    brand: "Asus",
    spec: {
      cpu: "Intel Core i7 10510U",
      ram: "8",
      storage: "512GB SSD",
      vga: "NVIDIA MX250 2GB",
      screen: "15.6 FHD",
      os: "Win 10",
      color: "Silver",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse adipisci vero odit ducimus distinctio et sequi minima, ratione beatae consectetur quaerat dolorem animi consequatur aspernatur dolorum dignissimos quos saepe!",
  },
  {
    name: "Asus qqwd",
    model: "A512FL - EJ567T",
    price: 31999000,
    brand: "Asus",
    spec: {
      cpu: "Intel Core i7 10510U",
      ram: "8",
      storage: "512GB SSD",
      vga: "NVIDIA MX250 2GB",
      screen: "15.6 FHD",
      os: "Win 10",
      color: "Silver",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse adipisci vero odit ducimus distinctio et sequi minima, ratione beatae consectetur quaerat dolorem animi consequatur aspernatur dolorum dignissimos quos saepe!",
  },
  {
    name: "Asus jksdhfksd",
    model: "A512FL - EJ567T",
    price: 20999000,
    brand: "Asus",
    spec: {
      cpu: "Intel Core i7 10510U",
      ram: "8",
      storage: "512GB SSD",
      vga: "NVIDIA MX250 2GB",
      screen: "15.6 FHD",
      os: "Win 10",
      color: "Silver",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse adipisci vero odit ducimus distinctio et sequi minima, ratione beatae consectetur quaerat dolorem animi consequatur aspernatur dolorum dignissimos quos saepe!",
  },
];

const productContainer = document.getElementById("product-container");
const cartPageDiv = document.getElementById("cart-page");
const getElement = document.getElementById("product-list-main");

const loginDiv = document.getElementById("login-register"),
  regButton = document.getElementById("reg-btn"),
  regID = document.getElementById("reg-id"),
  regPassword = document.getElementById("reg-pw"),
  contentContainerDiv = document.getElementById("content-container"),
  loginPageDiv = document.getElementById("login-page");

let cart = [];
const cartList = document.getElementById("cart"),
  cartTotal = document.getElementById("cart-total");
