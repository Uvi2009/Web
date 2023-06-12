/* const foodItem= [
    {
    id: 1,
    name: 'Ambur Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 13,
    img: 'images/biryani/Ambur-Chicken-Biryani.jpg',
    quantity: 1
},
{
    id: 2,
    name: 'Hyderabadi Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 15,
    img: 'images/biryani/Chicken-Biryani-hyd.jpg',
    quantity: 1
},
{
    id: 3,
    name: 'Egg Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 18,
    img: 'images/biryani/egg-biryani.jpeg',
    quantity: 1
},
{
    id: 4,
    name: 'Goan Fish Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 15,
    img: 'images/biryani/goan-fish-biryani.jpg',
    quantity: 1
},
{
    id: 5,
    name: 'Mutton Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 10,
    img: 'images/biryani/hyd-Mutton-Biryani.jpg',
    quantity: 1
},
{
    id: 6,
    name: 'Kamrupi Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 12,
    img: 'images/biryani/kamrupi-biryani.jpg',
    quantity: 1
},
{
    id: 7,
    name: 'Kashmiri Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 13,
    img: 'images/biryani/kashmiri.pulao.jpg',
    quantity: 1
},
{
    id: 8,
    name: 'Memoni Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 20,
    img: 'images/biryani/memonibiryani.png',
    quantity: 1
},
{
    id: 9,
    name: 'Mughlai Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 15,
    img: 'images/biryani/mughlai-biryani.jpg',
    quantity: 1
},
{
    id: 10,
    name: 'Chicken Roast',
    category : 'chicken',
    rating : 4.3,
    price: 11,
    img: 'images/chicken/Chicken_roast.jpg',
    quantity: 1
},
{
    id: 11,
    name: 'Chicken Curry',
    category : 'chicken',
    rating : 4.3,
    price: 10,
    img: 'images/chicken/Chicken-Curry.jpg',
    quantity: 1
},
{
    id: 12,
    name: 'Chicken Do Pyaza',
    category : 'chicken',
    rating : 4.3,
    price: 14,
    img: 'images/chicken/Chicken-do-Pyaza.jpg',
    quantity: 1
},
{
    id: 13,
    name: 'Chicken Masala',
    category : 'chicken',
    rating : 4.3,
    price: 12,
    img: 'images/chicken/Chicken-Masala.jpeg',
    quantity: 1
},
{
    id: 14,
    name: 'Handi Chicken',
    category : 'chicken',
    rating : 4.3,
    price: 17,
    img: 'images/chicken/Handi-chicken.jpg',
    quantity: 1
},
{
    id: 15,
    name: 'Murgh Musallam',
    category : 'chicken',
    rating : 4.3,
    price: 20,
    img: 'images/chicken/Murgh-Musallam.jpg',
    quantity: 1
},
{
    id: 16,
    name: 'Matar Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 15,
    img: 'images/paneer/Matar-Paneer.jpg',
    quantity: 1

},
{
    id: 17,
    name: 'Palak Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 10,
    img: 'images/paneer/palak-paneer.jpg',
    quantity: 1
},
{
    id: 18,
    name: 'Paneer Butter Masala',
    category : 'paneer',
    rating : 4.3,
    price: 15,
    img: 'images/paneer/paneer-butter-masala.jpg',
    quantity: 1

},
{
    id: 19,
    name: 'Paneer Do Pyaza',
    category : 'paneer',
    rating : 4.3,
    price: 12,
    img: 'images/paneer/Paneer-Do-Pyaza.jpg',
    quantity: 1

},
{
    id: 20,
    name: 'Hyderabadi Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 8,
    img: 'images/paneer/Paneer-Hyderabadi.jpg',
    quantity: 1
},
{
    id: 21,
    name: 'Paneer Lababdar',
    category : 'paneer',
    rating : 4.3,
    price: 7,
    img: 'images/paneer/paneer-lababdar.jpg',
    quantity: 1
},
{
    id: 22,
    name: 'Shahi Paneer',
    age: '32',
    category : 'paneer',
    rating : 4.3,
    price: 5,
    img: 'images/paneer/shahi-paneer.jpg',
    quantity: 1
},
{
    id: 23,
    name: 'Navratan Korma',
    category : 'vegetable',
    rating : 4.3,
    price: 8,
    img: 'images/vegetable/navratan-korma_-vegetable.png',
    quantity: 1
},
{
    id: 24,
    name: 'Veg Jalfrezi',
    category : 'vegetable',
    rating : 4.3,
    price: 7,
    img: 'images/vegetable/VEG-JALFREZI.jpg',
    quantity: 1
},
{
    id: 25,
    name: 'Veg Biryani',
    category : 'vegetable',
    rating : 4.3,
    price: 5,
    img: 'images/vegetable/vegetable-biryani.jpg',
    quantity: 1
},
{
    id: 26,
    name: 'Veg Curry',
    category : 'vegetable',
    rating : 4.3,
    price: 7,
    img: 'images/vegetable/vegetable-curry.jpeg',
    quantity: 1
},
{
    id: 27,
    name: 'Veg Kolhapur',
    category : 'vegetable',
    rating : 4.3,
    price: 10,
    img: 'images/vegetable/vegetable-kolhapuri.jpg',
    quantity: 1
},
{
    id: 28,
    name: 'Veg Masala',
    category : 'vegetable',
    rating : 4.3,
    price: 4,
    img: 'images/vegetable/vegetable-masala.jpg',
    quantity: 1
},
{
    id: 29,
    name: 'Veg Pakora',
    category : 'vegetable',
    rating : 4.3,
    price: 4,
    img: 'images/vegetable/vegetable-pakora.jpg',
    quantity: 1
},
{
    id: 30,
    name: 'Momos',
    category : 'chinese',
    rating : 4.3,
    price: 8,
    img: 'images/chinese/cabbage-momos-.jpg',
    quantity: 1
},
{
    id: 31,
    name: 'Chicken Manchurian',
    category : 'chinese',
    rating : 4.3,
    price: 7,
    img: 'images/chinese/ChickenManchurian.jpg',
    quantity: 1
},
{
    id: 32,
    name: 'Chili Chicken',
    category : 'chinese',
    rating : 4.3,
    price: 5,
    img: 'images/chinese/Chili-Chicken.jpg',
    quantity: 1
},
{
    id: 33,
    name: 'Chowmein',
    category : 'chinese',
    rating : 4.3,
    price: 16,
    img: 'images/chinese/chowmin.jpg',
    quantity: 1
},
{
    id: 34,
    name: 'Spring Roll',
    category : 'chinese',
    rating : 4.3,
    price: 14,
    img: 'images/chinese/spring-rolls.jpg',
    quantity: 1
},
{
    id: 35,
    name: 'Szechuan Chicken',
    category : 'chinese',
    rating : 4.3,
    price: 10,
    img: 'images/chinese/szechuan-chicken.jpg',
    quantity: 1
},
{
    id: 36,
    name: 'Fried Rice',
    category : 'chinese',
    rating : 4.3,
    price: 8,
    img: 'images/chinese/veg-fried-rice.jpg',
    quantity: 1
},
{
    id: 37,
    name: 'Butter Masala Dosa',
    category : 'south indian',
    rating : 4.3,
    price: 18,
    img: 'images/south indian/Butter-Masala-Dosa.png',
    quantity: 1
},
{
    id: 38,
    name: 'Idli',
    category : 'south indian',
    rating : 4.3,
    price: 20,
    img: 'images/south indian/idli-with-rice-flour.jpg',
    quantity: 1
},
{
    id: 39,
    name: 'Masala Dosa',
    category : 'south indian',
    rating : 4.3,
    price: 12,
    img: 'images/south indian/masala-dosa.jpg',
    quantity: 1
},
{
    id: 40,
    name: 'Mysore Bonda',
    category : 'south indian',
    rating : 4.3,
    price: 10,
    img: 'images/south indian/mysore-bonda.jpg',
    quantity: 1
},
{
    id: 41,
    name: 'Onion Uttapam',
    category : 'south indian',
    rating : 4.3,
    price: 15,
    img: 'images/south indian/onion-uttapam.jpg',
    quantity: 1
},
{
    id: 42,
    name: 'Plain Dosa',
    category : 'south indian',
    rating : 4.3,
    price: 40,
    img: 'images/south indian/plain-dosa.jpeg',
    quantity: 1
},
{
    id: 43,
    name: 'Rava Uttapam',
    category : 'south indian',
    rating : 4.3,
    price: 25,
    img: 'images/south indian/Rava-Uttapam.jpg',
    quantity: 1
},
{
    id: 44,
    name: 'Sambhar Vada',
    category : 'south indian',
    rating : 4.3,
    price: 34,
    img: 'images/south indian/sambhar-vada.jpg',
    quantity: 1
*/



