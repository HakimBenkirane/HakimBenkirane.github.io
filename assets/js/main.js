// Add this script at the end of your body tag
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const publications = document.querySelectorAll('.publication-card');

    // Function to handle filtering
    function filterPublications(filterType) {
        publications.forEach(pub => {
            if (filterType === 'all') {
                pub.style.display = 'grid';
            } else {
                pub.style.display = pub.dataset.type === filterType ? 'grid' : 'none';
            }
        });
    }

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter type from button text
            let filterType = this.textContent.toLowerCase();
            if (filterType === 'all publications') filterType = 'all';
            if (filterType === 'journal articles') filterType = 'journal';
            if (filterType === 'conference papers') filterType = 'conference';
            if (filterType === 'preprints') filterType = 'preprint';
            
            // Apply filter
            filterPublications(filterType);
        });
    });
});