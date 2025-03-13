document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');
    
    const images = [
        'img/toy1.jpg',
        'img/toy2.jpg',
        'img/toy3.jpg',
        'img/toy4.jpg',
        'img/toy5.jpg'
    ];

    function loadImages() {
        images.forEach(src => {
            const item = document.createElement('div');
            item.classList.add('gallery-item');
            item.innerHTML = `<img src="${src}" alt="Игрушка">`;
            item.onclick = () => expandImage(item);
            galleryContainer.appendChild(item);
        });
    }

    function expandImage(element) {
        if (element.classList.contains('expanded')) {
            element.classList.remove('expanded');
        } else {
            document.querySelectorAll('.gallery-item').forEach(item => item.classList.remove('expanded'));
            element.classList.add('expanded');
            const closeButton = document.createElement('button');
            closeButton.classList.add('close');
            closeButton.innerHTML = '&times;';
            closeButton.onclick = () => element.classList.remove('expanded');
            element.appendChild(closeButton);
        }
    }

    loadImages();
});
