define(['crafty','game/utils', 'game/components/actor'], function (Crafty, Utils, Actor) {

    return {
        init : function () { 
            Crafty.c('Enemy', {
                init: function() { 
                	if(!Utils.has('Actor')) {
                		Actor.init();
                	}
                    this.requires('Actor');
                }
            });
        }
    };
});