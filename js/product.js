let data = JSON.parse(localStorage.getItem("product"));
let Class_make_up = document.querySelector(".make-up");

function deplyProduct() {
    let card = document.querySelectorAll(".item")
    if (card.length>0){
        for (let values of card){
            values.parentNode.removeChild(values)
        }
    }
    for (let index = 0; index < data.length; index++){
        myPro = data[index];
        myPro.dataset_index = index;
       

        let item = document.createElement('div');
        item.className = "item";
    
        let Img = document.createElement('div');
        Img.className = "img";
        
        let getImg =document.createElement("img");
        getImg.src = myPro.Image;

        let abtn = document.createElement("a");
        abtn.href = "../page/card.html";

        let btn_buy = document.createElement("button");
        btn_buy.className = "btn-buy";
        btn_buy.textContent = "Buy";

        abtn.appendChild(btn_buy);

        let title = document.createElement('div');
        title.className = "title";
        
        
        let detialInformation = document.createElement("p");
        detialInformation.className = "detial-information";
        detialInformation.textContent = myPro.Detial;


        let name_product = document.createElement("h3");
        name_product.className = "name_product";
        name_product.textContent = myPro.namePro;
        
    
        let price_product = document.createElement('p');
        price_product.textContent= myPro.price;
        
        let star = document.createElement("div");
        star.className="star-rating";
        star.innerHTML = "★ ★ ★ ★ ★";
        star.style.color="orange";
        star.style.marginRight = "80px";
        star.style.marginTop = "5px";
        star.style.marginBottom = "5px";

        let aDelete = document.createElement("a");
        aDelete.href = "";

        Img.appendChild(getImg);
        title.appendChild(name_product);
        title.appendChild(detialInformation);
        title.appendChild(price_product);
        title.appendChild(star);
        title.appendChild(abtn);
        item.appendChild(Img);
        item.appendChild(title);
        Class_make_up.appendChild(item);
        console.log(Class_make_up);
    }
    
}

function searchProduct(event) {
    // 1- Get the search text
    let searchProductInput = document.querySelector("form-control");
    let search = searchProductInput.value.toLowerCase()
    // 2- Loop on all LI {
    for (let x of product.children) {
      let title = x.children[0].textContent.toLowerCase()
      x.style.display = "none";
      // console.log(title)
        if (title === search || title.includes(search)){
            console.log(title)
            x.style.display = "block";
  
        }
    }
    
  console.log(x);
}

deplyProduct();
