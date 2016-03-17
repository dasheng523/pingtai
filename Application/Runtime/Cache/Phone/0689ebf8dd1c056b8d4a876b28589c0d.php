<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="chrome=IE8">
    <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
    <title>Canvas Filter Demo</title>
    <link href="http://192.168.23.105/pingtai/Public/css/default.css" rel="stylesheet" />
    <script src="http://192.168.23.105/pingtai/Public/js/gloomyfishfilter.js"></script>
</head>
<body>
<h1>HTML Canvas Image Process - By Gloomy Fish</h1>
<div id="svgContainer">
    <div id="sourceDiv">
        <img id="source" src="http://192.168.23.105/pingtai/Public/images/share2.jpg" />
    </div>
    <div id="targetDiv">
        <canvas id="target"></canvas>
    </div>
</div>
<div id="btn-group">
    <button type="button" id="invert-button">反色</button>
    <button type="button" id="adjust-button">灰色调</button>
    <button type="button" id="blur-button">模糊</button>
    <button type="button" id="relief-button">浮雕</button>
    <button type="button" id="diaoke-button">雕刻</button>
    <button type="button" id="mirror-button">镜像</button>
</div>

<script>
    var tempContext = null; // global variable 2d context
    window.onload = function() {
        var source = document.getElementById("source");
        var canvas = document.getElementById("target");
        canvas.width = source.clientWidth;
        canvas.height = source.clientHeight;

        if (!canvas.getContext) {
            console.log("Canvas not supported. Please install a HTML5 compatible browser.");
            return;
        }

        // get 2D context of canvas and draw image
        tempContext = canvas.getContext("2d");
        tempContext.drawImage(source, 0, 0, canvas.width, canvas.height);

        // initialization actions
        var inButton = document.getElementById("invert-button");
        var adButton = document.getElementById("adjust-button");
        var blurButton = document.getElementById("blur-button");
        var reButton = document.getElementById("relief-button");
        var dkButton = document.getElementById("diaoke-button");
        var mirrorButton = document.getElementById("mirror-button");

        // bind mouse click event
        bindButtonEvent(inButton, "click", invertColor);
        bindButtonEvent(adButton, "click", adjustColor);
        bindButtonEvent(blurButton, "click", blurImage);
        bindButtonEvent(reButton, "click", fudiaoImage);
        bindButtonEvent(dkButton, "click", kediaoImage);
        bindButtonEvent(mirrorButton, "click", mirrorImage);
    }

    function bindButtonEvent(element, type, handler)
    {
        if(element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else {
            element.attachEvent('on'+type, handler); // for IE6,7,8
        }
    }

    function invertColor() {
        var canvas = document.getElementById("target");
        var len = canvas.width * canvas.height * 4;
        var canvasData = tempContext.getImageData(0, 0, canvas.width, canvas.height);
        var binaryData = canvasData.data;

        // Processing all the pixels
        gfilter.colorInvertProcess(binaryData, len);

        // Copying back canvas data to canvas
        tempContext.putImageData(canvasData, 0, 0);
    }

    function adjustColor() {
        var canvas = document.getElementById("target");
        var len = canvas.width * canvas.height * 4;
        var canvasData = tempContext.getImageData(0, 0, canvas.width, canvas.height);
        var binaryData = canvasData.data;

        // Processing all the pixels
        gfilter.colorAdjustProcess(binaryData, len);

        // Copying back canvas data to canvas
        tempContext.putImageData(canvasData, 0, 0);
    }

    function blurImage()
    {
        var canvas = document.getElementById("target");
        var len = canvas.width * canvas.height * 4;
        var canvasData = tempContext.getImageData(0, 0, canvas.width, canvas.height);

        // Processing all the pixels
        gfilter.blurProcess(tempContext, canvasData);

        // Copying back canvas data to canvas
        tempContext.putImageData(canvasData, 0, 0);
    }

    function fudiaoImage()
    {
        var canvas = document.getElementById("target");
        var len = canvas.width * canvas.height * 4;
        var canvasData = tempContext.getImageData(0, 0, canvas.width, canvas.height);

        // Processing all the pixels
        gfilter.reliefProcess(tempContext, canvasData);

        // Copying back canvas data to canvas
        tempContext.putImageData(canvasData, 0, 0);
    }

    function kediaoImage()
    {
        var canvas = document.getElementById("target");
        var len = canvas.width * canvas.height * 4;
        var canvasData = tempContext.getImageData(0, 0, canvas.width, canvas.height);

        // Processing all the pixels
        gfilter.diaokeProcess(tempContext, canvasData);

        // Copying back canvas data to canvas
        tempContext.putImageData(canvasData, 0, 0);
    }

    function mirrorImage()
    {
        var canvas = document.getElementById("target");
        var len = canvas.width * canvas.height * 4;
        var canvasData = tempContext.getImageData(0, 0, canvas.width, canvas.height);

        // Processing all the pixels
        gfilter.mirrorProcess(tempContext, canvasData);

        // Copying back canvas data to canvas
        tempContext.putImageData(canvasData, 0, 0);
    }
</script>
</body>
</html>