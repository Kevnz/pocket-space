require.config({
  baseUrl: '/',
  paths: {
    crafty        : '/js/libs/crafty',
    mocha         : 'bower_components/mocha/mocha',
    chai          : 'bower_components/chai/chai',
    game          : 'js/game',
    util          : 'js/util',
    ondomready    : 'js/libs/ondomready',
    sift          : 'js/libs/sift',
    specs         : 'js/tests/specs' 
  },
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
  urlArgs: 'bust=' + (new Date()).getTime()
});
 
require(['require', 'chai', 'mocha'], function(require, chai){
 
  // Chai
  var should = chai.should();
 
  /*globals mocha */
  mocha.setup('bdd');
 
  require([
    'js/tests/specs/util-specs.js',
    'js/tests/specs/components/actor-specs.js',
  ], function(require) {
    mocha.run();
  });
 
});