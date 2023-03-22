function changeColor(NewColor) {
    let elem = document.getElementById('para');
    elem.style.color = NewColor;
}

function objectOn() {
    document.getElementById('link').style.display = 'block';
    document.getElementById('youtubeNone').style.display = 'inline-block';
    document.getElementById('youtubeOn').style.display = 'none';
}

function objectNone() {
    document.getElementById('link').style.display = 'none';
    document.getElementById('youtubeOn').style.display = 'inline-block';
    document.getElementById('youtubeNone').style.display = 'none';
}