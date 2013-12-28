var o = {
	_rate : 0,
	init: function(rate){
		this._rate = rate;
		this.diagram();
	},
	diagram: function(){
		var r = Raphael('diagram', 176, 176),
			rad = 70,
			defaultText = this._rate + '%',
			speed = 250;
		r.circle(88, 88, 40).attr({ stroke: 'none', fill: '#FFF' });
		var tx = 88;
		var ty = 88;
		var title = r.text(tx, 100, defaultText).attr({
			font: '36px Arial',
			fill: '#cfcfcf'
		}).toFront();
		var rr = 0;
		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6 * value,
				alpha = v == 360 ? 359.99 : v,
				random = rr,
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = 88 + rad * Math.cos(b),
				sy = 88 - rad * Math.sin(b),
				x = 88 + rad * Math.cos(a),
				y = 88 - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
				rr = 216;
			return { path: path, stroke: color }
		}
		//正确的
		
		var that = this;
		
		var z = r.path().attr({ arc: [this._rate, '#7ac21e', rad], 'stroke-width': 20 });
			
		z.mouseover(function(){
                this.animate({ 'stroke-width': 30, opacity: .75 }, 1000, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
				this.toFront();
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					this.attr({ text: '正确率' + that._rate + '%',font: '16px Arial',y:ty }).animate({ opacity: 1 }, speed, '<');
				});
        }).mouseout(function(){
				this.stop().animate({ 'stroke-width': 20, opacity: 1 }, speed*4, 'elastic');
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					title.attr({ text: defaultText,font: '36px Arial' ,y:ty}).animate({ opacity: 1 }, speed, '<');
				});	
        });
		//错误的
		z = r.path().attr({ arc: [(100 - this._rate), '#f00', rad], 'stroke-width': 20 });
		z.mouseover(function(){
                this.animate({ 'stroke-width': 30, opacity: .75 }, 1000, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
				this.toFront();
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					this.attr({ text: '错误率' + (100 - that._rate) + '%',font: '16px Arial',y:ty }).animate({ opacity: 1 }, speed, '<');
				});
        }).mouseout(function(){
				this.stop().animate({ 'stroke-width': 20, opacity: 1 }, speed*4, 'elastic');
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					title.attr({ text: defaultText,font: '36px Arial',y:ty }).animate({ opacity: 1 }, speed, '<');
				});	
        });
		
	}
}
$(function(){ o.init(40); });
//Download by http://down.liehuo.net