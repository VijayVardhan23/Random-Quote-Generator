$("#button").on("click", function(e){
		e.preventDefault();
		$.getJSON("https://talaikis.com/api/quotes/random/", function(json) {
  			$("#quote").html(json.quote + " - " + json.author);
  			$("#twitter").attr("href", 'https://twitter.com/intent/tweet?text=' + json.quote + ' - ' + json.author);
  		});
});


