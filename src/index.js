const productImage = document.querySelector("#sofa");
const changeIcon = document.querySelector("#icon");
const sofa3D = document.querySelector("#sofa-3d");

changeIcon.addEventListener("click", toggleImageToGif);

function toggleImageToGif() {
    if (changeIcon.classList.contains("active")){
        productImage.style.display = "none"
        sofa3D.innerHTML = `<model-viewer src="src/assets/scene.gltf" alt="Sofa" shadow-intensity="1" camera-controls ar touch-action="pan-y">`
        changeIcon.src = "src/imgs/icon-close.svg"
        changeIcon.classList.remove('active')
    }else {
        productImage.style.display = "block";
        sofa3D.innerHTML = ""
        changeIcon.src = "src/imgs/icon-360g.svg"
        changeIcon.classList.add("active")
    }
}