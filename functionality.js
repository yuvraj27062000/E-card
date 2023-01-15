
function myFunction() {
  let hide = document.getElementsByClassName('leftNavbar')[0].style.display = "none "
  let gridstyle = document.getElementsByClassName('section-container')[0]
  gridstyle.classList.add("change");
}
function myFunctionreverse() {
  let hide = document.getElementsByClassName('leftNavbar')[0].style.display = "block "
  let gridstyle = document.getElementsByClassName('section-container')[0]
  gridstyle.classList.remove("change");

}

function OpenmyCard() {

  let maincontainer = document.getElementsByClassName("main-container")[0]
  let carddetail = document.getElementsByClassName("data")[0]
  maincontainer.classList.add('dimmcontainer');
  carddetail.classList.remove('close');
}
function OpenmyCardTop() {
  let cardId = document.getElementById('container')
}

function closeCarddetail() {
  let maincontainer = document.getElementsByClassName("main-container")[0]
  let carddetail = document.getElementsByClassName("data")[0]

  maincontainer.classList.remove('dimmcontainer');
  carddetail.classList.add('close');


}

{
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000);
  }
}

function myFunction1() {
  document.getElementById("myDropdown").classList.toggle("show");

}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {

  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// ============== card data ======================== 

const Category =
  [
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    ' home-decoration'

  ]

const products = [
  {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  },

  {
    "id": 2,
    "title": "MacBook Pro",
    "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "price": 1749,
    "discountPercentage": 11.02,
    "rating": 4.57,
    "stock": 83,
    "brand": "APPle",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
    "images": [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },

  {
    "id": 3,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    "price": 13,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": 65,
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/11/1.jpg",
      "https://i.dummyjson.com/data/products/11/2.jpg",
      "https://i.dummyjson.com/data/products/11/3.jpg",
      "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
    ]
  },
  {
    "id": 4,
    "title": "Brown Perfume",
    "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    "price": 40,
    "discountPercentage": 15.66,
    "rating": 4,
    "stock": 52,
    "brand": "Royal_Mirage",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/12/1.jpg",
      "https://i.dummyjson.com/data/products/12/2.jpg",
      "https://i.dummyjson.com/data/products/12/3.png",
      "https://i.dummyjson.com/data/products/12/4.jpg",
      "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
    ]
  },
  {
    "id": 5,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
  },
  {
    "id": 6,
    "title": "Hyaluronic Acid Serum",
    "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    "price": 19,
    "discountPercentage": 13.31,
    "rating": 4.83,
    "stock": 110,
    "brand": "L'Oreal Paris",
    "category": "skincare",
    "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/16/1.png",
      "https://i.dummyjson.com/data/products/16/2.webp",
      "https://i.dummyjson.com/data/products/16/3.jpg",
      "https://i.dummyjson.com/data/products/16/4.jpg",
      "https://i.dummyjson.com/data/products/16/thumbnail.jpg"
    ]
  },
  {
    "id": 7,
    "title": "Tree Oil 30ml",
    "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    "price": 12,
    "discountPercentage": 4.09,
    "rating": 4.52,
    "stock": 78,
    "brand": "Hemani Tea",
    "category": "skincare",
    "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/17/1.jpg",
      "https://i.dummyjson.com/data/products/17/2.jpg",
      "https://i.dummyjson.com/data/products/17/3.jpg",
      "https://i.dummyjson.com/data/products/17/thumbnail.jpg"
    ]
  },
  {
    "id": 8,
    "title": "Samsung Galaxy Book",
    "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    "price": 1499,
    "discountPercentage": 4.15,
    "rating": 4.25,
    "stock": 50,
    "brand": "Samsung",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/7/1.jpg",
      "https://i.dummyjson.com/data/products/7/2.jpg",
      "https://i.dummyjson.com/data/products/7/3.jpg",
      "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
    ]
  },
  {
    "id": 9,
    "title": "- Daal Masoor 500 grams",
    "description": "Fine quality Branded Product Keep in a cool and dry place",
    "price": 20,
    "discountPercentage": 4.81,
    "rating": 4.44,
    "stock": 133,
    "brand": "Saaf & Khaas",
    "category": "groceries",
    "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png",
    "images": [
      "https://i.dummyjson.com/data/products/21/1.png",
      "https://i.dummyjson.com/data/products/21/2.jpg",
      "https://i.dummyjson.com/data/products/21/3.jpg"
    ]
  },
  {
    "id": 10,
    "title": "Elbow Macaroni - 400 gm",
    "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    "price": 14,
    "discountPercentage": 15.58,
    "rating": 4.57,
    "stock": 146,
    "brand": "Bake Parlor Big",
    "category": "groceries",
    "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/22/1.jpg",
      "https://i.dummyjson.com/data/products/22/2.jpg",
      "https://i.dummyjson.com/data/products/22/3.jpg"
    ]
  },
  {
    "id": 11,
    "title": "Plant Hanger For Home",
    "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    "price": 41,
    "discountPercentage": 17.86,
    "rating": 4.08,
    "stock": 131,
    "brand": "Boho Decor",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/26/1.jpg",
      "https://i.dummyjson.com/data/products/26/2.jpg",
      "https://i.dummyjson.com/data/products/26/3.jpg",
      "https://i.dummyjson.com/data/products/26/4.jpg",
      "https://i.dummyjson.com/data/products/26/5.jpg",
      "https://i.dummyjson.com/data/products/26/thumbnail.jpg"
    ]
  },
  {
    "id": 12,
    "title": "Flying Wooden Bird",
    "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
    "price": 51,
    "discountPercentage": 15.58,
    "rating": 4.41,
    "stock": 17,
    "brand": "Flying Wooden",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp",
    "images": [
      "https://i.dummyjson.com/data/products/27/1.jpg",
      "https://i.dummyjson.com/data/products/27/2.jpg",
      "https://i.dummyjson.com/data/products/27/3.jpg",
      "https://i.dummyjson.com/data/products/27/4.jpg",
      "https://i.dummyjson.com/data/products/27/thumbnail.webp"
    ]
  },
  {
    "id": 13,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  },
  {
    "id": 14,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
  },
  {
    "id": 15,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "discountPercentage": 15.46,
    "rating": 4.09,
    "stock": 36,
    "brand": "Samsung",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/3/1.jpg",
      "https://i.dummyjson.com/data/products/3/1.jpg"

    ]
  },
  {
    "id": 16,
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "price": 280,
    "discountPercentage": 17.91,
    "rating": 4.3,
    "stock": 123,
    "brand": "OPPO",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
      "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    ]
  },
  {
    "id": 17,
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg"
    ]
  },
  {
    "id": 18,
    "title": "MacBook Pro",
    "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "price": 1749,
    "discountPercentage": 11.02,
    "rating": 4.57,
    "stock": 83,
    "brand": "APPle",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
    "images": [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
  },
  {
    "id": 19,
    "title": "Samsung Galaxy Book",
    "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    "price": 1499,
    "discountPercentage": 4.15,
    "rating": 4.25,
    "stock": 50,
    "brand": "Samsung",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/7/1.jpg",
      "https://i.dummyjson.com/data/products/7/2.jpg",
      "https://i.dummyjson.com/data/products/7/3.jpg",
      "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
    ]
  },
  {
    "id": 20,
    "title": "Microsoft Surface Laptop 4",
    "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    "price": 1499,
    "discountPercentage": 10.23,
    "rating": 4.43,
    "stock": 68,
    "brand": "Microsoft Surface",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/8/1.jpg",
      "https://i.dummyjson.com/data/products/8/2.jpg",
      "https://i.dummyjson.com/data/products/8/3.jpg",
      "https://i.dummyjson.com/data/products/8/4.jpg",
      "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
    ]
  },
  {
    "id": 21,
    "title": "Infinix INBOOK",
    "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    "price": 1099,
    "discountPercentage": 11.83,
    "rating": 4.54,
    "stock": 96,
    "brand": "Infinix",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.png",
      "https://i.dummyjson.com/data/products/9/3.png",
      "https://i.dummyjson.com/data/products/9/4.jpg",
      "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
    ]
  },
  {
    "id": 22,
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    "price": 1099,
    "discountPercentage": 6.18,
    "rating": 4.43,
    "stock": 89,
    "brand": "HP Pavilion",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    "images": [
      "https://i.dummyjson.com/data/products/10/1.jpg",
      "https://i.dummyjson.com/data/products/10/2.jpg",
      "https://i.dummyjson.com/data/products/10/3.jpg",
      "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
    ]
  },
  {
    "id": 23,
    "title": "Hyaluronic Acid Serum",
    "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    "price": 19,
    "discountPercentage": 13.31,
    "rating": 4.83,
    "stock": 110,
    "brand": "L'Oreal Paris",
    "category": "skincare",
    "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/16/1.png",
      "https://i.dummyjson.com/data/products/16/2.webp",
      "https://i.dummyjson.com/data/products/16/3.jpg",
      "https://i.dummyjson.com/data/products/16/4.jpg",
      "https://i.dummyjson.com/data/products/16/thumbnail.jpg"
    ]
  },
  {
    "id": 24,
    "title": "Tree Oil 30ml",
    "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    "price": 12,
    "discountPercentage": 4.09,
    "rating": 4.52,
    "stock": 78,
    "brand": "Hemani Tea",
    "category": "skincare",
    "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/17/1.jpg",
      "https://i.dummyjson.com/data/products/17/2.jpg",
      "https://i.dummyjson.com/data/products/17/3.jpg",
      "https://i.dummyjson.com/data/products/17/thumbnail.jpg"
    ]
  },
  {
    "id": 25,
    "title": "Oil Free Moisturizer 100ml",
    "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
    "price": 40,
    "discountPercentage": 13.1,
    "rating": 4.56,
    "stock": 88,
    "brand": "Dermive",
    "category": "skincare",
    "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/18/1.jpg",
      "https://i.dummyjson.com/data/products/18/2.jpg",
      "https://i.dummyjson.com/data/products/18/3.jpg",
      "https://i.dummyjson.com/data/products/18/4.jpg",
      "https://i.dummyjson.com/data/products/18/thumbnail.jpg"
    ]
  },
  {
    "id": 26,
    "title": "Skin Beauty Serum.",
    "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
    "price": 46,
    "discountPercentage": 10.68,
    "rating": 4.42,
    "stock": 54,
    "brand": "ROREC White Rice",
    "category": "skincare",
    "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/19/1.jpg",
      "https://i.dummyjson.com/data/products/19/2.jpg",
      "https://i.dummyjson.com/data/products/19/3.png",
      "https://i.dummyjson.com/data/products/19/thumbnail.jpg"
    ]
  },
  {
    "id": 27,
    "title": "Freckle Treatment Cream- 15gm",
    "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    "price": 70,
    "discountPercentage": 16.99,
    "rating": 4.06,
    "stock": 140,
    "brand": "Fair & Clear",
    "category": "skincare",
    "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/20/1.jpg",
      "https://i.dummyjson.com/data/products/20/2.jpg",
      "https://i.dummyjson.com/data/products/20/3.jpg",
      "https://i.dummyjson.com/data/products/20/4.jpg",
      "https://i.dummyjson.com/data/products/20/thumbnail.jpg"
    ]
  },
  {
    "id": 28,
    "title": "- Daal Masoor 500 grams",
    "description": "Fine quality Branded Product Keep in a cool and dry place",
    "price": 20,
    "discountPercentage": 4.81,
    "rating": 4.44,
    "stock": 133,
    "brand": "Saaf & Khaas",
    "category": "groceries",
    "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png",
    "images": [
      "https://i.dummyjson.com/data/products/21/1.png",
      "https://i.dummyjson.com/data/products/21/2.jpg",
      "https://i.dummyjson.com/data/products/21/3.jpg"
    ]
  },
  {
    "id": 29,
    "title": "Elbow Macaroni - 400 gm",
    "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    "price": 14,
    "discountPercentage": 15.58,
    "rating": 4.57,
    "stock": 146,
    "brand": "Bake Parlor Big",
    "category": "groceries",
    "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/22/1.jpg",
      "https://i.dummyjson.com/data/products/22/2.jpg",
      "https://i.dummyjson.com/data/products/22/3.jpg"
    ]
  },
  {
    "id": 30,
    "title": "Orange Essence Food Flavou",
    "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
    "price": 14,
    "discountPercentage": 8.04,
    "rating": 4.85,
    "stock": 26,
    "brand": "Baking Food Items",
    "category": "groceries",
    "thumbnail": "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/23/1.jpg",
      "https://i.dummyjson.com/data/products/23/2.jpg",
      "https://i.dummyjson.com/data/products/23/3.jpg",
      "https://i.dummyjson.com/data/products/23/4.jpg",
      "https://i.dummyjson.com/data/products/23/thumbnail.jpg"
    ]
  },
  {
    "id": 31,
    "title": "cereals muesli fruit nuts",
    "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
    "price": 46,
    "discountPercentage": 16.8,
    "rating": 4.94,
    "stock": 113,
    "brand": "fauji",
    "category": "groceries",
    "thumbnail": "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/24/1.jpg",
      "https://i.dummyjson.com/data/products/24/2.jpg",
      "https://i.dummyjson.com/data/products/24/3.jpg",
      "https://i.dummyjson.com/data/products/24/4.jpg",
      "https://i.dummyjson.com/data/products/24/thumbnail.jpg"
    ]
  },
  {
    "id": 32,
    "title": "Gulab Powder 50 Gram",
    "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
    "price": 70,
    "discountPercentage": 13.58,
    "rating": 4.87,
    "stock": 47,
    "brand": "Dry Rose",
    "category": "groceries",
    "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/25/1.png",
      "https://i.dummyjson.com/data/products/25/2.jpg",
      "https://i.dummyjson.com/data/products/25/3.png",
      "https://i.dummyjson.com/data/products/25/4.jpg",
      "https://i.dummyjson.com/data/products/25/thumbnail.jpg"
    ]
  },
  {
    "id": 33,
    "title": "Plant Hanger For Home",
    "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    "price": 41,
    "discountPercentage": 17.86,
    "rating": 4.08,
    "stock": 131,
    "brand": "Boho Decor",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/26/1.jpg",
      "https://i.dummyjson.com/data/products/26/2.jpg",
      "https://i.dummyjson.com/data/products/26/3.jpg",
      "https://i.dummyjson.com/data/products/26/4.jpg",
      "https://i.dummyjson.com/data/products/26/5.jpg",
      "https://i.dummyjson.com/data/products/26/thumbnail.jpg"
    ]
  },
  {
    "id": 34,
    "title": "Flying Wooden Bird",
    "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
    "price": 51,
    "discountPercentage": 15.58,
    "rating": 4.41,
    "stock": 17,
    "brand": "Flying Wooden",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp",
    "images": [
      "https://i.dummyjson.com/data/products/27/1.jpg",
      "https://i.dummyjson.com/data/products/27/2.jpg",
      "https://i.dummyjson.com/data/products/27/3.jpg",
      "https://i.dummyjson.com/data/products/27/4.jpg",
      "https://i.dummyjson.com/data/products/27/thumbnail.webp"
    ]
  },
  {
    "id": 35,
    "title": "3D Embellishment Art Lamp",
    "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
    "price": 20,
    "discountPercentage": 16.49,
    "rating": 4.82,
    "stock": 54,
    "brand": "LED Lights",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/28/1.jpg",
      "https://i.dummyjson.com/data/products/28/2.jpg",
      "https://i.dummyjson.com/data/products/28/3.png",
      "https://i.dummyjson.com/data/products/28/4.jpg",
      "https://i.dummyjson.com/data/products/28/thumbnail.jpg"
    ]
  },
  {
    "id": 36,
    "title": "Handcraft Chinese style",
    "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
    "price": 60,
    "discountPercentage": 15.34,
    "rating": 4.44,
    "stock": 7,
    "brand": "luxury palace",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp",
    "images": [
      "https://i.dummyjson.com/data/products/29/1.jpg",
      "https://i.dummyjson.com/data/products/29/2.jpg",
      "https://i.dummyjson.com/data/products/29/3.webp",
      "https://i.dummyjson.com/data/products/29/4.webp",
      "https://i.dummyjson.com/data/products/29/thumbnail.webp"
    ]
  },
  {
    "id": 37,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/30/1.jpg",
      "https://i.dummyjson.com/data/products/30/2.jpg",
      "https://i.dummyjson.com/data/products/30/3.jpg",
      "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
    ]
  }

]

