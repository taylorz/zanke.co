$('document').ready(function(){
Barba.Pjax.start();

var HideShowTransition = Barba.BaseTransition.extend({
  start: function() {
    this.newContainerLoading.then(this.finish.bind(this));
  },


  finish: function() {
    document.body.scrollTop = 0;
    this.done();
  }
});

Barba.Pjax.getTransition = function() {
  return HideShowTransition;
};

});
