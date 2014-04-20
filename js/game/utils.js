define(['crafty'], function (Crafty) {

    return {
        has : function (component) { 
            var comps = Crafty.components();

            return comps[component] !== undefined;
        }
    };
});