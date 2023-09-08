//about button
const openModal = document.querySelector("#open");
const closeModal = document.querySelector("#close");
const modalList = document.querySelector("#modal");
openModal.addEventListener("click", () => {
    modalList.classList.add("active");
    overlayArea.classList.add("overlayactive");
});
closeModal.addEventListener("click", () => {
    modalList.classList.remove("active");
    overlayArea.classList.remove("overlayactive");
});
const overlayArea = document.querySelector(".overlay");
overlayArea.addEventListener("click", () => {
    modalList.classList.remove("active");
    overlayArea.classList.remove("overlayactive");
});
//connect me button
const openModal2 = document.querySelector("#open2");
const closeModal2 = document.querySelector("#close2");
const modalList2 = document.querySelector("#modal2");
openModal2.addEventListener("click", () => {
    modalList2.classList.add("active");
    overlayArea.classList.add("overlayactive");
});
closeModal2.addEventListener("click", () => {
    modalList2.classList.remove("active");
    overlayArea.classList.remove("overlayactive");
});
overlayArea.addEventListener("click", () => {
    modalList2.classList.remove("active");
    overlayArea.classList.remove("overlayactive");
});

//connect me button inside about section
const openModal3=document.querySelector("#open3");
openModal3.addEventListener("click",()=>{
    modalList.classList.remove("active");
    modalList2.classList.add("active");
    overlayArea.classList.add("overlayactive");
})