import {foodItem} from "./fooditem.jd"
 
function displayItem(){
    const biriyani=document.querySelector("#biriyani")
    const chicken=document.querySelector("#chicken")
    const paneer=document.querySelector("#paneer")
    const vegetable=document.querySelector("#vegetable")
    const chinese=document.querySelector("#chinese")
    const southIndian=document.querySelector("#south-indian")
    
    const biriyaniData=foodItem.filter((item)=>item.category==="biryani")
    const chickenData=foodItem.filter((item)=>item.category==="chicken")
    const paneerData=foodItem.filter((item)=>item.category==="paneer")
    const vegetableData=foodItem.filter((item)=>item.category==="vegetable")
    const chineseData=foodItem.filter((item)=>item.category==="chinese")
    const southIndianData=foodItem.filter((item)=>item.category==="south indian")    
    
    for(let item of biriyaniData){
        biriyani.innerHTML+=`
        <div class="item-card">
                        <div class="card-top">
                        <i class="fa fa-star" id="rating">${item.rating}</i>
                        <i class="fa fa-heart-o add-to-cart " id="${item.id}"></i>
                        </div>
                    
                    <img src="./shoppingsite-main/${item.img}"  alt="yu"  >
                    <p id="item-name">${item.name}</p>
                    <p id="item-price">Price : ${item.price}</p>
                    </div>
        `
    }

    for(let item of chickenData){
        chicken.innerHTML+=`
        <div class="item-card">
                        <div class="card-top">
                        <i class="fa fa-star" id="rating">${item.rating}</i>
                        <i class="fa fa-heart-o add-to-cart" id="${item.id}"></i>
                        </div>
                    
                    <img src="./shoppingsite-main/${item.img}"  alt="yu"  >
                    <p id="item-name">${item.name}</p>
                    <p id="item-price">Price : ${item.price}</p>
                    </div>
        `
    }

    for(let item of paneerData){
        paneer.innerHTML+=`
        <div class="item-card">
                        <div class="card-top">
                        <i class="fa fa-star" id="rating">${item.rating}</i>
                        <i class="fa fa-heart-o add-to-cart"  id="${item.id}"></i>
                        </div>
                    
                    <img src="./shoppingsite-main/${item.img}"  alt="yu"  >
                    <p id="item-name">${item.name}</p>
                    <p id="item-price">Price : ${item.price}</p>
                    </div>
        `
    }


    for(let item of vegetableData){
        vegetable.innerHTML+=`
        <div class="item-card">
                        <div class="card-top">
                        <i class="fa fa-star" id="rating">${item.rating}</i>
                        <i class="fa fa-heart-o add-to-cart" id="${item.id}"></i>
                        </div>
                    
                    <img src="./shoppingsite-main/${item.img}"  alt="yu"  >
                    <p id="item-name">${item.name}</p>
                    <p id="item-price">Price : ${item.price}</p>
                    </div>
        `
    }

    for(let item of chineseData){
        chinese.innerHTML+=`
        <div class="item-card">
                        <div class="card-top">
                        <i class="fa fa-star" id="rating">${item.rating}</i>
                        <i class="fa fa-heart-o add-to-cart" id="${item.id}"></i>
                       
                        </div>
                    
                    <img src="./shoppingsite-main/${item.img}"  alt="yu"  >
                    <p id="item-name">${item.name}</p>
                    <p id="item-price">Price : ${item.price}</p>
                    </div>
        `
    }

    for(let item of southIndianData){
        southIndian.innerHTML+=`
        <div class="item-card">
                        <div class="card-top">
                        <i class="fa fa-star" id="rating">${item.rating}</i>
                        <i class="fa fa-heart-o add-to-cart " id="${item.id}"></i>
                        </div>
                    
                    <img src="./shoppingsite-main/${item.img}"  alt="yu"  >
                    <p id="item-name">${item.name}</p>
                    <p id="item-price">Price : ${item.price}</p>
                    </div>
        `
    }
     
}
displayItem()