const LocalStorageData = (value, idvalue, refral) => {
  const StoredData = JSON.parse(localStorage.getItem('MyCardData'))
  if (!StoredData) {
    let userList = []
    userList.push(value);
    refral.classList.add('greencard');
    localStorage.setItem('MyCardData', JSON.stringify(userList));
    AddPriceAndItemDataInLocalStorage(value.price, idvalue)
    showMyCardItems(value)
    notifydata()
  }
  else {
    const StoredData1 = StoredData.find((val) => {
      return val.id === idvalue
    })
    if (StoredData1) {
      alert('cart is aleady added')
      return
    }
    else {
      StoredData.push(value);
      refral.classList.add('greencard');
      localStorage.setItem('MyCardData', JSON.stringify(StoredData))
      AddPriceAndItemDataInLocalStorage(value.price, idvalue)
      showMyCardItems(value)
      notifydata()
    }
  }
}

 
const CardData = (products, startID,endID) => {
  let data = products.filter((data) => data.id >= startID &&  data.id <= endID)
  let CardContainer = document.getElementById('CardDataItem')
  data.map((value) => {

    let showcard = document.createElement('div')
    showcard.className = 'showcard'
    showcard.innerHTML = `<div  id="mySidenav" class="sidenav" ><a onclick = 'MyCardData(${value.id},this)' class='addcard about' id='MakeGreenCard${value.id}'>Add to card </a></div>`
    let imagedata = document.createElement('div')
    imagedata.className = 'imagedata'
    let image = document.createElement('img')
    image.className = 'cardImage'
    let titledata = document.createElement('div')
    titledata.className = 'titledata '
    let priceratingdata = document.createElement('div')
    priceratingdata.className = 'priceratingdata'
    let pricedata = document.createElement('div')
    pricedata.className = 'pricedata'
    let ratingdata = document.createElement('div')
    ratingdata.className = 'ratingdata'
    let branddata = document.createElement('div')
    branddata.className = 'branddata'
    let grandItem = document.createElement('div')
    grandItem.className = 'grandItem'
    image.src = value.images[1]
    imagedata.appendChild(image)
    titledata.innerHTML = `<h6>${value.title}</h6>`
    pricedata.innerHTML = `<p>${value.price}₹</p>`
    ratingdata.innerHTML = `<p> ⭐${value.rating}</p>`
    priceratingdata.append(pricedata, ratingdata)
    branddata.innerHTML = `<p>${value.brand}</p>`
    grandItem.append(imagedata, titledata, priceratingdata, branddata, showcard)
    CardContainer.appendChild(grandItem)

    let getItemsFromLocalStorage = JSON.parse(localStorage.getItem('TotalItems'))
    if(getItemsFromLocalStorage){
      let filterdataformlocalstorage = getItemsFromLocalStorage.filter((val)=> val.id === value.id);
      // console.log("filterdataformlocalstorage",filterdataformlocalstorage);
      if (filterdataformlocalstorage.length) {
      
          document.getElementById(`MakeGreenCard${value.id}`).classList.add('greencard')
          document.getElementById(`MakeGreenCard${value.id}`).innerText = 'Card Added'

      }

    }
  })
}

