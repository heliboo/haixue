/**
 * 定义正确率百分比组件
 */
var scoreDiagram = {
	_rate : 0,
	_eltId:null,
	_config:{
		width:152,//画布宽度
		height:152,//画布高度
		color:'#eee',//圆背景
		offsetX:0,//bigFont 文字的x轴偏移量，用于修复大文字的位置
		offsetY:0,//bigFont 文字的y轴偏移量，用于修复大文字的位置
		circleRadius:56,//圆的半径
		radius:66,//圆环的半径
		bigFont:'36px Arial',//默认情况下的文字字体
		bigFontColor:'#999',//文字颜色
		smallFont:'16px Arial',//鼠标悬浮时，显示的文字字体
		smallFontColor:'#666',//文字颜色
		errorColor:'#FF6666',//错误的圆环颜色
		correctColor:'#5EC45E',//正确的圆环颜色
		strokeWidth:10,//默认圆环宽度
		mouseStrokeWidth:20,//鼠标悬浮时的圆环宽度
		speed:250//动画的执行时间
	},
	/**
	 * 初始化入口方法
	 * @param id
	 * @param rate 正确率，比如是0-100的正整数
	 */
	init: function(id,rate){
		this._eltId = id;
		this._rate = rate;
		this.diagram();
	},
	/**
	 * 开始绘制
	 */
	diagram: function(){
		var that = this;
		//new 一个 Raphael对象
		var r = Raphael(that._eltId, that._config.width, that._config.height),
		defaultText = this._rate + '%';
		var tx = that._config.width / 2;
		var ty = that._config.height / 2;
		//绘制circle
		r.circle(tx, ty, that._config.circleRadius).attr({ stroke: 'none', fill: that._config.color });
		//绘制font，并将font变量存储
		var title = r.text((tx + that._config.offsetX), (ty + that._config.offsetY), defaultText).attr({
			font: that._config.bigFont,
			fill: that._config.bigFontColor
		}).toFront();
		
		var rr = 0;
		//添加一个arc方法，用户计算路径
		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6 * value,
				alpha = v == 360 ? 359.99 : v,
				random = rr,
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = tx + rad * Math.cos(b),
				sy = ty - rad * Math.sin(b),
				x = tx + rad * Math.cos(a),
				y = ty - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
				rr = 360 * (1 - that._rate / 100 );
			return { path: path, stroke: color };
		};
		var z = null;
		//处理圆环
		if(this._rate > 0){
			//正确的圆环
			z = r.path().attr({ arc: [this._rate, that._config.correctColor, that._config.radius], 'stroke-width': that._config.strokeWidth });
			z.mouseover(function(){
	                this.animate({ 'stroke-width': that._config.mouseStrokeWidth, opacity: .75 }, 1000, 'elastic');
	                if(Raphael.type != 'VML') //solves IE problem
					this.toFront();
					title.stop().animate({ opacity: 0 }, that._config.speed, '>', function(){
						this.attr({ text: '正确率' + that._rate + '%',font: that._config.smallFont,y:ty ,fill:that._config.smallFontColor}).animate({ opacity: 1 }, that._config.speed, '<');
					});
	        }).mouseout(function(){
					this.stop().animate({ 'stroke-width': that._config.strokeWidth, opacity: 1 }, that._config.speed * 4, 'elastic');
					title.stop().animate({ opacity: 0 }, that._config.speed, '>', function(){
						title.attr({ text: defaultText,font: that._config.bigFont ,y:ty,fill:that._config.bigFontColor}).animate({ opacity: 1 }, that._config.speed, '<');
					});	
	        });
		}
		if(this._rate < 100){
		//错误的
		z = r.path().attr({ arc: [(100 - this._rate), that._config.errorColor, that._config.radius], 'stroke-width': that._config.strokeWidth });
		z.mouseover(function(){
                this.animate({ 'stroke-width': that._config.mouseStrokeWidth, opacity: .75 }, 1000, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
				this.toFront();
				title.stop().animate({ opacity: 0 }, that._config.speed, '>', function(){
					this.attr({ text: '错误率' + (100 - that._rate) + '%',font: that._config.smallFont, y:ty,fill:that._config.smallFontColor }).animate({ opacity: 1 }, that._config.speed, '<');
				});
        }).mouseout(function(){
				this.stop().animate({ 'stroke-width': that._config.strokeWidth, opacity: 1 }, that._config.speed * 4, 'elastic');
				title.stop().animate({ opacity: 0 }, that._config.speed, '>', function(){
					title.attr({ text: defaultText,font: that._config.bigFont,y:ty,fill:that._config.bigFontColor }).animate({ opacity: 1 }, that._config.speed, '<');
				});	
        });
		}
	}
};
$(function(){ scoreDiagram.init('diagram',66); });
//Download by http://down.liehuo.net