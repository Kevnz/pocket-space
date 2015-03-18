define(['crafty', 'game/game', 'game/components/display'], function (Crafty, Game, Display) {
    return {
        init : function () {
            Crafty.scene('end', function () {
                Display.init();
                var TheEnd = Crafty.e('Display').text('The End').attr({x:Game.width()/2, y:200})
                .font(Game.Font);
            });
        }
    };
});