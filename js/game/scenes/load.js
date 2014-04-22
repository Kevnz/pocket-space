define(['crafty', 'game/assets/loading'], function (Crafty, loading) {

	return {
		init : function (scene) {
			Crafty.scene('load', function () {
				
				Crafty.load(['/assets/SyntaxTerror.png','/assets/ships.png', '/assets/play_pause.png'], function () {
					loading.init();
					Crafty.sprite(32, '/assets/ships.png', {
						Starship: [0, 0],
						EnemyFighter: [1,0],
						EnemyInterceptor: [2,0]
					});
					Crafty.sprite(128, '/assets/play_pause.png', {
						play: [0, 0],
						pause: [1,0]
					});
					setTimeout(function () {
					Crafty.scene(scene);

				}, 200)
				});

				//
				//
			});
		}
	};
});