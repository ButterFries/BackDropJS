// Page
document.getElementById("example1jsBtn").addEventListener("click", function(e) {

	document.getElementById("example1jsBtn").classList.add('selected');
	document.getElementById("example1htmlBtn").classList.remove('selected');

	document.getElementById("example1js").classList.remove('hidden');
	document.getElementById("example1js").classList.add('visible');

	document.getElementById("example1html").classList.remove('visible');
	document.getElementById("example1html").classList.add('hidden');

});


document.getElementById("example1htmlBtn").addEventListener("click", function(e) {
	
	document.getElementById("example1htmlBtn").classList.add('selected');
	document.getElementById("example1jsBtn").classList.remove('selected');

	document.getElementById("example1html").classList.remove('hidden');
	document.getElementById("example1html").classList.add('visible');

	document.getElementById("example1js").classList.remove('visible');
	document.getElementById("example1js").classList.add('hidden');

});