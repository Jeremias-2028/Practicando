window.onscroll = function(){
    
    scroll = document.documentElement.scrollTop; //Sacamos el valor del scroll

    header = document.getElementById("header"); //obtenemos el id de header

    if (scroll > 20){ // si se cumple la condicion del if
        header.classList.add('nav__mov');   //salta la clase imaginaria de css
    }else if (scroll < 20){ 
        header.classList.remove('nav__mov'); //si el scroll es menor de 20 la clase se elimina
    }

}