// HomeLink()
function makecardgreen() {
  const StoredData = JSON.parse(localStorage.getItem('MyCardData'))
  let getItemsFromLocalStorage = JSON.parse(localStorage.getItem('TotalItems'))
  if (getItemsFromLocalStorage) {
    getItemsFromLocalStorage.forEach((val) => {
      // console.log("check green id ",val.id);
      document.getElementById(`MakeGreenCard${val.id}`).classList.add('greencard')
      document.getElementById(`MakeGreenCard${val.id}`).innerText = 'Card Added'


    })
  }

}
function makered() {
  let makeactive = document.querySelectorAll(".ancr") 
  makeactive.forEach((squareDiv) => {
  squareDiv.classList.remove("Active");
})
let makeactive1 = document.querySelectorAll(".fa") 
  makeactive1.forEach((squareDiv) => {
  squareDiv.classList.remove("Active1");
})
}
 


// ManLink()
(function (){
  
  const list = document.getElementById("CardDataItem");
  list.replaceChildren("");
  let data = products.filter((data) => data.id <= 12)

  const dataFromLocalStorage = JSON.parse(localStorage.getItem('MyCardData'));
  if (dataFromLocalStorage) {
  
    dataFromLocalStorage.forEach((val) => {
     data.filter((id)=>{
          if(id.id === val.id){
            try{
              document.getElementById(`MakeGreenCard${val.id}`).classList.remove('greencard')
            document.getElementById(`MakeGreenCard${val.id}`).innerText = 'Add to Card'
             }catch{
              console.log("data not present");
             }
          }
      })
      
    })
  }


  CardData(data,1,12)
  // makecardgreen()
})()
function ManLink(val){
  makered()
  val.classList.add('Active')
  let makeactive = document.querySelectorAll(".ancr")[1]
  let makeactive1 = document.querySelectorAll(".fa")[3];
  makeactive1.classList.add('Active1')
  const list = document.getElementById("CardDataItem");
  list.replaceChildren("");
  let data = products.filter((data) => data.id <= 12)

  const dataFromLocalStorage = JSON.parse(localStorage.getItem('MyCardData'));
  if (dataFromLocalStorage) {
  
    dataFromLocalStorage.forEach((val) => {
     data.filter((id)=>{
          if(id.id === val.id){
             try{
              document.getElementById(`MakeGreenCard${val.id}`).classList.remove('greencard')
            document.getElementById(`MakeGreenCard${val.id}`).innerText = 'Add to Card'
             }catch{
              console.log("data not present");
             }
          }
      })
      
    })
  }


  CardData(data ,1,12 )
  // makecardgreen()
}
function MobileLink(val) {
  makered()
  val.classList.add('Active')
  const list = document.getElementById("CardDataItem");
  let makeactive1 = document.querySelectorAll(".fa")[6];
  makeactive1.classList.add('Active1')
  list.replaceChildren("");
  let data = products.filter((data) => data.id > 12 &&  data.id < 23)

  const dataFromLocalStorage = JSON.parse(localStorage.getItem('MyCardData'));
  if (dataFromLocalStorage) {
  
    dataFromLocalStorage.forEach((val) => {
     data.filter((id)=>{
          if(id.id === val.id){
            try{
              document.getElementById(`MakeGreenCard${val.id}`).classList.remove('greencard')
            document.getElementById(`MakeGreenCard${val.id}`).innerText = 'Add to Card'
             }catch{
              console.log("data not present");
             }
          }
      })
      
    })
  }


  CardData(data,13,22)
  // makecardgreen()
}
function WomanLink(val) {
  makered()
  val.classList.add('Active')
  const list = document.getElementById("CardDataItem");
  let makeactive1 = document.querySelectorAll(".fa")[4]
  makeactive1.classList.add('Active1')
  list.replaceChildren("");
  let data = products.filter((data) => data.id >= 23 && data.id < 33)

  const dataFromLocalStorage = JSON.parse(localStorage.getItem('MyCardData'));
  if (dataFromLocalStorage) {
  
    dataFromLocalStorage.forEach((val) => {
     data.filter((id)=>{
          if(id.id === val.id){
            try{
              document.getElementById(`MakeGreenCard${val.id}`).classList.remove('greencard')
            document.getElementById(`MakeGreenCard${val.id}`).innerText = 'Add to Card'
             }catch{
              console.log("data not present");
             }
          }
      })
      
    })
  }

  CardData(data,23,32)
  // makecardgreen()
}
function HomeLink(val) {
  makered()
  val.classList.add('Active')
  const list = document.getElementById("CardDataItem");
  let makeactive1 = document.querySelectorAll(".fa")[2]
  makeactive1.classList.add('Active1')
  list.replaceChildren("");
  let data = products.filter((data) => data.id >= 33)

  const dataFromLocalStorage = JSON.parse(localStorage.getItem('MyCardData'));
  if (dataFromLocalStorage) {
  
    dataFromLocalStorage.forEach((val) => {
     data.filter((id)=>{
          if(id.id === val.id){
            try{
              document.getElementById(`MakeGreenCard${val.id}`).classList.remove('greencard')
            document.getElementById(`MakeGreenCard${val.id}`).innerText = 'Add to Card'
             }catch{
              console.log("data not present");
             }
          }
      })
      
    })
  }

  CardData(data,33,37)
  // makecardgreen()
}

