define([
	"dcl/dcl",
	"dojo/hccss",
	"dojo/dom-construct",
	"delite/register",
	"delite/Widget",
	"dapp/ViewBase",
	"dojo/Deferred",
	"delite/handlebars",
	"delite/handlebars!./viewTemplate3.html",
	"delite/theme!deliteful/Button/themes/{{theme}}/Button.css"
], function (dcl, has, domConstruct, register, Widget, ViewBase, Deferred, handlebars, template2) {

	var customWidget = dcl([Widget, ViewBase], {
		_wrapper: null,

		baseClass: "d-custom-widget",

		/**
		 * A CSS class that defines where the messages of the toaster will appear.
		 *
		 * The toaster comes with 7 classes which can be used out-of-the-box.
		 *  - `d-toaster-placement-default` for the default position
		 *  - `d-toaster-placement-tl` for top-left
		 *  - `d-toaster-placement-tc` for top-center
		 *  - `d-toaster-placement-tr` for top-right
		 *  - `d-toaster-placement-bl` for bottom-left
		 *  - `d-toaster-placement-bc` for bottom-center
		 *  - `d-toaster-placement-br` for bottom-right
		 *
		 * This property can be set to any string as long as it references
		 * a the name of a CSS class properly defined.
		 *
		 * @member {string}
		 * @default `d-toaster-placement-default`
		 */
		placementClass: "d-custom-widget-placement-default",

		/**
		 * A list containing all ToasterMessage instances posted.
		 * @member {module:deliteful/ToasterMessage[]}
		 * @default null
		 */
		messages: null,

		/**
		 * If true, the messages are displayed bottom to top.
		 * @member {boolean}
		 * @default false
		 */
		invertOrder: false,

		/**
		 * A CSS class which is added to each message inserted in the DOM without being visible yet.
		 *
		 * It is toggled to `animationEnterClass`.
		 * This class is useful when you want to set an initial state for `animationEnterClass`.
		 *
		 * @member {string}
		 * @default "d-toaster-initial"
		 */
		animationInitialClass: "d-toaster-initial",

		/**
		 * A CSS class which is inserted to make the message visible in DOM (ex: a fade-in CSS transition).
		 * It is removed as soon as the animation has completed.
		 *
		 * If no `transitionend` or `animationend` event is heard, this class is never removed.
		 *
		 * @member {string}
		 * @default "d-toaster-fadein"
		 */
		animationEnterClass: "d-toaster-fadein",

		/**
		 * A CSS class which is inserted to make the message invisible in DOM (ex: a fade-out CSS transition).
		 * It is toggled to `animationQuitClass` when the animation has completed.
		 *
		 * If no `transitionend` or `animationend` event is heard, this class is never removed.
		 *
		 * @member {string}
		 * @default "d-toaster-fadeout"
		 */
		animationQuitClass: "d-toaster-fadeout",

		/**
		 * A CSS class which is inserted after `animationQuitClass` has completed.
		 *
		 * If no `transitionend` or `animationend` event is heard, this class is never inserted.
		 *
		 * @member {string}
		 * @default "d-toaster-fadefinish"
		 */
		animationEndClass: "d-toaster-fadefinish",

		_emitExpiration: function (m) {
			this.emit("messageExpired", {message: m}); // TODO: shouldn't a event be named lowercase?
		},
		_emitInsertion: function (m) {
			this.emit("messageInserted", {message: m});
		},
		_emitRemoval: function (m) {
			this.emit("messageRemoved", {message: m});
		},
		_getRemovableMsg: function () {
			return this.messages.filter(isRemovable);
		},
		_allExpAreRemovable: function () {
			for (var i = 0, l = this.messages.length; i < l; i++) {
				var m = this.messages[i];
				if (m.isExpirable()) {
					if (!isRemovable(m)) { return false; }
				}
			}
			return true;
		},

		template: template2, // templated passed in, not from config

		_loadTemplate: function () {
			// summary:
			//		load view HTML template and dependencies.
			// tags:
			//		private
			//
			if (this.templateString) {
				return true;
			} else {
				var tpl = this.template;
				var deps = this.dependencies ? this.dependencies : [];
				if (tpl) {
					deps = deps.concat(["requirejs-text/text!" + tpl]);
				}
				var loadViewDeferred = new Deferred();
				require(deps, function () {
					this.templateString = this.template ? arguments[arguments.length - 1] : "<div></div>";
					loadViewDeferred.resolve(this);
				}.bind(this));
				return loadViewDeferred;
			}
		},

		refreshRendering: function (props) {
			console.log("in customWidget refreshRendering");
	/*
			var p = this.parentView;
			if (p && p.views) {
				dcl.mix(this, p.views[this.viewName]);
			}
			if (this.templateString) {
				template = handlebars.compile(this.templateString);
			} else {
				this._loadTemplate();
				if (this.templateString) {
					template = handlebars.compile(this.templateString);
				}
			}
	*/
		/*	if ("messages" in props) {
				this.messages.forEach(function (m) {
					if (!m._isInserted) {
						m._insertInDom(this, true);
						m._showInDom(this, true);
						this._emitInsertion(m);
					} else if (m.isExpirable() && m._hasExpired && (!m._toBeRemoved)) {
						m._hideInDom(this, true);
						this._emitExpiration(m);
					}
				}, this);
				if (this._allExpAreRemovable()) {
					this._getRemovableMsg().forEach(function (m) {
						m._removeFromDom(this, true);
						m.destroy();
						this.messages.splice(this.messages.indexOf(m), 1);
						this._emitRemoval(m);
					}, this);
				}
			}
		*/
		},

		preCreate: function (props) {
			this.messages = [];
		},
		postCreate: function (props) {
			// NOTE: the following a11y attributes are needed for JAWS but
			// break VoiceOver
			if (!has("ios")) {
				this.setAttribute("aria-atomic", "true");
				this.setAttribute("role", "alert");
			}
		},
		/**
		 * Posts a message in the toaster.
		 *
		 * The message can be either a full `ToasterMessage` instance or
		 * a simple string, in which case the proprieties of the message
		 * are specified through props which is passed to the `ToasterMessage` constructor.
		 *
		 * @param {string|module:deliteful/ToasterMessage} message Either the content of the
		 * message as a string or an instance of `deliteful/ToasterMessage`.
		 * @param {Object} [props] A hash used to initialize a message instance (only relevant
		 * when `message` passed is a string).
		 *
		 * @returns {module:deliteful/ToasterMessage} The message instance passed as a parameter
		 * or created from the string.
		 */
		postMessage: function (message, props) {
			var m;
			if (typeof(message) === "string") {
				var args = {message: message};
				dcl.mix(args, props);
				m = new ToasterMessage(args);
			} else {
				m = message;
			}
			return this._addMessage(m);
		},
		_addMessage: function (m) {
			this.messages.push(m);
			this.notifyCurrentValue("messages");
			return m;
		}
	});
	return register("d-custom-widget", [HTMLElement, customWidget]//, {
			/*
						template: handlebars.compile(
						"<template>" +
							"TEST TEST TEST" +
						"</template>"
					)
				}
			*/);
});
