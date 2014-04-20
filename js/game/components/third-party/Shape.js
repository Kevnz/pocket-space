define(['crafty', 'game/utils'], function (Crafty, Utils) {

    return {
        init : function () {
            if (Utils.has('Shape')) return;

			/**@
			* #Shape
			* @category Graphics
			* Draw a geometric shape.
			*/
			Crafty.c("Shape", {
				_shape: null, // type

				init: function() {
					this.requires('2D, Color');

					this._color = this._color || "#000";
					this._drawMethods.default = this.draw;
				},

				/**@
				* #.rect
				* @comp Shape
				* @trigger Change
				* @sign public this .rect(Number width, Number height)
				* @param Number width - width of rectangle
				* @param Number height - height of rectangle
				*
				* @example
				* ~~~
				* var myRectangle = Crafty.e("2D, Canvas, Shape").rect(100,250);
				* ~~~
				*/
				rect: function(w, h) {
					this._shape = "rect";
					this.w = w || 1;
					this.h = h || this._w;

					if (this.has('DOM')) {
						this.css('border-radius','0%');
					}
					else {
						this.draw = this._drawMethods.default;
					}

					this.trigger('Change');
					return this;
				},

				/**@
				* #.circle
				* @comp Shape
				* @trigger Change
				* @sign public this .circle(Number radius)
				* @param Number radius - radius of circle
				*
				* @example
				* ~~~
				* var myCircle = Crafty.e("2D, Canvas, Shape").circle(55);
				* ~~~
				*/
				circle: function(radius) {
					this._shape = "circle";
					this.radius = radius || 1;
					this.w = this.h = this.radius * 2;

					if (this.has('DOM')) {
						this.css('border-radius','50%');
					}
					else {
						this.draw = this._drawMethods.circle;
					}

					this.trigger('Change');
					return this;
				},

				_drawMethods: {
					circle : function () {
						if (!this.ready) return;
						var c = Crafty.canvas.context;	

						c.save();

						if (this._mbr) {
							c.translate(this._origin.x + this._x, this._origin.y + this._y);
							c.rotate((this._rotation % 360) * (Math.PI / 180) /*Deg to Rad*/);
						}

						if(this._flipX || this._flipY) {
							c.scale((this._flipX ? -1 : 1), (this._flipY ? -1 : 1));
						}

						if (this._alpha < 1.0) {
							var globalpha = c.globalAlpha;
							c.globalAlpha = this._alpha;
						}

						c.fillStyle = this._color;
						c.beginPath();
						c.arc(this.radius, this.radius, this.radius, 0, Math.PI * 2);
						c.closePath();
						c.fill();
						c.restore();

						return this;
					},
				},
			});

		}
    };
});