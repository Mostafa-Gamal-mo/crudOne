var products;
var addbtn = document.getElementById("addbtn");
var minindex = 0;

/* localStorage */

if (localStorage.getItem("products") != null) {
  products = JSON.parse(localStorage.getItem("products"))
  displayProducts(products)


} else {
  products = []
}

/* displayProducts(anyArray)  */

function displayProducts(anyArray) {
  var cartoona = ""

  for (var i = 0; i < anyArray.length; i++) {
    cartoona += `<tr>
     <td>${i}</td>
     <td>${anyArray[i].name}</td>
     <td>${anyArray[i].price}</td>
     <td>${anyArray[i].category}</td>
     <td>${anyArray[i].desc}</td>
     <td>
       <button onclick="updateProdct(${anyArray[i].id})" class="btn btn-outline-warning">Update</button>
     </td>
     <td>
       <button onclick="deleteProdct(${anyArray[i].id})" class="btn btn-outline-danger">Delete</button>
     </td>
   </tr>`
  }
  document.getElementById("tableBody").innerHTML = cartoona;
}

/* addProdct() */

function addProdct() {
  //   if (validateProductName(ProductNameInput.value )) {
  if (validateProductName(ProductNameInput.value) &&validateProductPrice(ProductPriceInput.value) && validateProductCategory(ProductCategoryInput.value) &&validateProductDesc(ProductDescInput.value)) {
    var product = {

      name: ProductNameInput.value,
      price: ProductPriceInput.value,
      category: ProductCategoryInput.value,
      desc: ProductDescInput.value,
      id :Date.now()
    }
    if (addbtn.innerHTML == "Add Proudect") {
      products.push(product)
    } else {
      products.splice(minindex, 1, product)
      addbtn.innerHTML = "Add Proudect"
  
  
    }
    localStorage.setItem("products", JSON.stringify(products))
    displayProducts(products)
    clearform()

  }else{
    alert("Invalidate Input")
  }
  

}

/* updateProdct(id) */

function updateProdct(id) {

  for (var i = 0; i < products.length; i++) {
    if(products[i].id==id){
      minindex = i
    }
  }
  minindex = index
  ProductNameInput.value = products[minindex].name
  ProductPriceInput.value = products[minindex].price
  ProductCategoryInput.value = products[minindex].category
  ProductDescInput.value = products[minindex].desc
  addbtn.innerHTML = "update Prodct"
}

/* deleteProdct(id) */

function deleteProdct(id) {

  for (var i = 0; i < products.length; i++) {
    if(products[i].id==id){
      products.splice(i, 1)
    }
  }
  
  displayProducts(products)
  localStorage.setItem("products", JSON.stringify(products))
}

/* clearform() */

function clearform() {
  ProductNameInput.value = ""
  ProductPriceInput.value = ""
  ProductCategoryInput.value = ""
  ProductDescInput.value = ""
}

/* search(term) */

function search(term) {

  var wantedArray = []

  for (var i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(term.toLowerCase()))

      wantedArray.push(products[i])

  }
  displayProducts(wantedArray)
}







function validateProductName(ProductName) {
  if (/^([A-Z]|[a-z]){3,8}$/.test(ProductName) ) {
    return true
  }else{
    return false
  }


}
function validateProductPrice(ProductPrice) {
  if (/^[0-9]{3,8}$/.test(ProductPrice) ) {
    return true
  }else{
    return false
  }
}
function validateProductCategory(Productcategory) {
  if (/^([A-Z]|[a-z]){2,8}$/.test(Productcategory) ) {
    return true
  }else{
    return false
  }
}
function validateProductDesc(ProductDesc) {
  if (/^([A-Z]|[a-z]){2,8}$/.test(ProductDesc) ) {
    return true
  }else{
    return false
  }
}