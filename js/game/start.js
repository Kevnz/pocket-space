define(['crafty', 'game/game','game/scenes/load','game/scenes/stage-1', 'game/scenes/end'],
	function (Crafty, Game, load, stage1, end) {
	return {
		start : function () {
			Crafty.init(Game.width(), Game.height());
			Crafty.canvas.init();
			Crafty.background('#222222');

			stage1.init();
			load.init('stage-1');
            end.init();
			Crafty.scene('load');
            //final scene?
            Crafty.bind('timeup', function (){
                Crafty.scene('end');
            })
		}
	};
});