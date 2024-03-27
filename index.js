$("document").ready(function(){



});


const settings = {
	async: true,
	crossDomain: true,
	url: 'https://spotify23.p.rapidapi.com/albums/?ids=7LjBbLFOHLzCsOlxYpFqU2',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c8547aefdmsh8a4f71c240e76b1p1db2d6jsna868981ca106',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
    var Name=response.albums[0].artists[0].name


	$("#name").text(Name)

	console.log(response);
});