const cart=document.querySelectorAll(".add-to-cart")
const table=document.querySelector("#table-body")

cart.forEach(item=>item.addEventListener("click",addToCart))

var cartData=[]

let total=0

function addToCart()
{
    const itemId=this.getAttribute("id")
    
    const itemObject=foodItem.find((item)=>item.id==itemId)
      
    if(cartData.indexOf(itemObject)==-1){
    table.innerHTML+=`<tr>
                            <td>
                                <img src="${itemObject.img}" alt="f">
                            </td>
                            <td>
                               ${itemObject.name}
                            </td>
                            <td>
                                <button class="decrease-item">-</button><template></template>
                                <span>1</span>
                                <button class="increase-item">+</button>
                            </td>
                            <td>${itemObject.price}</td>
                        </tr>`

                        document.querySelectorAll('.increase-item').forEach(item=>{
                            item.addEventListener('click',incrementItem)
                        })
                    
                        document.querySelectorAll('.decrease-item').forEach(item=>{
                            item.addEventListener('click',decrementItem)
                        })
        
        //cartData=[...cartData,itemObject]
        cartData.push(itemObject)
       
        document.getElementById(`${this.getAttribute("id")}`).classList.add("toggle-heart")
        
    }
    else{
            alert("Already,Added to the Cart!")
            
    }    
    totalPrice()
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    }) 
    

}

