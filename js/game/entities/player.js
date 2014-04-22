define(['crafty','game/game', 'game/components/actor'], function (Crafty, Game, Actor) {
    return {
        init : function () {
            console.log('Player');
            Actor.init();
            return Crafty.e('Player, Actor, Starship, Collision, SpriteAnimation, Persist')
                .attr({x:Game.width()/2 - 16, y:Game.height() - 128 });
        }
    };
});