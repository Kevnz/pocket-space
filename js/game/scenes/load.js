define(['crafty', 'game/assets/loading'], function (Crafty, loading) {

	return {
		init : function (scene) {
			Crafty.scene('load', function () {
				loading.init();
				Crafty.load(['/assets/ships.png', '/assets/play_pause.png', '/assets/SyntaxTerror.png'], function () {
					console.log('splicing');
					Crafty.sprite(32, '/assets/ships.png', {
						Starship: [0, 0],
						EnemyFighter: [1,0],
						EnemyInterceptor: [2,0]
					});
					Crafty.sprite(128, '/assets/play_pause.png', {
						play: [0, 0],
						pause: [1,0]
					});

					Crafty.scene(scene);
				});

				//
				//
			});
		}
	};
});