function WatcheLink(val) {
  makered()
  val.classList.add('Active')
  const list = document.getElementById("CardDataItem");
  let makeactive1 = document.querySelectorAll(".fa")[5]
  makeactive1.classList.add('Active1')
  list.replaceChildren("");
  let data = products.filter((data) => data.id >= 33)
  
  const dataFromLocalStorage = JSON.parse(localStorage.getItem('MyCardData'));
if (dataFromLocalStorage) {

  dataFromLocalStorage.forEach((val) => {
   data.filter((id)=>{
        if(id.id === val.id){
          try{
              document.getElementById(`MakeGreenCard${val.id}`).classList.remove('greencard')
            document.getElementById(`MakeGreenCard${val.id}`).innerText = 'Add to Card'
             }catch{
              console.log("data not present");
             }
        }
    })
    
  })
}

  CardData(data,33,37)
  // makecardgreen()
}

 

function MyCardData(val, refral) {
  products.filter((value) => {
    if (value.id == val) {
      LocalStorageData(value, val, refral);
    }
  })
}

// some Notification code
let notifydata = () => {
  const StoredData = JSON.parse(localStorage.getItem('MyCardData'))
  if (StoredData) {
    let data = StoredData.length;
    document.getElementById('notify').textContent = data

  }
  else {
    document.getElementById('notify').textContent = 0
  }

}


