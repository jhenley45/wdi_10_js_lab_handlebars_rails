var Profile = Profile || {};

$(function(){
	Profile.getData();
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

		Profile.renderData(response);
	})

	.fail(function() {
		console.log("error");
	})

};

Profile.renderData = function(response) {
	$('body').append(
		HandlebarsTemplates['profile']({
			data: response
		})
	);
}

Handlebars.registerHelper('fullName', function() {
  return this.firstName + ' ' + this.lastName;
});

Handlebars.registerHelper('fullDate', function() {
	var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	return months[this.startDate.month]
})
