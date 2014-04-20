define(['crafty', 
		'game/entities/player', 
		'game/entities/scoreboard', 
		'game/entities/clock'
		], 
	function (Crafty, Player, Scoreboard, Clock) {


	return {
		init : function () {
			Crafty.scene('stage-1', function () { 
                Scoreboard.init();
                Clock.init();
                Player.init();
				Crafty.bind('wave-cleared', function () {
					

				})

 			});
		}
	};
});