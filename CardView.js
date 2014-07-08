define(function(require, exports, module) {
	var View  = require('famous/core/View');
	var Surface = require('famous/core/Surface');
    var ImageSurface = require("famous/surfaces/ImageSurface");
    var ContainerSurface = require("famous/surfaces/ContainerSurface");
    var Modifier   = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Easing          = require('famous/transitions/Easing');

	function CardView(engine) {
		View.apply(this, arguments);

		var containerModifier = new Modifier();

	    var container = new ContainerSurface({
	        size: [true, true],
	        classes: ['card']
	    });

		var surface = new Surface({
                content: 'I am a card!',
                size: [undefined, true]
		});

		container.pipe(this);

		container.add(containerModifier).add(surface);

		this.add(container);
	}

	CardView.prototype = Object.create(View.prototype);
	CardView.prototype.constructor = CardView;

	CardView.DEFAULT_OPTIONS = {};

	module.exports = CardView;
});
