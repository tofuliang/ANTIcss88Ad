// ==UserScript==
// @name         css88辅助工具
// @namespace    https://blog.tofuliang.tk/
// @version      0.1
// @description  css88上的辅助性工具，用于去除广告等
// @author       tofuliang
// @match        http://www.css88.com/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    var uw = this;
    var ib = uw.Node.prototype.appendChild;
    uw.Node.prototype.appendChild = function(t, p) {
        if (t.tagName === 'DIV' && this.tagName === 'BODY' && t.querySelector('.cry-face-dia')) {
            uw.Node.prototype.insertBefore = ib;
            return;
        }
        ib.apply(this, Array.prototype.slice.call(arguments));
    };
}).apply(unsafeWindow);