notifydata()



// ================ Add to card box =============================

const showMyCardItems = (value) => {
  let CardContainer = document.getElementById('shopingcardData')
  let imagedata = document.createElement('div')
  imagedata.className = 'imagedata1'
  let image = document.createElement('img')
  image.className = 'cardImage1'
  let seconddiv = document.createElement('div')
  seconddiv.className = 'seconddiv'
  let pricebutton = document.createElement('div')
  pricebutton.className = 'pricebutton1'
  let titledata = document.createElement('div')
  titledata.className = 'titledata1'
  let pricedata = document.createElement('div')
  pricedata.className = 'pricedata1'
  let buttondiv = document.createElement('div')
  buttondiv.className = 'buttondiv'
  buttondiv.innerHTML = `<button onclick="increamentitem(${value.id},${value.price},this)" class='positivebutton'>+</button><h4 id="itemQuantity${value.id}" >1</h4><button onclick="decreamentItem(${value.id},${value.price},this)" class='negativebutton'>-</button>`
  let cartremovebutton = document.createElement('div')
  cartremovebutton.className = 'cartremovebutton'
  cartremovebutton.innerHTML = ` <button onclick="removeItem(${value.id},${value.price},this)"  class='removebutton'>remove</button>`
  let grandItem = document.createElement('div')

  grandItem.className = 'grandItem1'
  grandItem.id = `grandItem${value.id}`
  image.src = value.images[1]
  imagedata.appendChild(image)
  titledata.innerHTML = `<p>${value.title}</p>`
  pricedata.innerHTML = `<p>${value.price}₹</p>`
  pricebutton.append(pricedata,buttondiv)
  seconddiv.append(titledata,pricebutton ,cartremovebutton)
  grandItem.append(imagedata, seconddiv)
  CardContainer.append(grandItem)
  // document.getElementById(`MakeGreenCard${value.id}`).innerText = 'Card Added'
  // document.getElementById(`MakeGreenCard${val.id}`).classList.add('greencard')

}
let removeAllmycart = document.getElementById('RemoveAllMyCart')

