modules.define('header', ['i-bem-dom'], function(provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    let _burger = this.findChildElem({ block: 'navigation' }).findChildElem({ elem: 'hamburger' });
console.log(_burger); // Check if the element is found

_burger._domEvents().on('click', function(){
    console.log('Burger clicked'); // Check if click event is registered
    _burger.toggleMod('open-pushy');
    document.querySelector('.page_theme_main').classList.toggle('open-pushy');
});

                    _burger._domEvents().on('click', function(){
                         _burger.toggleMod('open-pushy');
                         document.querySelector('.page_theme_main').classList.toggle('open-pushy');
                    })
                }
            }
        }
    }));
    
    });
    $(function() {
        let header = $('.header');
        $(window).scroll(function() {
          if($(this).scrollTop() > 1) {
           let hederHeight = header.height(); // вычисляем высоту шапки
           header.addClass('header_fixed');
           $('body').css({
              'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
           });
          } else {
           header.removeClass('header_fixed');
           $('body').css({
            'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
           })
          }
        });
    });