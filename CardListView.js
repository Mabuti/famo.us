define(function(require, exports, module) {
	var View			= require('famous/core/View');
    var Modifier        = require('famous/core/Modifier');
    var Transform       = require('famous/core/Transform');
    var Easing          = require('famous/transitions/Easing');

	var CardView = require('./CardView');

	function TicketListView(engine) {
		View.apply(this, arguments);

        for (var i = 0; i < 10; i++) {

            this.contentStateModifier = new Modifier({
                origin: [0, 0]
            });

            var card = new CardView(engine);

            card.pipe(this);

            this.add(this.contentStateModifier).add(card);

            this.contentStateModifier.setTransform(
                Transform.translate(-320, (87*i), 0)
            );

            this.contentStateModifier.setTransform(
                Transform.translate(0, (87*i), 0),
                { duration : (100 * (i + 1)), curve: Easing.outExpo }
            );
        }
	}

	TicketListView.prototype = Object.create(View.prototype);
	TicketListView.prototype.constructor = TicketListView;

	TicketListView.DEFAULT_OPTIONS = {};

	module.exports = TicketListView;
});
