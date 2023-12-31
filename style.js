let foodList = [
  {
    name: "Gà cuộn",
    cost: 39.0,
    imageURL:
      "https://static.kfcvietnam.com.vn/images/items/lg/1-Kwaffle.jpg?v=Lnno5L",
    quantity: 10,
    stock: 0,
  },
  {
    name: "Gà cuộn",
    cost: 39.0,
    imageURL:
      "https://static.kfcvietnam.com.vn/images/items/lg/1-Kwaffle.jpg?v=Lnno5L",
    quantity: 10,
    stock: 0,
  },
  {
    name: "Gà cuộn",
    cost: 39.0,
    imageURL:
      "https://static.kfcvietnam.com.vn/images/items/lg/1-Kwaffle.jpg?v=Lnno5L",
    quantity: 10,
    stock: 0,
  },
  {
    name: "Gà cuộn",
    cost: 39.0,
    imageURL:
      "https://static.kfcvietnam.com.vn/images/items/lg/1-Kwaffle.jpg?v=Lnno5L",
    quantity: 10,
    stock: 0,
  },
];

let products = document.getElementsByClassName("product");
let list = document.getElementsByClassName("showcart");

function createProductCard(food) {
  let card = document.createElement("div");
  card.className = "item-card";
  card.innerHTML = `
    <img src="${food.imageURL}" alt=""/>
                    <div class="item">  
                        
                        
                    </div> 
     </div>`;

  let item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `
    <div class="item-detail">
      <div class="name"><b>${food.name}</b></div>
      <div class="cost"><b>${food.cost}₫</b></div>
    </div>
    <div class="item-desc">Số lượng: ${food.quantity}</div>
  `;

  let btnBox = document.createElement("div");
  btnBox.className = "bot-card";

  let btnAdd = document.createElement("button");
  let btnText = document.createElement("b");
  btnText.innerText = "Thêm";

  btnAdd.appendChild(btnText);
  btnBox.appendChild(btnAdd);
  item.appendChild(btnBox);
  card.appendChild(item);

  btnBox.addEventListener("click", () => {
    if (food.quantity > 0) {
      food.quantity--;
      addToCart(food);
      item.innerHTML = `
      <div class="item-detail">
        <div class="name"><b>${food.name}</b></div>
        <div class="cost"><b>${food.cost}₫</b></div>
    </div>
    <div class="item-desc">Số lượng ${food.quantity}</div>
      `;
      btnAdd.appendChild(btnText);
      btnBox.appendChild(btnAdd);
      item.appendChild(btnBox);

      let cart_item = document.createElement("div");
      cart_item.className = "cart_item";
      cart_item.innerHTML = `
    <div class="item-detail">
      <div class="name"><b>${food.name}</b></div>
      <div class="cost"><b>${food.cost}₫</b></div>
    </div>
    <div class="item-desc">Số lượng ${food.stock}</div>
  `;
      console.log(cart_item);

      list[0].appendChild(cart_item);
     
    } else {
      alert("Hết đồ ăn rồi !!!!");
      return;
    }
  });

  return card;
}


let cartList = [];

function addToCart(food) {
  let isExist = false;
  if (cartList.length == 0) {
    cartList.push({
      ...food,
      stock: 1,
      quantity: food.quantity,
    });
    console.log(cartList);
    return;
  }
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].name == food.name) {
      cartList[i].quantity = food.quantity;
      cartList[i].stock += 1;
      console.log(cartList);
      isExist = true;
      return;
    }
  }
  if (!isExist) {
    cartList.push({
      ...food,
      quantity: food.quantity,
      stock: 1,
    });
    console.log(cartList);
  }
}

for (let z = 0; z < products.length; z++) {
  for (let j = 0; j < foodList.length; j++) {
    products[z].appendChild(createProductCard(foodList[j]));
  }
}
