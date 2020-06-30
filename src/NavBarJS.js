// src/NavBarJS
/*
// Get all the nav-btns in the page
let navBtns = document.querySelectorAll('.nav-btn');

// Add an event handler for all nav-btns to enable the dropdown functionality
navBtns.forEach(function (ele) {
    ele.addEventListener('click', function() {
        // Get the dropdown-menu associated with this nav button (insert the id of your menu)
        let dropDownMenu = document.getElementById('header-menu');

        // Toggle the nav-btn and the dropdown menu
        ele.classList.toggle('active');
        dropDownMenu.classList.toggle('active');
    });
});
*/

document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.nav-btn'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });
  
