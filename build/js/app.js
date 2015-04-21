// Custom JS Application Code

// If using JSLint for syntax debugging, include the following
/*global $, console */

// import libraries
// @codekit-prepend "../bower_components/jquery/dist/jquery.min.js"
// @codekit-prepend "../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js"
// @codekit-prepend "../bower_components/jQuery.mmenu/dist/js/jquery.mmenu.min.all.js"

var App = {

    settings: {
        name: "PixKit",
        version: "0.1.4",
        ga: {
            urchin: "UA-XXXXXX-XX",
            url: "https://github.com/PixLandMedia/PixKit"
        }
    },

    init: function() {
        // Kick off the listeners
        this.listen();
        
        // jQuery mMenu has been initalized
        this.mMenu();

        // Application has been initalized
        console.log(this.settings.name + "(v" + this.settings.version + ") Started");
    },

    listen: function() {
        // Application Listeners can be loaded here for easy configuration      
        console.log("Ready and Listening");
    },

    mMenu: function() {

       jQuery(document).ready(function() {
            
            jQuery("#mm-menu").mmenu({
               "slidingSubmenus": false,
               "classes": "mm-slide",
               "extensions": [
                  "theme-dark"
               ],
               "footer": {
                  "add": true,
                  "title": "PixKit Theme"
               },
               "header": {
                  "title": "Menu",
                  "add": true,
                  "update": true
               }
            });
         });
    },

};


$(function() {
    App.init();
});