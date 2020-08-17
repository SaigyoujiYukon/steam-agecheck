// ==UserScript==
// @name           steam重定向
// @version        0.2
// @author         SaigyoujiYukon
// @description    屑steam别想区域不可用

// @include        https://store.steampowered.com/agecheck/app/*

// @namespace SaigyoujiYukon
// ==/UserScript==

document.location.pathname = location.pathname.replace("/agecheck/app/","/app/");