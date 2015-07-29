$(function() {

    // Настройки lightbox
   lightbox.option({
      'resizeDuration': 300,
      'wrapAround': true // вкл. круговой просмотр
    });

    // Настройки accordion
    $( ".accordion" ).accordion({
        collapsible: true, // позволяет сворачиваться
        active: 1, // 1-й заголовок будет свернутый
    });

});