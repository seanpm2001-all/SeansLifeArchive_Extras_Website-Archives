(function(){var isLikeFirefox=function(ua){return/iceweasel|icecat|seamonkey|camino|like\ firefox/i.test(ua)};var isFirefox=function(){var userAgent=navigator.userAgent.toLowerCase();return/\s(firefox|fxios)/.test(userAgent)&&!isLikeFirefox(userAgent)};if(!isFirefox()){var fxDownloadButtons=document.getElementsByClassName("firefox-download-button");for(var i=0;i<fxDownloadButtons.length;i++){fxDownloadButtons[i].classList.remove("hidden")}}})();
