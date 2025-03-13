function expandImage(element) {
    if (element.classList.contains('expanded')) {
        element.classList.remove('expanded');
    } else {
        document.querySelectorAll('.gallery-item').forEach(item => item.classList.remove('expanded'));
        element.classList.add('expanded');
    }
}
