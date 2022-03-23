// <h1 id="head" onmouseover="over()" onmouseout="out()" style="background-color: yellow; width: 200px; height: 90px; border: solid black 2px; text-align: center; padding-top: 40px;">Hello world!</h1>

function over() {
    document.getElementById('head').innerHTML = "Can I help you?";
}

function out() {
    document.getElementById('head').innerHTML = "Hello world!";
}