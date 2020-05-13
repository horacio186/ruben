
$(document).ready(function() {

    var menuBtn = $('.menu_icon');
    var menu = $('.navigation ul');
    menu.removeClass('show');
    
    menuBtn.click(function() {

        if(menu.hasClass('show')) {
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }
    })
    
  
})

   

