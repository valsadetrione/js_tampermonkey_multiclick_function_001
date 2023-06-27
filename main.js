
// ==UserScript==
// @name         Multiclick
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match         *
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
   'use strict';

	const contrBtn = document.createElement("button");
	contrBtn.style.cssText=`position:absolute; top:10px; left:10px; z-index:99999;`;
	contrBtn.innerHTML = "GET FULL CONTROLL";
	contrBtn.addEventListener("click", multiClick);
	document.body.append(contrBtn);

	function multiClick(e){
		var screenWidth = window.screen.width;
		exeRowClicks(screenWidth, 180);		
		exeRowClicks(screenWidth, 300);
		exeRowClicks(screenWidth, 400);
		exeRowClicks(screenWidth, 500);		
				// console.log("CLICK", xPosition, yPosition, screenWidth);
		}
	function exeRowClicks(width, y){
		for(let i=10; i < width; i += 60) {
			let elem = document.elementFromPoint(i, y);
			elem.click();
		}
    }
})();
