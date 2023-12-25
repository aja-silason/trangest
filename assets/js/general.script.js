/*Menu show */
var menu = document.querySelector('.menuComplete2');

window.addEventListener('scroll', function(){
    menu.classList.toggle('ativoMenu', window.scrollY > 100);  
      
});

/*Menu show */

/*Esconder e mostrar paragrafo */

function showHide(par){
    let paragrafo = document.querySelector(`.${par}`);
    paragrafo.classList.toggle('hide');
    
    return paragrafo;
}

/*Esconder e mostrar paragrafo */

//-------------------

/*Esconder e mostrar o submenu da categoria */

function hideAndShowThings(visibleThing, targetThing, hideOrShowThing, event){
    //pega a class do item que se pretende mostrar/ocultar
    let itemVisible = document.querySelector(`.${visibleThing}`);
    //pega a class do item que é clicado e tido como alvo
    let isTarget = event.target.classList.contains(`${targetThing}`);
    //faz a comparação do item e a mudança entre adicionar e remover a class do item com a class
    let showThing = isTarget ? itemVisible.classList.toggle(`${hideOrShowThing}`) : '';

    return showThing;
}

document.addEventListener('click', (e)=>{

    hideAndShowThings('itemCategory', 'catItem', 'visible', e);
});


/*Esconder e mostrar o submenu da categoria */