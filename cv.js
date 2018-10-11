function cacher() {

    var x = document.getElementById('mydiv');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById('bouton').innerHTML = '-';
    } else {
        x.style.display = 'none';
        document.getElementById('bouton').innerHTML = '+';

    }
}

function cacher2() {

    var x = document.getElementById('mydiv2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById('bouton2').innerHTML = '-';
    } else {
        x.style.display = 'none';
        document.getElementById('bouton2').innerHTML = '+';
    }
}

function cacher3() {

    var x = document.getElementById('mydiv3');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById('bouton3').innerHTML = '-';
    } else {
        x.style.display = 'none';
        document.getElementById('bouton3').innerHTML = '+';
    }
}