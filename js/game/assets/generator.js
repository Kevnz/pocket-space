define(['crafty','game/utils', 'game/entities/enemy'], function (Crafty, Utils, Enemy) {

    return {
        init : function () { 
            Enemy.init();
            Crafty.e('Enemy, EnemyFighter');
        }
    };
});