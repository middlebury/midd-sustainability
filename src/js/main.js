(function() {

    document.querySelector('.menu-btn').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#midd-menu').classList.toggle('menu-open')
    });

})();
