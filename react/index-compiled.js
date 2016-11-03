"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("react-dom");
require("../css/style.css");
var imageDatas = require("../imageData.json");

function getIamgeURL(imageDatasArr) {
    var len = imageDatasArr.length;

    for (var i = 0; i < len; i++) {

        var singleImageData = imageDatasArr[i]; // 数组里面的每一个对象
        singleImageData.imgUrl = require("../image/" + singleImageData.filename);
        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
}
imageDatas = getIamgeURL(imageDatas);

var ReactApp = _react2.default.createClass({
    displayName: "ReactApp",

    render: function render() {
        return _react2.default.createElement(
            "div",
            { className: "stage" },
            _react2.default.createElement("section", { className: "img-sec" }),
            _react2.default.createElement("nav", { className: "con-nav" })
        );
    }
});

_reactDom2.default.render(_react2.default.createElement(ReactApp, null), document.getElementById("content"));

//# sourceMappingURL=index-compiled.js.map