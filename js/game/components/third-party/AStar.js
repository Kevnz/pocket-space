define(['crafty', 'game/utils'], function (Crafty, Utils) {

    return {
        init : function () {
            if (Utils.has('AStar')) return;

            Crafty.c("AStar",{
                _compareNode:function(node1,node2){
                    if(node1.tile[0] != node2.tile[0]) return false;
                    return true;
                },
                _nodeInArray:function(node,array){
                    for(var i in array){
                        if(this._compareNode(node,array[i]))
                            return true;
                    }
                    return false;
                },
                _heuristic:undefined,
                heuristic:function(f){
                    this._heuristic = f;
                    return this;
                },
                _findAdjacent:undefined,
                findAdjacent:function(f){
                    this._findAdjacent = f;
                    return this;
                },
                findPath:function(ignore,weighted,begining,end){
                    if(this._heuristic == undefined || this._findAdjacent == undefined)
                        throw("Exception: You have to declare a heuristic and an adjacent function");
                    function Node(tile,parent,g,h,f){
                        this.tile = tile;
                        this.parent = parent;
                        this.g = g;
                        this.h = h;
                        this.f = f;
                    } 
                    var start = new Node(begining,-1,-1,-1,-1);
                    var destination = new Node(end,-1,-1,-1,-1);
                    var open = [];
                    var closed = [];
                    var g = 0;
                    var h = this._heuristic(start.tile, destination.tile);
                    var f = g+h;
                    open.push(start);
                    while(open.length > 0){
                        open.sort(function(a,b){
                            var x = a.f;
                            var y = b.f;
                            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                        })
                        var current_node = open[0]; 
                        if(this._compareNode(current_node,destination)){
                            var path = [destination.tile];
                            while(current_node.parent != -1){
                                current_node = closed[current_node.parent];
                                path.unshift(current_node.tile);
                            }
                            return path;
                        }
                        open.shift();
                        closed.push(current_node);
                        var adj = this._findAdjacent(current_node.tile);
                        for(var i in adj){
                            if(this._nodeInArray(new Node(adj[i]),closed))
                                continue;
                            if(ignore==undefined || !ignore(current_node.tile,adj[i])){
                                if(!this._nodeInArray(new Node(adj[i]),open)) {
                                    var new_node = new Node(adj[i],closed.length-1,-1,-1,-1);
                                    new_node.g = 0;
                                    if(weighted != undefined)
                                        new_node.g += weighted(current_node.tile,new_node.tile);
                                    new_node.h = this._heuristic(new_node.tile, destination.tile);
                                    new_node.f = new_node.g+new_node.h;
                                    
                                    open.push(new_node);
                                }
                            }
                        }
                    }
                    return [];
                }
            });
        }
    };
});