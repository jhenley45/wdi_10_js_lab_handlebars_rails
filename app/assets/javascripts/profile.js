var Profile = Profile || {};

$(function(){
	Profile.getData();
	$('body').append(
		HandlebarsTemplates['profile']({
			greeting: 'Hello',
			people: [
				{ firstName: 'Jack', lastName: 'Henley'},
				{ firstName: 'Alex', lastName: 'Grant'},
				{ firstName: 'David', lastName: 'Fisher'}
			]
		})
	);

});

Profile.getData = function(){
	$.ajax({
		url: Routes.profile_path({format: 'json'}),
		type: 'GET',
		dataType: 'json'
	})

	.done(function(data) {
		console.log("success");
		response = data;
	})

	.fail(function() {
		console.log("error");
	})

};