function totalPrice(){    
    document.getElementById("cart-plus").innerHTML=" "+cartData.length + " items"
    document.getElementById("total-item").innerHTML="Total Item : "+cartData.length 

    total=0
    for(let x of cartData){
        total+=x.quantity==1?x.price:x.currentPrice   
    }
    document.getElementById("total-price").innerHTML="Total Price : "+total
}
 
function incrementItem(){
    let itemToInc=this.parentNode.previousSibling.previousSibling.innerText
    console.log(this)
    
    console.log(this.parentNode)
    console.log(this.parentNode.previousSibling)
    console.log(this.parentNode.previousSibling.previousSibling)
    const incObject=cartData.find(item=>item.name==itemToInc)
    let index=cartData.indexOf(incObject)
    cartData[index].quantity+=1
    cartData[index].currentPrice=(cartData[index].quantity==1)?cartData[index].price:cartData[index].price*cartData[index].quantity
    renderingCart()
    totalPrice()
    
}
function decrementItem(){
    let itemToInc=this.parentNode.previousSibling.previousSibling.innerText
    
    const incObject=cartData.find(item=>item.name==itemToInc)
    let index=cartData.indexOf(incObject)

    if(incObject.quantity==1){
        cartData.splice(index,1)
        totalPrice()
        renderingCart()
        if(cartData.length==0){
        document.getElementById("category-list").style.display="flex"
        document.getElementById("food-items").style.display="flex"

        document.getElementById("cart-page").style.display="none"
        document.getElementById("checkout").style.display="none"

        isCart=!isCart
        }
        document.getElementById(`${incObject.id}`).classList.remove("toggle-heart")        
        return
    }

    cartData[index].quantity=(cartData[index].quantity<=1)?1:cartData[index].quantity-1

    cartData[index].currentPrice=cartData[index].quantity*cartData[index].price

    renderingCart()    
    totalPrice()        
}

function renderingCart(){
    table.innerHTML=""
    cartData.forEach(itemObject=>
    table.innerHTML+=`
                         <tr>
                            <td>
                                <img src="${itemObject.img}" alt="f">
                            </td>
                            <td>
                               ${itemObject.name}
                            </td>
                            <td>
                                <button class="decrease-item">-</button><template></template>
                                <span>${(itemObject.quantity<=1)?"1":itemObject.quantity}</span>
                                <button class="increase-item">+</button>
                            </td>
                            <td>${(itemObject.quantity<=1)?itemObject.price:itemObject.currentPrice}</td>
                        </tr>
    
    `)

    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}


document.getElementById("cart-plus").addEventListener("click",handleCart)
let isCart=true
function handleCart(){
    if(cartData.length==0){
        alert("Cart is empty!")
    }
    else if(isCart){
        document.getElementById("category-list").style.display="none"
        document.getElementById("food-items").style.display="none"

        document.getElementById("cart-page").style.display="flex"
        document.getElementById("checkout").style.display="flex"
        

        isCart=!isCart
    }else {
        document.getElementById("category-list").style.display="flex"
        document.getElementById("food-items").style.display="flex"

        document.getElementById("cart-page").style.display="none"
        document.getElementById("checkout").style.display="none"

        isCart=!isCart
    }

}


const add=document.getElementById("address")
add.addEventListener("click",handleAddress)
function handleAddress(){
    let userAddress=prompt("Enter the address ")
    if(userAddress==""){
        add.innerHTML="Your Address"
    }
    else if(userAddress!=null){
        add.innerHTML=""
        add.innerHTML="  "+userAddress
    }

};



document.querySelector("#container").addEventListener('kewdown',uvi);

function uvi(e) {
    console.log(e.key);
}
