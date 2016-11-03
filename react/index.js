
import React from "react";
import ReactDOM from 'react-dom';
require("react-dom");
require("../css/style.css");
var imageDatas = require("../imageData.json");

function getIamgeURL(imageDatasArr) {
    var len = imageDatasArr.length;

    for (var i=0;i<len;i++){

        var singleImageData = imageDatasArr[i]; // 数组里面的每一个对象
        singleImageData.imgUrl = require("../image/" + singleImageData.filename);
        imageDatasArr[i] = singleImageData;

    }

    return imageDatasArr;
}
imageDatas = getIamgeURL(imageDatas);

var ReactApp = React.createClass({
    render:function () {
        return(
            <div className="stage">
                <section className="img-sec"></section>
                <nav className="con-nav"></nav>
            </div>
        )
    }
});

ReactDOM.render(<ReactApp/>,document.getElementById("content"));