removeAllmycart.onclick = () => {

  const dataFromLocalStorage = JSON.parse(localStorage.getItem('MyCardData'));
  if (dataFromLocalStorage) {
   
    dataFromLocalStorage.forEach((val) => {
      console.log(val.id,"checkin");
      let removelelement = document.getElementById(`grandItem${val.id}`)
     
      try{
        document.getElementById(`MakeGreenCard${val.id}`).classList.remove('greencard')
        document.getElementById(`MakeGreenCard${val.id}`).innerText = 'Add to Card'
      }catch{
          console.log(" data not present");
      }

      DeletePriceAndItemDataInLocalStorage(val.price, val.id)
      UpdateAmountBox()
      removelelement.remove()
    })
    let data = []
    let data1 = [{ pricedata: 0, items: 0 }]
    localStorage.setItem('MyCardData', JSON.stringify(data));
    localStorage.setItem('MyPriceAmount', JSON.stringify(data1))
    // DeletePriceAndItemDataInLocalStorage(0,0)
    UpdateAmountBox()
    notifydata()

  }


}


 



function myItemCard() {
  const StoredData = JSON.parse(localStorage.getItem('MyCardData'))
  if (StoredData) {
    StoredData.filter((value) => {
      showMyCardItems(value)
    })
  }

}

