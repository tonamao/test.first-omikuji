(function() {
	'use strict';
	var btn = document.getElementById('btn');
	var result = document.getElementById('result');
	var rslt = document.getElementById('rslt');

	btn.addEventListener('click', function() {
      var imglist = [
    	  "img/omikuji_daikichi.png",
    	  "img/omikuji_kichi.png",
    	  "img/omikuji_kyou.png"];
      var randomNum = Math.floor(Math.random() * imglist.length);
      var element = '<img src="' + imglist[randomNum] + '" alt = "" />'
      rslt.innerHTML = element;
	});

	btn.addEventListener('mousedown', function() {
		this.className = 'pushed';
	});

	btn.addEventListener('mouseup', function() {
		this.className = '';
	});
})();