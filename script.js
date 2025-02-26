function toggleBox(event, box) {
    if (!box.classList.contains('expanded')) {
        document.querySelectorAll('.box').forEach(item => {
            item.classList.remove('expanded');
        });
        box.classList.add('expanded');
    }
    event.stopPropagation();
}
