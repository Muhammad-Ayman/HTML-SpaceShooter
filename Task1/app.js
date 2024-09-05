let imgs = [
  "images/HnylIxj.jpg",
  "images/HnyloOu.jpg",
  "images/HnylTWx.jpg",
  "images/HnylxDb.jpg",
];
let imglist = document.querySelector(".imgList");
let main = document.querySelector(".mainImg");
let mainImg = main.querySelector("img");
let imgElements = [];
let getProducts = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  console.log(data);
  return data;
};
getProducts();
for (img of imgs) {
  let imgElement = document.createElement("img");
  imgElement.src = img;
  imgElement.alt = "image";
  imgElement.classList.add("imgli");
  imgElement.onclick = () => {
    document.querySelector(".active").classList.remove("active");
    mainImg.src = imgElement.src;
    imgElement.classList.add("active");
  };
  imgElements.push(imgElement);
}
imgElements[0].classList.add("active");

imglist.append(...imgElements);
