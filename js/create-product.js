
const our_product = document.querySelector(".our-product");
let dom_dialog = document.querySelector("dialog");
let addPro = document.querySelector(".add-product");
addPro.addEventListener("click",onClickAddPro);

let product =[
    {
        namePro:"Brush 1 set",
        price:"0.99$",
        Image:"../img/brush.png",
        Detial:"Smoth"
    },
    {
        namePro:"BB cream",
        price:"2.99$",
        Image:"../img/bb.png",
        Detial:"Smoth"
    },
    {
        namePro:"maskara",
        price:"1.99$",
        Image:"../img/merit.png",
        Detial:"Smoth"
    },
    {
        namePro:"Serom",
        price:"0.99$",
        Image:"../img/serom.png",
        Detial:"Smoth"
    },
];


function addProduct() {
    card = document.querySelector(".make-up");
    // console.log(card)
    card.remove();
    card =document.createElement("div");
    card.className="make-up";
    our_product.appendChild(card);

    for (let index = 0; index < product.length; index++){
        myPro = product[index];

        let item = document.createElement('div');
        item.className = "item";
        console.log(item)
        item.dataset.index = index;
    
        let Img = document.createElement('div');
        Img.className = "img";
        
        let getImg =document.createElement("img");
        getImg.className = "getImg";
        getImg.src = myPro.Image;

    
        let title = document.createElement('div');
        title.className = "title";
        
    
        let name_product = document.createElement("h3");
        name_product.className = "name_product";
        name_product.textContent = myPro.namePro;
        

    
        let price_product = document.createElement('p');
        price_product.className = "price_product";
        price_product.textContent= myPro.price;
        
    
        let star = document.createElement("div");
        star.className="star-rating";
        star.innerHTML = "★ ★ ★ ★ ★";
        star.style.color="orange";
        star.style.marginRight = "100px";
        star.style.marginTop = "10px";
        star.style.marginBottom = "10px";

        let edit = document.createElement("div");
        edit.className="edit-product";
        edit.style.borderTop = "solid 1px  black";
        edit.marginTop = "15px";

        let aDelete = document.createElement("a");
        aDelete.href = "";
        aDelete.style.marginRight = "100px";
        aDelete.style.marginTop = "10px";

        let detialInformation = document.createElement("p");
        detialInformation.className = "detial-information";
        detialInformation.textContent = myPro.Detial;

        let imgDelete = document.createElement("img");
        imgDelete.className="delete";
        imgDelete.src = "../img/delete.png";
        imgDelete.addEventListener("click",deleteProduct);

        
        
        let imgEdit = document.createElement("img");
        imgEdit.className = "editpro";
        imgEdit.src = "../img/edit.png";
        imgEdit.addEventListener("click",editProduct);
        imgEdit.style.marginTop = "10px";

        aDelete.appendChild(imgDelete);
        
        edit.appendChild(aDelete);
        edit.appendChild(imgEdit);

        Img.appendChild(getImg);
        title.appendChild(name_product);
        title.appendChild(detialInformation);
        title.appendChild(star);
        title.appendChild(price_product);
        item.appendChild(Img);
        item.appendChild(title);
        item.appendChild(edit);
        card.appendChild(item);
    }
    // saveProduct();
    // console.log(Class_make_up);
}

// hide show dialog------------------------------------------------!


function hide(element) {
    element.style.display = "none";
}
  
function show(element) {
    element.style.display = "block";
}


function onClickAddPro(e){
    show(dom_dialog)
    let text = document.getElementById("create");
    text.textContent = "Create";
}


// cancel button-------------------------------------------------------!


// save product -------------------------------------------------------------!
function saveProduct() {
    localStorage.setItem("product", JSON.stringify(product));
}

// update data -------------------------------------------------------------!

function updateData() {
    let data = JSON.parse(localStorage.getItem("product"));
    if (data !==null){
        product =  data;
    }
}






// edit product-------------------------------------------------------------!



function editProduct(event) {
    show(dom_dialog);
    document.querySelector("menu").lastElementChild.textContent = "Edit";
    let index = event.target.parentElement.parentElement.dataset.index;
    console.log(index)
    let myPro = product[index];
    document.querySelector(".name_product").value = myPro.namePro;
    document.querySelector(".price_product").value = myPro.price;
    document.querySelector(".getImg").value = myPro.Image;
    document.querySelector(".detial-information").value = myPro.Detial;
    console.log(myPro)
    

    product.splice(index,1);
    // saveProduct();
    // addProduct();
    
}


// delete product ----------------------------------------------------------!

function deleteProduct(event) {
    event.preventDefault();

    let index = event.target.parentElement.parentElement.dataset.index;
    
    
    console.log(index)
    product.splice(index,1);

  // Save to local storage
    saveProduct();

    addProduct();
}

function onCancel(e){
    hide(dom_dialog)
}
// create product button--------------------------------------------------!

function onCreate(e){
    hide(dom_dialog); 
    let newProduct = {};
    newProduct.namePro = document.getElementById("name").value;
    newProduct.price = document.getElementById("price").value;
    newProduct.Image = document.getElementById("Photos").value;
    newProduct.Detial = document.getElementById("detail-more").value;
    product.push(newProduct); 
    // console.log(newProduct.Image);

    saveProduct();
    addProduct();
}

// saveProduct();
updateData();

addProduct();
saveProduct();

