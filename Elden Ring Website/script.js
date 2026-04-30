// Function to display the last modified date for each HTML page
function displayLastModified() {
    let lastMod = document.lastModified;
    document.getElementById("lastModified").innerHTML = "Last Modified: " + lastMod;
}