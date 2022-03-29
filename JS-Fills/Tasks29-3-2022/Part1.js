async function loadData() {
    const response = await fetch('https://www.breakingbadapi.com/api/characters');
    const data = await response.json();
    for (i = 0; i < data.length; i++) {
        document.getElementById('name').innerHTML += '<option>' + data[i].name + '</option>';
        console.log(data);
    }

}

loadData();

async function change() {
    let result = document.getElementById('name').value;
    const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${result}`);
    const data = await response.json();
    let index = 0;
    for (i = 0; i < data.length; i++) {
        if (result == data[i].name) {
            index = i;
            document.getElementById('se').innerHTML = 'nickname selected is :  ' + data[index].nickname;
        }
    }
}

