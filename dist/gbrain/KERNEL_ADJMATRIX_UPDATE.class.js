(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var KERNEL_ADJMATRIX_UPDATE = exports.KERNEL_ADJMATRIX_UPDATE = function () {
    function KERNEL_ADJMATRIX_UPDATE() {
        _classCallCheck(this, KERNEL_ADJMATRIX_UPDATE);
    }

    _createClass(KERNEL_ADJMATRIX_UPDATE, null, [{
        key: "getSrc",
        value: function getSrc(geometryLength) {
            return ["x", ["adjacencyMatrix"],
            // head
            "",

            // source
            "vec4 adjMat = adjacencyMatrix[x]; \n            vec4 adjMatB = adjacencyMatrixB[x];\n\n            float linkLayerNum = adjMat.x;\n            float linkWeight = adjMat.z;\n            float linkTypeParent = adjMat.w;\n            \n            if(linkTypeParent == 0.5 && linkLayerNum > 0.0) {\n                float id = adjMatB.z;\n                float idInv = adjMatB.w;\n            \n                vec2 xGeometryCurrentChild = get_global_id(id, bufferNodesWidth, " + geometryLength.toFixed(1) + ");\n                vec2 xGeometryParent = get_global_id(idInv, bufferNodesWidth, " + geometryLength.toFixed(1) + ");\n\n                float childGOutputA = dataB[xGeometryCurrentChild].z;\n                float parentGErrorA = dataB[xGeometryParent].w;\n                \n                float childGOutputB = dataF[xGeometryCurrentChild].x;\n                float parentGErrorB = dataF[xGeometryParent].y;\n                \n                float childGOutputC = dataF[xGeometryCurrentChild].z;\n                float parentGErrorC = dataF[xGeometryParent].w;\n                \n                float childGOutputD = dataG[xGeometryCurrentChild].x;\n                float parentGErrorD = dataG[xGeometryParent].y;\n                \n                float childGOutputE = dataG[xGeometryCurrentChild].z;\n                float parentGErrorE = dataG[xGeometryParent].w;\n                \n                float childGOutputF = dataH[xGeometryCurrentChild].x;\n                float parentGErrorF = dataH[xGeometryParent].y;\n                \n                float childGOutputG = dataH[xGeometryCurrentChild].z;\n                float parentGErrorG = dataH[xGeometryParent].w;\n            \n                float lr = learningRate;\n                float l2_decay = 0.01;\n                float gpu_batch_size = 7.0;\n                float br = gpu_batch_repeats;\n                linkWeight += -lr*(((l2_decay*linkWeight)+(childGOutputA*parentGErrorA))/(gpu_batch_size*br));\n                if(childGOutputB != 0.0) {linkWeight += -lr*(((l2_decay*linkWeight)+(childGOutputB*parentGErrorB))/(gpu_batch_size*br));}\n                if(childGOutputC != 0.0) {linkWeight += -lr*(((l2_decay*linkWeight)+(childGOutputC*parentGErrorC))/(gpu_batch_size*br));}\n                if(childGOutputD != 0.0) {linkWeight += -lr*(((l2_decay*linkWeight)+(childGOutputD*parentGErrorD))/(gpu_batch_size*br));}\n                if(childGOutputE != 0.0) {linkWeight += -lr*(((l2_decay*linkWeight)+(childGOutputE*parentGErrorE))/(gpu_batch_size*br));}\n                if(childGOutputF != 0.0) {linkWeight += -lr*(((l2_decay*linkWeight)+(childGOutputF*parentGErrorF))/(gpu_batch_size*br));}\n                if(childGOutputG != 0.0) {linkWeight += -lr*(((l2_decay*linkWeight)+(childGOutputG*parentGErrorG))/(gpu_batch_size*br));}\n            }\n            \n            return [vec4(linkLayerNum, 0.0, linkWeight, linkTypeParent)];\n            "];
        }
    }]);

    return KERNEL_ADJMATRIX_UPDATE;
}();

global.KERNEL_ADJMATRIX_UPDATE = KERNEL_ADJMATRIX_UPDATE;
module.exports.KERNEL_ADJMATRIX_UPDATE = KERNEL_ADJMATRIX_UPDATE;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ2JyYWluL0tFUk5FTF9BREpNQVRSSVhfVVBEQVRFLmNsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07ZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO2Rlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfVxuICAgIH1yZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO2lmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO3JldHVybiBDb25zdHJ1Y3RvcjtcbiAgICB9O1xufSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG59XG5cbnZhciBLRVJORUxfQURKTUFUUklYX1VQREFURSA9IGV4cG9ydHMuS0VSTkVMX0FESk1BVFJJWF9VUERBVEUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gS0VSTkVMX0FESk1BVFJJWF9VUERBVEUoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBLRVJORUxfQURKTUFUUklYX1VQREFURSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEtFUk5FTF9BREpNQVRSSVhfVVBEQVRFLCBudWxsLCBbe1xuICAgICAgICBrZXk6IFwiZ2V0U3JjXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTcmMoZ2VvbWV0cnlMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBbXCJ4XCIsIFtcImFkamFjZW5jeU1hdHJpeFwiXSxcbiAgICAgICAgICAgIC8vIGhlYWRcbiAgICAgICAgICAgIFwiXCIsXG5cbiAgICAgICAgICAgIC8vIHNvdXJjZVxuICAgICAgICAgICAgXCJ2ZWM0IGFkak1hdCA9IGFkamFjZW5jeU1hdHJpeFt4XTsgXFxuICAgICAgICAgICAgdmVjNCBhZGpNYXRCID0gYWRqYWNlbmN5TWF0cml4Qlt4XTtcXG5cXG4gICAgICAgICAgICBmbG9hdCBsaW5rTGF5ZXJOdW0gPSBhZGpNYXQueDtcXG4gICAgICAgICAgICBmbG9hdCBsaW5rV2VpZ2h0ID0gYWRqTWF0Lno7XFxuICAgICAgICAgICAgZmxvYXQgbGlua1R5cGVQYXJlbnQgPSBhZGpNYXQudztcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBpZihsaW5rVHlwZVBhcmVudCA9PSAwLjUgJiYgbGlua0xheWVyTnVtID4gMC4wKSB7XFxuICAgICAgICAgICAgICAgIGZsb2F0IGlkID0gYWRqTWF0Qi56O1xcbiAgICAgICAgICAgICAgICBmbG9hdCBpZEludiA9IGFkak1hdEIudztcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgdmVjMiB4R2VvbWV0cnlDdXJyZW50Q2hpbGQgPSBnZXRfZ2xvYmFsX2lkKGlkLCBidWZmZXJOb2Rlc1dpZHRoLCBcIiArIGdlb21ldHJ5TGVuZ3RoLnRvRml4ZWQoMSkgKyBcIik7XFxuICAgICAgICAgICAgICAgIHZlYzIgeEdlb21ldHJ5UGFyZW50ID0gZ2V0X2dsb2JhbF9pZChpZEludiwgYnVmZmVyTm9kZXNXaWR0aCwgXCIgKyBnZW9tZXRyeUxlbmd0aC50b0ZpeGVkKDEpICsgXCIpO1xcblxcbiAgICAgICAgICAgICAgICBmbG9hdCBjaGlsZEdPdXRwdXRBID0gZGF0YUJbeEdlb21ldHJ5Q3VycmVudENoaWxkXS56O1xcbiAgICAgICAgICAgICAgICBmbG9hdCBwYXJlbnRHRXJyb3JBID0gZGF0YUJbeEdlb21ldHJ5UGFyZW50XS53O1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgZmxvYXQgY2hpbGRHT3V0cHV0QiA9IGRhdGFGW3hHZW9tZXRyeUN1cnJlbnRDaGlsZF0ueDtcXG4gICAgICAgICAgICAgICAgZmxvYXQgcGFyZW50R0Vycm9yQiA9IGRhdGFGW3hHZW9tZXRyeVBhcmVudF0ueTtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGZsb2F0IGNoaWxkR091dHB1dEMgPSBkYXRhRlt4R2VvbWV0cnlDdXJyZW50Q2hpbGRdLno7XFxuICAgICAgICAgICAgICAgIGZsb2F0IHBhcmVudEdFcnJvckMgPSBkYXRhRlt4R2VvbWV0cnlQYXJlbnRdLnc7XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBmbG9hdCBjaGlsZEdPdXRwdXREID0gZGF0YUdbeEdlb21ldHJ5Q3VycmVudENoaWxkXS54O1xcbiAgICAgICAgICAgICAgICBmbG9hdCBwYXJlbnRHRXJyb3JEID0gZGF0YUdbeEdlb21ldHJ5UGFyZW50XS55O1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgZmxvYXQgY2hpbGRHT3V0cHV0RSA9IGRhdGFHW3hHZW9tZXRyeUN1cnJlbnRDaGlsZF0uejtcXG4gICAgICAgICAgICAgICAgZmxvYXQgcGFyZW50R0Vycm9yRSA9IGRhdGFHW3hHZW9tZXRyeVBhcmVudF0udztcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGZsb2F0IGNoaWxkR091dHB1dEYgPSBkYXRhSFt4R2VvbWV0cnlDdXJyZW50Q2hpbGRdLng7XFxuICAgICAgICAgICAgICAgIGZsb2F0IHBhcmVudEdFcnJvckYgPSBkYXRhSFt4R2VvbWV0cnlQYXJlbnRdLnk7XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBmbG9hdCBjaGlsZEdPdXRwdXRHID0gZGF0YUhbeEdlb21ldHJ5Q3VycmVudENoaWxkXS56O1xcbiAgICAgICAgICAgICAgICBmbG9hdCBwYXJlbnRHRXJyb3JHID0gZGF0YUhbeEdlb21ldHJ5UGFyZW50XS53O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBmbG9hdCBsciA9IGxlYXJuaW5nUmF0ZTtcXG4gICAgICAgICAgICAgICAgZmxvYXQgbDJfZGVjYXkgPSAwLjAxO1xcbiAgICAgICAgICAgICAgICBmbG9hdCBncHVfYmF0Y2hfc2l6ZSA9IDcuMDtcXG4gICAgICAgICAgICAgICAgZmxvYXQgYnIgPSBncHVfYmF0Y2hfcmVwZWF0cztcXG4gICAgICAgICAgICAgICAgbGlua1dlaWdodCArPSAtbHIqKCgobDJfZGVjYXkqbGlua1dlaWdodCkrKGNoaWxkR091dHB1dEEqcGFyZW50R0Vycm9yQSkpLyhncHVfYmF0Y2hfc2l6ZSpicikpO1xcbiAgICAgICAgICAgICAgICBpZihjaGlsZEdPdXRwdXRCICE9IDAuMCkge2xpbmtXZWlnaHQgKz0gLWxyKigoKGwyX2RlY2F5KmxpbmtXZWlnaHQpKyhjaGlsZEdPdXRwdXRCKnBhcmVudEdFcnJvckIpKS8oZ3B1X2JhdGNoX3NpemUqYnIpKTt9XFxuICAgICAgICAgICAgICAgIGlmKGNoaWxkR091dHB1dEMgIT0gMC4wKSB7bGlua1dlaWdodCArPSAtbHIqKCgobDJfZGVjYXkqbGlua1dlaWdodCkrKGNoaWxkR091dHB1dEMqcGFyZW50R0Vycm9yQykpLyhncHVfYmF0Y2hfc2l6ZSpicikpO31cXG4gICAgICAgICAgICAgICAgaWYoY2hpbGRHT3V0cHV0RCAhPSAwLjApIHtsaW5rV2VpZ2h0ICs9IC1sciooKChsMl9kZWNheSpsaW5rV2VpZ2h0KSsoY2hpbGRHT3V0cHV0RCpwYXJlbnRHRXJyb3JEKSkvKGdwdV9iYXRjaF9zaXplKmJyKSk7fVxcbiAgICAgICAgICAgICAgICBpZihjaGlsZEdPdXRwdXRFICE9IDAuMCkge2xpbmtXZWlnaHQgKz0gLWxyKigoKGwyX2RlY2F5KmxpbmtXZWlnaHQpKyhjaGlsZEdPdXRwdXRFKnBhcmVudEdFcnJvckUpKS8oZ3B1X2JhdGNoX3NpemUqYnIpKTt9XFxuICAgICAgICAgICAgICAgIGlmKGNoaWxkR091dHB1dEYgIT0gMC4wKSB7bGlua1dlaWdodCArPSAtbHIqKCgobDJfZGVjYXkqbGlua1dlaWdodCkrKGNoaWxkR091dHB1dEYqcGFyZW50R0Vycm9yRikpLyhncHVfYmF0Y2hfc2l6ZSpicikpO31cXG4gICAgICAgICAgICAgICAgaWYoY2hpbGRHT3V0cHV0RyAhPSAwLjApIHtsaW5rV2VpZ2h0ICs9IC1sciooKChsMl9kZWNheSpsaW5rV2VpZ2h0KSsoY2hpbGRHT3V0cHV0RypwYXJlbnRHRXJyb3JHKSkvKGdwdV9iYXRjaF9zaXplKmJyKSk7fVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICByZXR1cm4gW3ZlYzQobGlua0xheWVyTnVtLCAwLjAsIGxpbmtXZWlnaHQsIGxpbmtUeXBlUGFyZW50KV07XFxuICAgICAgICAgICAgXCJdO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEtFUk5FTF9BREpNQVRSSVhfVVBEQVRFO1xufSgpO1xuXG5nbG9iYWwuS0VSTkVMX0FESk1BVFJJWF9VUERBVEUgPSBLRVJORUxfQURKTUFUUklYX1VQREFURTtcbm1vZHVsZS5leHBvcnRzLktFUk5FTF9BREpNQVRSSVhfVVBEQVRFID0gS0VSTkVMX0FESk1BVFJJWF9VUERBVEU7Il19
