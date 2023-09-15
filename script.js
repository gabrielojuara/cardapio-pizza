let show = true; 
const menucontent = document.querySelector('.content');
const togglemenu = menucontent.querySelector('.toggle-menu');

togglemenu.addEventListener('click', () => {

    menucontent.classList.toggle('on', show);
    show = !show;

});