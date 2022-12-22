
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
    "id": 6,
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
    "id": 11,
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
    "id": 12,
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
    "id": 2,
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
    "id": 16,
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
    "id": 17,
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
    "id": 7,
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
    "id": 21,
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
    "id": 22,
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
    "id": 26,
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
    "id": 27,
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
]


const CardData = () => {
  let CardContainer = document.getElementById('CardDataItem')
  products.map((value) => {

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
  })
}

CardData()

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
  let titleprice = document.createElement('div')
  titleprice.className = 'titleprice1'
  let titledata = document.createElement('div')
  titledata.className = 'titledata1'
  let pricedata = document.createElement('div')
  pricedata.className = 'pricedata1'
  let buttondiv = document.createElement('div')
  buttondiv.className = 'buttondiv'
  buttondiv.innerHTML = `<button onclick="increamentitem(${value.id},${value.price},this)" class='button1'>+</button><h4 id="itemQuantity${value.id}" >1</h4><button onclick="decreamentItem(${value.id},${value.price},this)" class='button1'>-</button> <button onclick="removeItem(${value.id},${value.price},this)"  class='removebutton'>❌</button>`
  let grandItem = document.createElement('div')
  grandItem.className = 'grandItem1'
  grandItem.id = `grandItem${value.id}`
  image.src = value.images[1]
  imagedata.appendChild(image)
  titledata.innerHTML = `<p>${value.title}</p>`
  pricedata.innerHTML = `<p>${value.price}₹</p>`
  titleprice.append(titledata, pricedata)
  seconddiv.append(titleprice, buttondiv)
  grandItem.append(imagedata, seconddiv)
  CardContainer.append(grandItem)
  document.getElementById(`MakeGreenCard${value.id}`).innerText = 'Card Added'

}
let removeAllmycart = document.getElementById('RemoveAllMyCart')

removeAllmycart.onclick = () => {

  const dataFromLocalStorage = JSON.parse(localStorage.getItem('MyCardData'));
  if (dataFromLocalStorage) {
    dataFromLocalStorage.forEach((val) =>{
      let removelelement = document.getElementById(`grandItem${val.id}`)
      document.getElementById(`MakeGreenCard${val.id}`).classList.remove('greencard')
      document.getElementById(`MakeGreenCard${val.id}`).innerText = 'Add to Card'
      DeletePriceAndItemDataInLocalStorage(val.price,val.id)
      UpdateAmountBox()
      removelelement.remove()
    })
    let data = []
    let data1 = [{pricedata: 0, items: 0}]
    localStorage.setItem('MyCardData', JSON.stringify(data));
    localStorage.setItem('MyPriceAmount',JSON.stringify(data1))
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

  const userPriceAmount = []
  console.log("DeleteCardItemBox");
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
  IncreaseAmountValue()

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
    console.log("zero data");
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
  console.log(getItemsFromLocalStorage);


  if (getItemsFromLocalStorage) {
    getItemsFromLocalStorage.forEach((val) => {
      if (val.item === 0) {
        document.getElementById(`itemQuantity${val.id}`).innerText = 0
        document.getElementById(`MakeGreenCard${val.id}`).classList.add('greencard')
        document.getElementById(`MakeGreenCard${val.id}`).innerText = 'Card Added'

      }
      else {
        document.getElementById(`itemQuantity${val.id}`).innerText = val.items
        document.getElementById(`MakeGreenCard${val.id}`).classList.add('greencard')
        document.getElementById(`MakeGreenCard${val.id}`).innerText = 'Card Added'
      }
    })
  }

}

function RemoveItemFromLocalStorage(id) {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem('MyCardData'));
  if (dataFromLocalStorage) {
    let filteredData = dataFromLocalStorage.filter((val) => val.id !== id)

    localStorage.setItem('MyCardData', JSON.stringify(filteredData));
    let removelelement = document.getElementById(`grandItem${id}`)
    document.getElementById(`MakeGreenCard${id}`).classList.remove('greencard')
    document.getElementById(`MakeGreenCard${id}`).innerText = 'Add to Card'
    notifydata()
    removelelement.remove()

  }
}