//your code here!document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById('infi-list');
    let itemCount = 10;

    function addListItem() {
        const newItem = document.createElement('ol');
        newItem.textContent = `Item ${itemCount + 1}`;
        list.appendChild(newItem);
        itemCount++;
    }

    // Add initial 10 list items
    for (let i = 0; i < 10; i++) {
        addListItem();
    }

    // Function to check if user has scrolled to the bottom
    function isScrollAtBottom() {
        return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
    }

    window.addEventListener('scroll', function() {
        if (isScrollAtBottom()) {
            for (let i = 0; i < 2; i++) {
                addListItem();
            }
        }
    });
});