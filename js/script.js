// This file contains JavaScript functionality for the treasure hunt website.

document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    const frenchContent = document.querySelectorAll('.french');
    const englishContent = document.querySelectorAll('.english');

    function showFrench() {
        frenchContent.forEach(element => {
            element.style.display = 'block';
        });
        englishContent.forEach(element => {
            element.style.display = 'none';
        });
    }

    function showEnglish() {
        englishContent.forEach(element => {
            element.style.display = 'block';
        });
        frenchContent.forEach(element => {
            element.style.display = 'none';
        });
    }

    if (languageToggle) {
        languageToggle.addEventListener('change', function() {
            if (this.value === 'french') {
                showFrench();
            } else {
                showEnglish();
            }
        });
    }

    // Default to French on page load
    showFrench();
});