
$(document).ready(function() {

    var menuBtn = $('.menu-icon');
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

   

