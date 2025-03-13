document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery");

    // Список изображений (можно дополнить)
    const images = [
        "images/toy1.jpg",
        "images/toy2.jpg",
        "images/toy3.jpg"
    ];

    images.forEach(src => {
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("gallery-item");
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Мягкая игрушка";
        imgWrapper.appendChild(img);
        galleryContainer.appendChild(imgWrapper);
    });
});
