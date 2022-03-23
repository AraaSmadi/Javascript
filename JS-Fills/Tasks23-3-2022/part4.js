function ChangeFontType() {
    let result = document.getElementById('Font_type').value;
    if (result == "Arial") {
        document.getElementById('par').style.fontFamily = 'Arial';
    } else if (result == "cursive") {
        document.getElementById('par').style.fontFamily = 'cursive';
    } else if (result == "Times New Roman") {
        document.getElementById('par').style.fontFamily = 'Times New Roman';
    } else if (result == "fantasy") {
        document.getElementById('par').style.fontFamily = 'fantasy';
    } else if (result == "Impact") {
        document.getElementById('par').style.fontFamily = 'Impact';
    }
}

function ChangeFontSize() {
    let result = document.getElementById('Font_size').value;
    if (result == "8px") {
        document.getElementById('par').style.fontSize = '8px';
    } else if (result == "12px") {
        document.getElementById('par').style.fontSize = '12px';
    } else if (result == "16px") {
        document.getElementById('par').style.fontSize = '16px';
    } else if (result == "20px") {
        document.getElementById('par').style.fontSize = '20px';
    } else if (result == "24px") {
        document.getElementById('par').style.fontSize = '24px';
    }
}
let par = document.getElementById('par');
if (document.getElementById("Italic").Checked) {
    par.style.fontStyle = 'italic';
}
if (document.getElementById("Bold").Checked) {
    par.style.fontSize = 'Bold';
}
if (document.getElementById("#Underline").Checked) {
    par.style.textDecorationLine = 'Underline';
}