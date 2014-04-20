define(['crafty'], function (Crafty) {

    return {
        init : function () {
            Crafty.c('Actor', {
                init: function() { 
                    this.requires('2D, Canvas, Collision');
                }
            });
        }
    };
});