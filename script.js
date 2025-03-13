document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery");
    
    // Попытка загрузить изображения с предсказуемыми именами
    const maxImages = 20; // Укажите максимальное количество изображений
    for (let i = 1; i <= maxImages; i++) {
        const imgSrc = `./images/toy${i}.jpg`;
        console.log(`Проверяем изображение: ${imgSrc}`);
        
        const img = new Image();
        img.src = imgSrc;
        img.alt = "Мягкая игрушка";
        img.onload = function () {
            console.log(`Загружено: ${imgSrc}`);
            const imgWrapper = document.createElement("div");
            imgWrapper.classList.add("gallery-item");
            imgWrapper.appendChild(img);
            galleryContainer.appendChild(imgWrapper);
        };
        img.onerror = function () {
            console.warn(`Изображение не найдено: ${imgSrc}`);
        };
    }
});
