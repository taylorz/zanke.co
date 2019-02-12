$('document').ready(function(){
  AOS.init();
//   // Contents of functions.js
//   var smoothState = $page.smoothState({
//       onStart: {
//         duration: 1000,
//         render: function (url, $container) {
//           // Add your CSS animation reversing class
//           $page.addClass('is-exiting');
//
//           // Restart your animation
//           smoothState.restartCSSAnimations();
//
//           // anything else
//         }
//       },
//       onEnd: {
//         duration: 0,
//         render: function (url, $container, $content) {
//           // Remove your CSS animation reversing class
//           $page.removeClass('is-exiting');
//
//           // Inject the new content
//           $container.html($content);
//         }
//       }
//     }).data('smoothState');
$(function(){
  'use strict';
  var $page = $('#main'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        onStart: {
          duration: 1000, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-exiting');
            // Inject the new content
            $container.html($newContent);
          }
        }
      },
      smoothState = $page.smoothState(options).data('smoothState');
});

});
