requirejs.config({
    baseUrl: '/',
    shim: {
        crafty: {
            exports: 'Crafty'
        },
        domready: {
            exports: 'onDomReady'
        },
        sift: {
            exports: 'sift'
        }
    },
    waitSeconds: 10
});

requirejs.config( {
    paths: {
    //Project Paths
        game: 'js/game',
        util: 'js/util',
        crafty: 'js/libs/crafty',
        domready: 'js/libs/ondomready',
        sift: 'js/libs/sift'
    }
});

require(['game/start'], function (game) {
    game.start();
});