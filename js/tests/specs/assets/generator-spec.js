define(['crafty', 'game/assets/generator'],function(Crafty, Generator) {
    
 
    describe('Generator', function() {
    //setup crafty, and tear it down.
    
        describe('Generator spawn pattern', function() {
            it('should have the components"', function() {
                Crafty.init(1,1);
                Generator.init();
            });
        });
 
    });
 
})