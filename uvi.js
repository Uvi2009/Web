import { foodItem } from './fooditem.js'
 
 
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
