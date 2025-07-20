document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.card button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Added to Cart!');
       });
});
});