    const btnmenu = document.querySelector(".btn-menu");
    const catalogo = document.querySelector(".catalogo");

   
    btnmenu.addEventListener('click', (event) => {
        event.preventDefault(); 
        catalogo.classList.toggle('catalogo-close');
    });