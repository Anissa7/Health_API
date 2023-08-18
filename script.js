const settings = {
	async: true,
	crossDomain: true,
	url: 'https://drug-info-and-price-history.p.rapidapi.com/1/genericname?drug=advil',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '696cc32825mshf220551f0404d51p1201eajsn651d61b40bf0',
		'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});