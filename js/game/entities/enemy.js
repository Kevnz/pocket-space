define(['crafty', 'game/utils', 'game/components/opponent', ], function (Crafty, Utils, Opponent) {
    return {
        init : function (x,y) {
        	if (!Utils.has('Opponent')) {
        		Opponent.init();
        	}

            return Crafty.e('Enemy, Opponent, EnemyFighter')
            	.attr({x:x,y:y})
        }
    };
});