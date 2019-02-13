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
                    // transition = 'imageBecomesHero';
                    transition = 'backgroundDarkDown';
                  }
              },
              onStart: {
                  duration: 750,
                  render: function (url, $container) {
                      $main.attr('data-transition', transition);
                      $main.addClass('is-exiting');
                      // $site.animate({scrollTop: 0});
                  }
              },
              onReady: {
                  duration: 0,
                  render: function ($container, $newContent) {
                      $container.html($newContent);
                      $container.removeClass('is-exiting');
                      AOS.init();
                  }
              },
          }).data('smoothState');
  });
});
