const Class_make_up = document.querySelector(".make-up");
// console.log(Class_make_up);
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
    let card = document.querySelectorAll(".item")
    if (card.length>0){
        for (let values of card){
            values.parentNode.removeChild(values)
        }
    }
    for (let index = 0; index < product.length; index++){
        myPro = product[index];
        myPro.dataset_index = index;
        // console.log(myPro);

        let item = document.createElement('div');
        item.className = "item";
    
        let Img = document.createElement('div');
        Img.className = "img";
        
        let getImg =document.createElement("img");
        getImg.src = myPro.Image;

    
        let title = document.createElement('div');
        title.className = "title";
        
    
        let name_product = document.createElement("h3");
        name_product.className = "name_product";
        name_product.textContent = myPro.namePro;
        // console.log(myPro.namePro);
        

        // name_product.textContent = document.querySelector("#name");
    
        let price_product = document.createElement('p');
        price_product.textContent= myPro.price;
        
    
        let star = document.createElement("div");
        star.className="star-rating";

        let edit = document.createElement("div");
        edit.className="edit-product";

        let aDelete = document.createElement("a");
        aDelete.href = "";

        let detialInformation = document.createElement("p");
        console.log(detialInformation);

        detialInformation.textContent = myPro.Detial;


        let imgDelete = document.createElement("img");
        imgDelete.className="delete";
        imgDelete.src = "../img/delete.png";
        imgDelete.addEventListener("click",deleteProduct);

        let aEdit = document.createElement("a");
        aEdit.href = "";
        aEdit.addEventListener("click",editProduct);
        let imgEdit = document.createElement("img");
        imgEdit.className = "editpro";
        imgEdit.src = "../img/edit.png";
        aDelete.appendChild(imgDelete);
        aEdit.appendChild(imgEdit);
        
        edit.appendChild(aDelete);
        edit.appendChild(aEdit);

        Img.appendChild(getImg);
        title.appendChild(name_product);
        title.appendChild(detialInformation);
        title.appendChild(star);
        title.appendChild(price_product);
        item.appendChild(Img);
        item.appendChild(title);
        item.appendChild(edit);
        Class_make_up.appendChild(item);
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

function onCancel(){
    hide(dom_dialog)
}
// save product -------------------------------------------------------------!
function saveProduct() {
    localStorage.setItem("product", JSON.stringify(product));
}

// update data -------------------------------------------------------------!

function updateData() {
    let data = JSON.parse(localStorage.getItem("product"));
    if (product !==null){
        product =  data;
    }
}



// edit product-------------------------------------------------------------!



function editProduct(event) {
    event.preventDefault();
    // show the dialog --------------------------!
    show(dom_dialog);
    let text = document.getElementById("create");
    text.textContent = "Update";
    let edit = document.querySelectorAll(".editpro");
    for (let index in edit){
        if (edit[index]==event.target){
            console.log(edit[index].parentElement.parentElement)

            let card_dialog = document.querySelector('dialog');
            card_dialog.style.display = "block";

            let btn_update = document.querySelector("#create");
            btn_update.addEventListener('click',updateData)

        }
    }
    saveProduct();
    addProduct();
    
}

// delete product ----------------------------------------------------------!





function deleteProduct(event) {

    let index = event.target.parentElement.parentElement.dataset.index;
    product.splice(index,1);

  // Save to local storage

    saveProduct();


    addProduct();
}



// create product button--------------------------------------------------!


  

function onCreate(){
    hide(dom_dialog); 
    let newProduct = {};
    newProduct.namePro = document.getElementById("name").value;
    newProduct.price = document.getElementById("price").value;
    newProduct.Image = document.getElementById("Photos").value;
    product.push(newProduct); 
    console.log(newProduct.Image);
    saveProduct();
    addProduct();
}


// saveProduct();
updateData();
addProduct();

saveProduct();
