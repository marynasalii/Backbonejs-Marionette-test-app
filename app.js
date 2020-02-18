(function() {

    var View = Mn.View.extend({
      template: '#template-layout'
    });
  
    // entry point
    var App = Mn.Application.extend({
      region: '#app',
  
      onStart: function() {
        this.showView(new View());
      }
    });
  
    var app = new App();
  
    app.start();
  
  })();