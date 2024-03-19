var openSubMenus = document.querySelectorAll('.open_submenu');
var subMenus = document.querySelectorAll('.submenu');

openSubMenus.forEach(function(openSubMenu, index) {
    openSubMenu.addEventListener('click' , function() {
        subMenus[index].classList.toggle('show');
    });
});

document.addEventListener('click', function(e) {
    subMenus.forEach(function(subMenu) {
        if (subMenu.classList.contains('show')
            && !subMenu.contains(e.target)
            && !Array.from(openSubMenus).some(function(openSubMenu) { 
                return openSubMenu.contains(e.target); })) {
            subMenu.classList.remove('show');
        }
    });
});