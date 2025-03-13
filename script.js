document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    const lightboxLink = document.createElement("a");
    lightboxLink.id = "lightbox-link";
    lightboxLink.textContent = "Подробнее";
    lightboxLink.target = "_blank";
    lightboxLink.style.display = "none";
    lightbox.appendChild(lightboxLink);

    const maxImages = 6; // Укажите максимальное количество изображений

    // Загружаем ссылки из JSON-файла
    fetch("image_links.json")
        .then(response => response.json())
        .then(imageLinks => {
            for (let i = 1; i <= maxImages; i++) {
                const imgSrc = `./images/toy${i}.jpg`;
                const imgName = `toy${i}.jpg`;
                
                const imgWrapper = document.createElement("div");
                imgWrapper.classList.add("gallery-item");
                
                const img = new Image();
                img.src = imgSrc;
                img.alt = "Мягкая игрушка";
                img.classList.add("gallery-img");
                
                img.loading = "lazy"; // Ленивая загрузка
                img.decoding = "async"; // Асинхронное декодирование
                
                img.onerror = function () {
                    console.warn(`Изображение не найдено: ${imgSrc}`);
                };
                
                imgWrapper.appendChild(img);
                galleryContainer.appendChild(imgWrapper);
                
                img.addEventListener("click", function () {
                    lightbox.classList.add("active");
                    const lightboxImg = document.createElement("img");
                    lightboxImg.src = img.src;
                    
                    while (lightbox.firstChild) {
                        lightbox.removeChild(lightbox.firstChild);
                    }
                    
                    lightbox.appendChild(lightboxImg);
                    
                    if (imageLinks[imgName]) {
                        lightboxLink.href = imageLinks[imgName];
                        lightboxLink.style.display = "block";
                        lightbox.appendChild(lightboxLink);
                    } else {
                        lightboxLink.style.display = "none";
                    }
                });
            }
        })
        .catch(error => console.error("Ошибка загрузки JSON:", error));
    
    lightbox.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });
});
