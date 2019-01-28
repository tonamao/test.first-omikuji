(function() {
	'use strict';
	var btn = document.getElementById('btn');
	var result = document.getElementById('result');

	btn.addEventListener('click', function() {
      var results = ['大吉', '中吉', '小吉', '凶'];
      var randomNum = Math.floor(Math.random() * results.length)
      result.textContent = results[randomNum];
	});

	btn.addEventListener('mousedown', function() {
		this.className = 'pushed';
	});

	btn.addEventListener('mouseup', function() {
		this.className = '';
	});
})();