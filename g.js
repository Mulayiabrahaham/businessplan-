// Toggle the display of the menu in small screens
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Smooth scroll to sections
document.querySelectorAll('.cta-btn').forEach(button => {
    button.addEventListener('click', function () {
        const targetSection = document.querySelector('#preview');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Modal popup for downloading the eBook
function openDownloadForm() {
    document.getElementById('downloadModal').style.display = 'flex';
}

function closeDownloadForm() {
    document.getElementById('downloadModal').style.display = 'none';
}

// Event listeners for modal
document.querySelector('.cta-btn').addEventListener('click', openDownloadForm);
document.querySelector('.close-btn').addEventListener('click', closeDownloadForm);

// Close the modal if clicked outside the content
window.addEventListener('click', function (e) {
    if (e.target == document.getElementById('downloadModal')) {
        closeDownloadForm();
    }
});

