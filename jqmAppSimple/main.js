requirejs.config({
	paths: {
		"dapp": "../../dapp",
		"dcl": "../../dcl",
		"dojo": "../../dojo",
		"dpointer": "../../dpointer",
		"decor": "../../decor",
		"delite": "../../delite",
		"deliteful": "../../deliteful",
		"requirejs": "../../requirejs",
		"requirejs-text": "../../requirejs-text",
		"requirejs-dplugins": "../../requirejs-dplugins",
		"requirejs-domready": "../../requirejs-domready",
	//	"jquery": "https://code.jquery.com/jquery-2.1.1.min",
	//	"jquery.mobile": 'https://code.jquery.com/mobile/1.4.3/jquery.mobile-1.4.3.min',
	//	"jquery.mobile.css": "http://code.jquery.com/mobile/1.4.3/"
		"jquery": "../../jquery/jquery",
		"jquery.mobile": "https://code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min",
		//"jquery.mobile": "../../jquery-mobile/js/jquery.mobile-1.4.2",
		//"jquery.mobile.css": "http://code.jquery.com/mobile/1.4.3/"
		"jquery.mobile.css": "http://code.jquery.com/mobile/1.4.4/"
	},
	shim: {
	//	"jqm": ["jquery"]
	//	'jqm': { deps: ['jquery'], exports: 'mobile' }
	//	'jqm': { deps: ['jquery'] },
		'jquery.mobile': { deps: ['jquery'] }
	},
	waitSeconds: 45
});
