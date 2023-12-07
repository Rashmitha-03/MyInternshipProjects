const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "TOMMY HILFIGER",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/tomhi.png",
      },
      {
        code: "darkblue",
        img: "./img/tomhi1.png",
      },
    ],
  },
  {
    id: 2,
    title: "KENNETH COLE",
    price: 169,
    colors: [
      {
        code: "lightgray",
        img: "./img/kc.png",
      },
      {
        code: "green",
        img: "https://staticimg.titan.co.in/Helios/Catalog/KCWGI0027102MN_1.jpg?impolicy=pqmed&imwidth=640",
      },
    ],
  },
  {
    id: 3,
    title: "LEE COOPER",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/lc.png",
      },
      {
        code: "green",
        img: "./img/lc2.png",
      },
    ],
  },
  {
    id: 4,
    title: "POLICE",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/po.png",
      },
      {
        code: "lightgray",
        img: "./img/po1.png",
      },
    ],
  },
  {
    id: 5,
    title: "COACH",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/coa13.png",
      },
      {
        code: "black",
        img: "./img/coa.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
