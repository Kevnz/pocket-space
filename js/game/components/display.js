define(['crafty','game/game'], function (Crafty, Game) {
    return {
        init : function (x,y) {
            Crafty.c('Display', {
                init: function() {
                    this.requires('2D, Canvas, SpriteText, Persist');
                    this.attr({ x: x, y: y, w: 100, h: 20, zIndex:200 });
                    this.font('SyntaxTerror');
 
                } 
            });
        }
    };
});