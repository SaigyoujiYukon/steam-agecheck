// ==UserScript==
// @name           steam�ض���
// @version        0.1
// @author         SaigyoujiYukon
// @description    мsteam����������֤

// @include        https://store.steampowered.com/agecheck/app/*

// @namespace SaigyoujiYukon
// ==/UserScript==

var kk = location.pathname;
var kl = kk.replace("/agecheck/app/","/app/");
document.location.pathname = kl;