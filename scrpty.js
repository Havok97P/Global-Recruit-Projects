window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("header-shrink", window.scrollY > 0);
  });
  $(document).ready(function() {
    // Animação fade-in do header
    $('header').addClass('animate-fade-in').viewportChecker({
      classToAdd: 'animated',
      offset: 100
    });
  
    // Animação slide-up dos projetos
    $('#section_1, #section_2, #section_3, #section_4').addClass('animate-slide-up').viewportChecker({
      classToAdd: 'animated',
      offset: 100
    });
  
    // Animação bounce do ícone HTML/CSS/JS
    $('#symbol_1').addClass('animate-bounce').viewportChecker({
      classToAdd: 'animated',
      offset: 100
    });
  });
  $(document).ready(function() {
    // Animação fade-in do header
    $('header').addClass('animate-fade-in').viewportChecker({
      classToAdd: 'animated',
      offset: 100
    });
  
    // Animação slide-up dos projetos
    $('#section_1, #section_2, #section_3, #section_4').addClass('animate-slide-up').viewportChecker({
      classToAdd: 'animated',
      offset: 100
    });
  
    // Animação bounce do ícone HTML/CSS/JS
    $('#symbol_1').addClass('animate-bounce').viewportChecker({
      classToAdd: 'animated',
      offset: 100
    });
  
    // Evento de clique no botão "Ver projeto"
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  });
    