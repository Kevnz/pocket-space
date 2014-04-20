define(['crafty', 'game/components/actor'],function(Crafty, Actor) {
    
 
    describe('Actor', function() {
    //setup crafty, and tear it down.
    
        describe('Sample Actor', function() {
            it('should have the components"', function() {
                Crafty.init(1,1);
                Actor.init();
                var actorEntity = Crafty.e('Actor');

                actorEntity.has('2D').should.equal(true);
                actorEntity.has('Canvas').should.equal(true);
                actorEntity.has('Collision').should.equal(true);
                actorEntity.has('Canvas').should.equal(true);
            });
        });
 
    });
 
})