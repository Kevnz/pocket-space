define(['crafty','game/game', 'game/components/actor'], function (Crafty, Game, Actor) {
    return {
        init : function () {
            console.log('Player');
            Actor.init();
            var ship = Crafty.e('Player, Actor, Starship, Collision, SpriteAnimation, Persist, Tween')
                .attr({x:Game.width()/2 - 58, y: Game.height() * 2, _w: 132, _h: 132 })
                .tween({x:Game.width()/2 - 58, y: Game.height()/2 - 58}, 3000);
            return ship;
        }
    };
});