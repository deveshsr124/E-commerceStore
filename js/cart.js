let products=[
    
    { 
        name:'Casual Shirt',
        tag:'Casual Shirt',
        img:'553459fa-43ce-4c68-9491-db34f19985a01598936291470-US-Polo-Assn-Men-Grey-Tailored-Fit-Solid-Casual-Shirt-715159-4.jpg',
        price:900 ,
        incart:0,
    },
     
    {
        name:'Sneakers',
        tag:'Sneakers',
        img:'d0945f5f-bb57-45a6-9615-7aea74707d201586861228235-ADIDAS-Men-Navy-Sedna-Running-Shoes-7821586861226106-1.webp',
        price:2999,
        incart:0,
    },

    {
        name:'Slim fit jeans',
        tag:'Slim fit jeans',
        price:1900,
        img:'60785496-7974-463b-b604-634d33ce6cde1599120622296-BEAT-LONDON-by-PEPE-JEANS-Men-Jeans-6291599120620590-1.jpg',
        incart:0,
    },
       
    {
        name:'Dining Table',
        tag:'Dining Table',
        img:'5.jpg',
        price:4999,
        incart:0,
    },

    {
        name:'Pearl and Stone Anklet',
        tag:'Pearl and Stone Anklet',
        img:'10.jpg',
        price:'900',
        incart:0,
    },

    {
        name:'Wall Lamp',
        tag:'Wall Lamp',
        img:'6.jpg',
        price:2999,
        incart:0,
    },

    {
        name:'Bangles',
        tag:'Bangles',
        img:'11.jpg',
        price:1900,
        incart:0,
    }


];
let cartTotal = document.querySelector(".cart-total");
let clearCart = document.querySelector(".clear-cart");

let carts=document.querySelectorAll('.buy-btn');
for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        alert("Item added to cart");
        cartNumbers(products[i]);
          totalCost(products[i]);
    })
}

function onLoadcartnumbers(){
    let productNumbers=localStorage.getItem('cartNumbers',1);
    if (productNumbers){
       
        document.querySelector('.cart-count').textContent=productNumbers;
    }
  
}

function cartNumbers(products){
    
    let productNumbers=localStorage.getItem('cartNumbers',1);
    productNumbers=parseInt(productNumbers);
   if (productNumbers){
       localStorage.setItem('cartNumbers',productNumbers + 1);
       document.querySelector('.cart-count').textContent=productNumbers+1;
   }
   else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart-count').textContent=1;
   }
   setItems(products);
}

function setItems(products){
      let cartItems=localStorage.getItem('productsInCart');
      cartItems = JSON.parse(cartItems);
        if(cartItems != null){
                if( cartItems[products.name] == undefined){
                     cartItems={
                         ...cartItems,[products.name]:products
                     }
                }
             cartItems[products.name].incart += 1;
       }
       else{
            products.incart=1;
            
         cartItems= {
             [products.name]: products
         }
        
    }   

    localStorage.setItem("productsInCart",JSON.stringify(cartItems));

}


function totalCost(products){
   // console.log('the price is ',products.price);
   let cartCost=localStorage.getItem('totalCost');
  
   if(cartCost != null){
       cartCost=parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + products.price);
   }
    else{
        localStorage.setItem("totalCost", products.price);
   }

  
}

function displayCart(){
   let cartItems=localStorage.getItem('productsInCart');
   cartItems=JSON.parse(cartItems);
   
   let cartRow=document.querySelector('.cart-row');
  
   if(cartItems && cartRow){
       cartRow.innerHTML='';
       Object.values(cartItems).map(function(items) {
        cartRow.innerHTML += `
 <div class = "cart-item col-md-3 col-3 cart-img">
    <img src = "${items.img}" alt = "">
    </div> 
    <div class = "col-lg-6 col-md-6 col-6">
    <h5> ${items.name} </h5> 
    <h6> Rs. ${items.price} </h6> 
    <span class = "remove-item"> remove </span> 
    </div>
    <div class = "col-md-3 col-3" ><div>
      <i style = "color: #4cd3c2" class = "fas fa-chevron-up"> </i> 
      <p class = "item-amount" >${items.incart}</p> 
      <i style = "color: #4cd3c2" class = "fas fa-chevron-down" > </i> 
      </div> 
    </div>
  `
    });

       cartTotal.innerHTML = localStorage.getItem("totalCost");
}
  
}

onLoadcartnumbers();
displayCart();

clearCart.addEventListener("click", function () {
    localStorage.clear();
    alert("Refresh the page");
});