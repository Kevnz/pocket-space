define(['crafty', 'game/components/actor'], function (Crafty, Actor) {
    return {
        init : function () {
            console.log('Player');
            Actor.init();
            return Crafty.e('Player, Actor, Starship, Collision, SpriteAnimation, Persist')
                .attr({x:200, y:200});
        }
    };
});