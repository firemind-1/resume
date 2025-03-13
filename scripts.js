// Массив с дополнительными изображениями (пути к ним в папке images)
const moreImages = [
    { src: 'images/toy4.jpg', alt: 'Игрушка 4', description: 'Описание игрушки 4' },
    { src: 'images/toy5.jpg', alt: 'Игрушка 5', description: 'Описание игрушки 5' },
    { src: 'images/toy6.jpg', alt: 'Игрушка 6', description: 'Описание игрушки 6' },
    { src: 'images/toy7.jpg', alt: 'Игрушка 7', description: 'Описание игрушки 7' },
    { src: 'images/toy8.jpg', alt: 'Игрушка 8', description: 'Описание игрушки 8' },
];

// Функция для добавления новых изображений в галерею
function loadMoreImages() {
    const gallery = document.getElementById('gallery');

    // Добавляем новые элементы
    moreImages.forEach(image => {
        const div = document.createElement('div');
        div.classList.add('col-md-4', 'gallery-item');
        div.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" class="img-fluid rounded mb-3">
            <p>${image.description}</p>
        `;
        gallery.appendChild(div);
    });

    // Скрываем кнопку после загрузки
    document.getElementById('load-more').style.display = 'none';
}

// Обработчик для кнопки "Загрузить больше"
document.getElementById('load-more').addEventListener('click', loadMoreImages);
