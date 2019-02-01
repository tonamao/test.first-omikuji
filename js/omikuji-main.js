(function() {
	'use strict';
	var btn = document.getElementById('btn');
	var result = document.getElementById('result');
	var rslt = document.getElementById('rslt');

	btn.addEventListener('click', function() {
      var imglist = [
    	  "img/omikuji_kamikichi.png",
    	  "img/omikuji_daikichi.png",
    	  "img/omikuji_chukichi.png",
    	  "img/omikuji_syoukichi.png",
    	  "img/omikuji_kichi.png",
    	  "img/omikuji_kyou.png"];
      var randomNum = Math.floor(Math.random() * 100);
      var index;
      if(0 <= randomNum && randomNum < 2){
    	  index = 0;
      }else if(2 <= randomNum && randomNum < 22){
    	  index = 1;
      }else if(22 <= randomNum && randomNum < 47){
    	  index = 2;
      }else if(47 <= randomNum && randomNum < 72){
    	  index = 3;
      }else if(72 <= randomNum && randomNum < 92){
    	  index = 4;
      }else if(92 <= randomNum && randomNum < 100){
    	  index = 5;
      }
      var element = '<img src="' + imglist[index] + '" alt = "" />'
      rslt.innerHTML = element;
	});

	btn.addEventListener('mousedown', function() {
		this.className = 'pushed';
	});

	btn.addEventListener('mouseup', function() {
		this.className = '';
	});
})();
