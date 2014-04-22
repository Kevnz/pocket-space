define(['crafty', 'game/game', 'game/components/display'], function (Crafty, Game, Display) {
    return {
        init : function () {
            Display.init(Game.width()/2 - 120, Game.height() - 30)

            Crafty.e('Display').attr({time:3 * 60}).text('Time: 4:00').bind('EnterFrame', function (f) {
                //50
                if(this.time === 0) {
                   Crafty.trigger('timeup');
                   return;     
                }
                if(f.frame % 25 === 0) {
                    this.time = this.time - 1;
                    var displayTime = (this.time) / 60;
                    var displayTimeView = displayTime.toString().split('.')[0] + ':';
                    var part = (this.time % 60) < 10 ? ('0' + (this.time % 60)) : (this.time % 60);
                    this.text('Time: ' + displayTimeView + part);

                }
            });
        }
    };
});