myItemCard()

function increamentitem(id, price) {
  let amount = document.getElementById(`itemQuantity${id}`).innerHTML
  document.getElementById(`itemQuantity${id}`).innerText = (Number(amount) + 1)
  AddPriceAndItemDataInLocalStorage(price, id)

}


function decreamentItem(id, price) {

  let amount = document.getElementById(`itemQuantity${id}`).innerHTML


  if (Number(amount) === 1) {
    DeletePriceAndItemDataInLocalStorage(price, id)
    RemoveItemFromLocalStorage(id)

  }
  else {

    let amount = document.getElementById(`itemQuantity${id}`).innerHTML


    document.getElementById(`itemQuantity${id}`).innerText = (Number(amount) - 1)

    DeletePriceAndItemDataInLocalStorage(price, id)

  }

}

function AddPriceAndItemDataInLocalStorage(price, id) {
  const StoredPriceData = JSON.parse(localStorage.getItem('MyPriceAmount'))
  if (StoredPriceData) {
    let pricedata = StoredPriceData[0].pricedata;
    let itemdata = StoredPriceData[0].items
    let newprice = (pricedata + price)
    let newitems = itemdata + 1

    const userPriceAmount = [{ 'pricedata': newprice, 'items': newitems }]
    localStorage.setItem('MyPriceAmount', JSON.stringify(userPriceAmount))
    GetItemAndIdFromLocalStorageIncrease(id)
    UpdateAmountBox()

  } else {
    const userPriceAmount = [{ 'pricedata': price, 'items': 1 }]
    localStorage.setItem('MyPriceAmount', JSON.stringify(userPriceAmount))
    GetItemAndIdFromLocalStorageIncrease(id)
    UpdateAmountBox()
  }

}

function DeletePriceAndItemDataInLocalStorage(price, id) {
  const StoredData = JSON.parse(localStorage.getItem('MyCardData'))
  if (StoredData) {
    // let deletingData = StoredData.find((val) => val.id === id)
    const StoredPriceData = JSON.parse(localStorage.getItem('MyPriceAmount'))
    let pricedata = StoredPriceData[0].pricedata;
    let itemdata = StoredPriceData[0].items
    let newprice = (pricedata - (price))
    let newitems = itemdata -= 1
    const userPriceAmount = [{ 'pricedata': newprice, 'items': newitems }]
    localStorage.setItem('MyPriceAmount', JSON.stringify(userPriceAmount))
    GetItemAndIdFromLocalStorageDecrease(id)
    UpdateAmountBox()
  }
}

function DeleteCardItemBox(id, price) {
  let getItemsFromLocalStorage = JSON.parse(localStorage.getItem('TotalItems'))

  let deletingData = getItemsFromLocalStorage.find((val) => val.id === id)
  let totalitems = ((deletingData.items) * price)
  let itempresent1 = getItemsFromLocalStorage.filter((val) => val.id !== id)
  localStorage.setItem('TotalItems', JSON.stringify(itempresent1))

  const StoredPriceData = JSON.parse(localStorage.getItem('MyPriceAmount'))
  let pricedata = StoredPriceData[0].pricedata;
  let itemdata = StoredPriceData[0].items
  let newprice = (pricedata - totalitems)
  let newitems = (itemdata - (deletingData.items))

  const userPriceAmount = [{ pricedata: newprice, items: newitems }]
  localStorage.setItem('MyPriceAmount', JSON.stringify(userPriceAmount))
  UpdateAmountBox()
}


function GetItemAndIdFromLocalStorageIncrease(id) {
  let getItemsFromLocalStorage = JSON.parse(localStorage.getItem('TotalItems'))
  // const StoredData = JSON.parse(localStorage.getItem('MyCardData'))
  if (getItemsFromLocalStorage) {
    let itempresent = getItemsFromLocalStorage.find((val) => val.id === id)
    if (itempresent) {
      let itempresent1 = getItemsFromLocalStorage.filter((val) => val.id !== id)
      let itemid = id
      let items = (itempresent.items + 1)
      // getItemsFromLocalStorage.remove(itempresent)

      itempresent1.push({ 'id': itemid, items: items })
      localStorage.setItem('TotalItems', JSON.stringify(itempresent1))

    } else {
      let itemid = id
      let items = 1


      getItemsFromLocalStorage.push({ 'id': itemid, items: items })
      localStorage.setItem('TotalItems', JSON.stringify(getItemsFromLocalStorage))
    }

  } else {
    let itemid = id
    let items = 1
    let itemData = []

    itemData.push({ 'id': itemid, items: items })

    localStorage.setItem('TotalItems', JSON.stringify(itemData))

  }
}




