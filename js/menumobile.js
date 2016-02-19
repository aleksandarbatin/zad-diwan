var nav = document.getElementById('navmenu_list');
    var ham = document.getElementById('menu_ham');
    var cross = document.getElementById('menu_x');

function toggleNav(e) {
    nav.classList.toggle('expanded');
    ham.classList.toggle('hideham');
    cross.classList.toggle('visiblex');
    e.preventDefault();
}

document
    .getElementById('navmenu')
    .getElementsByClassName('menu_button')[0]
    .onclick = toggleNav;

nav.onclick = toggleNav;