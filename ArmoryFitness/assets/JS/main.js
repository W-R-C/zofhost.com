
document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".pricing-tab");
    const locations = document.querySelectorAll(".pricing-location");

    // Switch between gym locations
    tabs.forEach(tab => {

        tab.addEventListener("click", function () {

            const selectedLocation = this.dataset.location;

            // Remove active class from all tabs
            tabs.forEach(button => {
                button.classList.remove("active");
            });

            // Hide all location packages
            locations.forEach(location => {
                location.classList.remove("active");
            });

            // Activate clicked tab
            this.classList.add("active");

            // Show selected location packages
            const selectedSection = document.getElementById(selectedLocation);

            if (selectedSection) {
                selectedSection.classList.add("active");
            }

        });

    });

});
