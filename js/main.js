$('document').ready(function(){
  AOS.init({
    once: true
  });
  $(function(){

    'use strict';

    var $body = $('body'),
              $main = $('#main'),
              $site = $('html, body'),
              transition = 'fade',
              smoothState;

          smoothState = $main.smoothState({
              onBefore: function($anchor, $container) {
                  var current = $('[data-viewport]').first().data('viewport'),
                      target = $anchor.data('target');
                      current = current ? current : 0;
                      target = target ? target : 0;
                  if (current === target) {
                      transition = 'fade';
                  } else if (target === 1) {
                      transition = 'backgroundDarkDown';
                  } else if (target === 0) {
                      transition = 'backgroundDarkUp';
                  } else if (target === -1) {
                    transition = 'imageBecomesHero';
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $($anchor).offset().top
                    }, 500, $.easie(.5,0,0.2,1.0));
                  }
              },
              onProgress : {
                  duration: 0, // Duration of the animations, if any.
                  render: function (url, $container) {
                      $('container').hide();
                  }
              },
              onStart: {
                  duration: 750,
                  render: function (url, $container) {
                      $main.attr('data-transition', transition);
                      $main.addClass('is-exiting');
                  }
              },
              onReady: {
                  duration: 0,
                  render: function ($container, $newContent) {
                      $container.html($newContent);
                      $container.removeClass('is-exiting');
                      AOS.init();
                      $site.animate({scrollTop: 0});
                  }
              },
          }).data('smoothState');
  });
});
