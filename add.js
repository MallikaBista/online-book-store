document.getElementById("quantity").addEventListener("input", function() {
    var quantity = parseInt(this.value);
    var price = 415; // Price per book
    var total = quantity * price;
    document.getElementById("total-price").innerText = "Rs. " + total;
});


 // Get all the tab links
 const tabLinks = document.querySelectorAll('.book-tabs a');
 // Get all the tab contents
 const tabContents = document.querySelectorAll('.tab-content');

 tabLinks.forEach(link => {
     link.addEventListener('click', function (e) {
         e.preventDefault(); // Prevent the default link action (scrolling)

         // Remove 'active' class from all links
         tabLinks.forEach(link => link.classList.remove('active'));
         // Add 'active' class to the clicked link
         link.classList.add('active');

         // Hide all tab contents
         tabContents.forEach(content => content.classList.remove('active'));
         // Show the tab content corresponding to the clicked tab
         const activeContent = document.querySelector(link.getAttribute('href'));
         activeContent.classList.add('active');
});
});