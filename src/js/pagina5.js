document.getElementById('menu-icon').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');

    
         console.log("pagina5.js carregado!");
    
    console.log(navList);  // Verificar se navList foi encontrado
    navList.classList.toggle('active');
});
