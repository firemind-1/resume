document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery");
    
    const maxImages = 20; // Укажите максимальное количество изображений
    for (let i = 1; i <= maxImages; i++) {
        const imgSrc = `./images/toy${i}.jpg`;
        
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("gallery-item");
        
        const img = new Image();
        img.src = imgSrc;
        img.alt = "Мягкая игрушка";
        img.classList.add("gallery-img");
        
        img.loading = "lazy"; // Ленивая загрузка изображений
        img.decoding = "async"; // Асинхронное декодирование
        
        img.onerror = function () {
            console.warn(`Изображение не найдено: ${imgSrc}`);
        };
        
        imgWrapper.appendChild(img);
        galleryContainer.appendChild(imgWrapper);
    }
});
