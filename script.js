// Function to show the modal with service details
function showServiceDetails(serviceName, documents, time, price) {
    // Set the content of the modal
    document.getElementById('serviceTitle').innerText = serviceName;
    document.getElementById('serviceDocuments').innerText = documents;
    document.getElementById('stipulatedTime').innerText = time;
    document.getElementById('servicePrice').innerText = price;

    // Display the modal
    document.getElementById('serviceModal').style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById('serviceModal').style.display = "none";
}

// Function to filter services based on search input
document.getElementById('searchBar').addEventListener('input', function() {
    let searchQuery = this.value.toLowerCase();
    let rows = document.querySelectorAll('#serviceList tr');

    rows.forEach(function(row) {
        let serviceName = row.cells[1].innerText.toLowerCase();
        if (serviceName.indexOf(searchQuery) > -1) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});

