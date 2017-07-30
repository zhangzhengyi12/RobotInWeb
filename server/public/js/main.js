/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _colors = __webpack_require__(2);

	var _colors2 = _interopRequireDefault(_colors);

	var _chat = __webpack_require__(3);

	var _chat2 = _interopRequireDefault(_chat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var chatS = new _chat2.default({
	    input: $("#inputText"),
	    tips: $("#inputTips"),
	    messBox: $(".messBox"),
	    messNode: "<div class=\"messone\"><div>",
	    amessHeight: 30
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by zhang on 2017-07-30.
	 */

	function getRamdomColor() {
	    var result = '#';
	    for (var i = 0; i < 6; i++) {

	        result += Math.floor(Math.random() * 16).toString(16); //获取0-15并通过toString转16进制
	    }

	    return result;
	}

	exports.default = {
	    getRamdomColor: getRamdomColor
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by zhang on 2017-07-30.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _colors = __webpack_require__(2);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var API_KEY = "919c296a12994612a4ddac7b47dba958";

	var RESPONSE_TYPE = {
	    TEXT: 100000,
	    LINK: 200000,
	    NEWS: 302000

	    //

	};
	var chat = function () {
	    function chat() {
	        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, chat);

	        this.input = config.input;
	        this.tips = config.tips;
	        this.messBox = config.messBox;
	        this.messNode = config.messNode;
	        this.amessHeight = config.amessHeight;

	        //用来通讯

	        this.query = '';
	        this.data = '';

	        this.welcome();
	        this.setName();

	        this.bindEvent();
	    }

	    _createClass(chat, [{
	        key: "bindEvent",
	        value: function bindEvent() {
	            var _this = this;

	            this.input.focus(function (e) {
	                window.document.onkeypress = function (e) {
	                    // 获取事件
	                    e = e || window.event;
	                    // 获取按键编码
	                    var key = e.whick || e.keyCode;
	                    // 检测是否为回车键
	                    if (key == 13) {
	                        _this.render();
	                    }
	                };
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            //"hook用来拦截data 第一次设置name 不会发送data"
	            if (this.onceset()) {
	                this.addQuery();
	                this.addToBox(this.creatDOM("", this.name + " \u8BF7\u5429\u5490\uFF01"));
	                console.log("return?");
	                return;
	            }

	            this.addQuery();
	            this.getData();
	        }
	    }, {
	        key: "welcome",
	        value: function welcome() {
	            var _this2 = this;

	            var welText = "我是菠萝油王子";
	            welText.split("").forEach(function (t) {
	                _this2.addToBox(_this2.creatDOM("", "------" + t + "-----"));
	            });
	        }
	    }, {
	        key: "setName",
	        value: function setName() {
	            this.addToBox(this.creatDOM("", "\u8BF7\u8F93\u5165\u4F60\u7684\u540D\u5B57"));
	        }
	    }, {
	        key: "onceset",
	        value: function onceset() {
	            this.name = this.input.val();
	            this.onceset = function () {
	                return false;
	            };
	            return true;
	        }
	    }, {
	        key: "addQuery",
	        value: function addQuery() {
	            this.query = this.input.val();
	            this.input.val("");
	            this.addToBox(this.creatDOM(this.tips.text(), this.query));
	        }
	    }, {
	        key: "creatDOM",
	        value: function creatDOM(tips, talk) {
	            var dom = $("<span>" + tips + talk + "</span>");
	            dom.css("color", _colors2.default.getRamdomColor());
	            var messwrap = $(this.messNode);
	            messwrap.append(dom);
	            return messwrap;
	        }
	    }, {
	        key: "addToBox",
	        value: function addToBox(dom) {
	            this.setBoxStyle(dom);
	            this.messBox.append(dom);
	        }
	    }, {
	        key: "setBoxStyle",
	        value: function setBoxStyle(dom) {
	            var _this3 = this;

	            this.messBox.children().each(function (index, kid) {
	                kid = $(kid);
	                var tmp = kid.css("bottom");
	                var lastH = parseInt(tmp.substring(0, tmp.length - 2));
	                //即时删除盒子
	                if (lastH + _this3.amessHeight > $(document).height() - "50") {
	                    kid.remove();
	                }

	                kid.css("bottom", lastH + _this3.amessHeight + "px");
	            });

	            dom.css("bottom", 50 + "px");
	        }
	    }, {
	        key: "getData",
	        value: function getData() {
	            var _this4 = this;

	            var self = this;

	            var datas = {
	                "key": API_KEY,
	                "info": this.query,
	                "loc": "嘉兴市",
	                "userid": this.name
	            };

	            $.ajax({
	                type: 'POST',
	                url: "http://www.tuling123.com/openapi/api",
	                data: datas,
	                success: function success(data) {
	                    _this4.addToBox(_this4.creatDOM("", self.getDataStr(data)));
	                },
	                dataType: 'json'
	            });
	        }
	    }, {
	        key: "getDataStr",
	        value: function getDataStr(data) {
	            switch (data.code) {
	                case RESPONSE_TYPE.TEXT:
	                    return data.text;
	                case RESPONSE_TYPE.LINK:
	                    return data.text + " : " + data.url;
	                case RESPONSE_TYPE.NEWS:
	                    var listInfo = '';
	                    (data.list || []).forEach(function (it) {
	                        listInfo += "\n\u6587\u7AE0: " + it.article + "\n\u6765\u6E90: " + it.source + "\n\u94FE\u63A5: " + it.detailurl;
	                    });
	                    return data.text + "\n" + listInfo;
	                default:
	                    return data.text;
	            }
	        }
	    }]);

	    return chat;
	}();

	exports.default = chat;

/***/ })
/******/ ]);