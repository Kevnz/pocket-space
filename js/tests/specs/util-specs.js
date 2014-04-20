define(['crafty', 'game/utils'], function(Crafty, Utils) {
 
  describe('Utils', function() {
 
    describe('Utils #has should determine if a component has been loaded', function() {

      it('should determine component is not loaded', function componentCheck () {
      	var res = Utils.has('Sample');
      	res.should.equal(false)
        Crafty.c('Sample', {sampleFunc : function (){ }});
        Utils.has('Sample').should.equal(true)

      });
    });
 
  });
 
})