define(['crafty', 'game/game', 'game/components/third-party/SpriteText'], function (Crafty, Game, SpriteText) {


	return {
		init : function () {
            console.log('init of loading')
            SpriteText.init();

            var FONT_SYNTAX_TERROR = "http://starmelt.github.com/craftyjstut/img/OSDM_Fnt32x32_SyntaxTerror-Copy2.png"
            var txt1 = 'LOADING';
            /*
            http://localhost:4321/assets/SyntaxTerror.png
            
            var txt = Crafty.e("2D, Canvas, SpriteText")
                            .attr({x:Game.width()/2 - 60, y: Game.height()/2 - 24, w: txt1.length*Game.SpriteFont.width, h: Game.SpriteFont.height})
                            .registerFont("bold_whitefont", Game.SpriteFont.width, '/assets/bold_whitefont.png', 
                                "ABCDEFGHIJKLMNOPQRSTUVWXYZ.,!?;:'0123456789abcdefghijklmnopqrstuvwxyz%|()-+&\"[]/")
                            .text(txt1);
            */
                var txt2 = "SyntaxTerror Font (Canvas)      !";
                var ts2 = 32;
                var text2 = Crafty.e("2D, Canvas, SpriteText, Color")
                            .attr({x: 0, y: 100, w: txt1.length*ts2 + 100, h: ts2})
                            .registerFont("SyntaxTerror", ts2, FONT_SYNTAX_TERROR)
                            .text(txt1);
			console.log(text2);
    		return text2;
		}
	};
});