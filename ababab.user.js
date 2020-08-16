// ==UserScript==
// @name           steam重定向
// @version        0.1
// @author         SaigyoujiYukon
// @description    Ð¼steam±ðÏëÄêÁäÑéÖ¤

// @include        https://store.steampowered.com/agecheck/app/*

// @namespace SaigyoujiYukon
// ==/UserScript==

var kk = location.pathname;
var kl = kk.replace("/agecheck/app/","/app/");
document.location.pathname = kl;
