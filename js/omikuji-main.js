(function() {
	'use strict';
	var btn = document.getElementById('btn');
	var rslt = document.getElementById('result');

	btn.addEventListener('click', function() {
      var imglist = [
    	  "kamikichi",
    	  "daikichi",
    	  "chukichi",
    	  "syoukichi",
    	  "kichi",
    	  "kyou"];
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
      for(var i = 0; i < imglist.length; i++){
    	  if(i == index) {
        	  document.getElementById(imglist[index]).style.display = '';
    	  }else{
        	  document.getElementById(imglist[i]).style.display = 'none';
    	  }
      }

	});

	btn.addEventListener('mousedown', function() {
		this.className = 'pushed';
	});

	btn.addEventListener('mouseup', function() {
		this.className = '';
	});
})();
