// درخواست محصولات جدید از سرور , ساخت المان ها اضافه کردن کلاس ها و اضافه کردن آن به دام
fetch('https://fakestoreapi.com/products').then((res) => {
    return res.json()
}).then((data) => {
    let newArrival = document.querySelector(".newArrival")
    let products = data

    for (let i = 0; i < products.length - 11; i++) {
        let ul = document.querySelector(".items")
        let li = document.createElement("li")
        ul.appendChild(li)
        li.classList.add("li")
        let img = document.createElement("img")
        li.appendChild(img)
        img.src = products[i].image
        img.classList.add("image")
        let title = document.createElement("p")
        title.innerHTML = products[i].title
        li.appendChild(title)
        title.classList.add("title")
        let description = document.createElement("p")
        description.innerHTML = products[i].description
        li.appendChild(description)
        description.classList.add("description")
        let price = document.createElement("p")
        price.innerHTML = products[i].price + " $"
        li.appendChild(price)
        price.classList.add("price")
        let rate = document.createElement("P")
        rate.innerHTML = "Rate : " + products[i].rating.rate
        li.appendChild(rate)
        rate.classList.add("rate")
        let star = document.createElement("span")
        star.classList.add("fas")
        star.classList.add("fa-star")
        rate.appendChild(star)
    }
})

// چپ و راست رفتن محصولات قسمت New Arrival
var right = document.querySelector(".fa-arrow-alt-circle-right")
    let i = 1
    right.addEventListener("click", function () {
    var items = document.querySelectorAll(".new-arrival-item li")
    if (i <= items.length - 3) {
        var myCarusel = document.querySelector(".new-arrival-item")
        myCarusel.style.transform += "translateX(-400px)"
        i++
    }
})
var left = document.querySelector(".fa-arrow-alt-circle-left")
    left.addEventListener("click", function () {
    var items = document.querySelectorAll(".new-arrival-item li")
    if (i <= items.length - 2 && i!=1) {
        var myCarusel = document.querySelector(".new-arrival-item")
        myCarusel.style.transform += "translateX(400px)"
        i--
    }
})

// رفتن به ابتدا وانتهای سایت با استفاده از فلش های بالا و پایین 
let up = document.querySelector(".circle-up")
window.addEventListener("scroll",function(){
if(this.window.pageYOffset >200){
    up.style.display="block"
}else{
    up.style.display="none"
}
})