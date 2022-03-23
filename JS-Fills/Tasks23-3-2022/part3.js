function change() {
    let result = document.getElementById('country').value;
    if (result == "Jordan") {
        document.getElementById('countryimg').src = "Images/flag-of-jordan.jpg";
    } else if (result == "Philistine") {
        document.getElementById('countryimg').src = "Images/philistain-flag.jfif";
    } else if (result == "Canada") {
        document.getElementById('countryimg').src = "Images/Canada-flag.jfif";
    } else if (result == "Syria") {
        document.getElementById('countryimg').src = "Images/Syria-flag.jfif";
    } else if (result == "Iraq") {
        document.getElementById('countryimg').src = "Images/Iraq-flag.jfif";
    }
}