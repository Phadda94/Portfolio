function toggleMenu() {
    const navbarList = document.getElementById('navbar-list');
    const menuButton = document.getElementById('menuButton');

    if (navbarList.style.display === 'flex') {
        navbarList.style.display = 'none';
        menuButton.style.display = 'block';
    } else {
        navbarList.style.display = 'flex';
        menuButton.style.display = 'none';
        
        // Add an event listener to close the menu when clicking outside
        document.addEventListener('click', closeMenuOnClickOutside);
    }
}

function closeMenuOnClickOutside(event) {
    const navbarList = document.getElementById('navbar-list');
    const menuButton = document.getElementById('menuButton');
    const header = document.getElementById('header');

    // Check if the click is outside the header
    if (!header.contains(event.target)) {
        navbarList.style.display = 'none';
        menuButton.style.display = 'block';

        // Remove the event listener after the menu is closed
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

// Adjust menu visibility and button visibility on resize
window.addEventListener('resize', function() {
    const navbarList = document.getElementById('navbar-list');
    const menuButton = document.getElementById('menuButton');
    if (window.innerWidth > 768) {
        // Desktop: Show navbar and hide menu button
        navbarList.style.display = 'flex';
        menuButton.style.display = 'none';
    } else {
        // Mobile: Hide navbar and show menu button
        navbarList.style.display = 'none';
        menuButton.style.display = 'block';
    }
});