function GetItemAndIdFromLocalStorageDecrease(id) {
  let getItemsFromLocalStorage = JSON.parse(localStorage.getItem('TotalItems'))
  // const StoredData = JSON.parse(localStorage.getItem('MyCardData'))
  if (getItemsFromLocalStorage) {
    let itempresent = getItemsFromLocalStorage.find((val) => val.id === id)
    if (itempresent) {
      let itempresent1 = getItemsFromLocalStorage.filter((val) => val.id !== id)
      let itemid = id
      let items = (itempresent.items - 1)
      // getItemsFromLocalStorage.remove(itempresent)

      itempresent1.push({ 'id': itemid, items: items })
      localStorage.setItem('TotalItems', JSON.stringify(itempresent1))
    }

  }

}





function removeItem(id, price) {
  RemoveItemFromLocalStorage(id)
  DeleteCardItemBox(id, price)

}

function myAmountBox() {
  const [totalprice, totalitems, discountpersent] = GetPriceItemDataFromLocalStorage()


  let CardContainer = document.getElementById('shopingcardData')
  let Amountdiv = document.createElement('div')
  Amountdiv.className = 'amountdiv'

  let items = document.createElement('div')
  items.className = 'items'
  items.innerHTML = `<h3>Items</h3><h3>${totalitems}</h3>`

  let discount = document.createElement('div')
  discount.className = 'discount'

  let total = document.createElement('div')
  total.className = 'total'
  total.innerHTML = `<h3>Total</h3><h3>${totalprice}₹</h3>`
  Amountdiv.append(items, discount, total)
  CardContainer.appendChild(Amountdiv);
  // IncreaseAmountValue()

}
myAmountBox()

function GetPriceItemDataFromLocalStorage() {
  const StoredPriceData = JSON.parse(localStorage.getItem('MyPriceAmount'))
  if (StoredPriceData) {
    let pricedata = StoredPriceData[0].pricedata;
    let itemdata = StoredPriceData[0].items
    return [pricedata, itemdata, 10]
  }
  else {
    return [0, 0, 0]
  }
}

function UpdateAmountBox() {
  const [totalprice, totalitems, discountpersent] = GetPriceItemDataFromLocalStorage()
  let items = document.getElementsByClassName('items')[0]
  let total = document.getElementsByClassName('total')[0]
  items.innerHTML = `<h3>Items</h3><h3>${totalitems}₹</h3>`
  total.innerHTML = `<h3>Total</h3><h3>${totalprice}₹</h3>`
}
// function UpdateAmountBox1() {
//   // const [totalprice, totalitems, discountpersent] = GetPriceItemDataFromLocalStorage()
//   let items = document.getElementsByClassName('items')[0]
//   let total = document.getElementsByClassName('total')[0]
//   items.innerHTML = `<h3>Items</h3><h3>${0}₹</h3>`
//   total.innerHTML = `<h3>Total</h3><h3>${0}₹</h3>`
// }

function IncreaseAmountValue() {
  let getItemsFromLocalStorage = JSON.parse(localStorage.getItem('TotalItems'))
  const StoredData = JSON.parse(localStorage.getItem('MyCardData'))
  if (getItemsFromLocalStorage) {
    getItemsFromLocalStorage.forEach((val) => {
      // if (val.item === 0) {
      //   document.getElementById(`itemQuantity${val.id}`).innerText = 0
      //   document.getElementById(`MakeGreenCard${val.id}`).classList.add('greencard')
      //   document.getElementById(`MakeGreenCard${val.id}`).innerText = 'Card Added'

      // }
      // else {
      document.getElementById(`itemQuantity${val.id}`).innerText = val.items
      document.getElementById(`MakeGreenCard${val.id}`).classList.add('greencard')
      document.getElementById(`MakeGreenCard${val.id}`).innerText = 'Card Added'
      // }
    })
  }

}

function RemoveItemFromLocalStorage(id) {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem('MyCardData'));
  // console.log('dataFromLocalStorage',dataFromLocalStorage);
  if (dataFromLocalStorage) {
    let filteredData = dataFromLocalStorage.filter((val) => val.id !== id)

    localStorage.setItem('MyCardData', JSON.stringify(filteredData));
    let removelelement = document.getElementById(`grandItem${id}`)
    // document.getElementById(`MakeGreenCard${id}`).classList.remove('greencard')
    // document.getElementById(`MakeGreenCard${id}`).innerText = 'Add to Card'
    notifydata()
    removelelement.remove()

  }
}
