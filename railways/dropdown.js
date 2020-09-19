var Zone = "";
var Division = "";
var Category = "";

Handlebars.registerHelper("inc", function (value, options) {
	return parseInt(value) + 1;
});

$(document).ready(function () {
	var wrapper = "";
	var form = new FormData();
	form.append("new", "true");

	var settings = {
		url:
			"https://internship.aicte-india.org/internshipinindianrailways/api_request.php",
		method: "POST",
		timeout: 0,
		processData: false,
		mimeType: "multipart/form-data",
		contentType: false,
		data: form,
	};
	$.ajax(settings).done(function (response) {
		wrapper = { objects: JSON.parse(response) };
		// console.log(wrapper);
		// Retrieve the template data from the HTML (jQuery is used here).
		var template = $("#zoneTemplate").html();
		// Compile the template data into a function
		var templateScript = Handlebars.compile(template);
		// Generate html for all zones in array from compiled template
		var html = templateScript(wrapper);
		// console.log(html);
		// Insert the HTML code into the page
		$("#selectZone").append(html);
		$("#selectZone").on("change", function () {
			// console.log($(this).val());
			Zone = $(this).val();
			Division = "";
			Category = "";
			$("#selectDivision").find("option").remove();
			$("#selectDivision").append('<option value="" disabled selected>Select Division or Workshop</option>');
			$("#selectCategory").find("option").remove();
			$("#selectCategory").append(
				'<option value="" disabled selected>Select Department</option>'
			);
			var form = new FormData();
			form.append("new_zone", true);
			form.append("zone_id", Zone);

			var settings = {
				url:
					"https://internship.aicte-india.org/internshipinindianrailways/api_request.php",
				method: "POST",
				timeout: 0,
				processData: false,
				mimeType: "multipart/form-data",
				contentType: false,
				data: form,
			};

			$.ajax(settings).done(function (response) {
				var divisionsAndWorkshops = JSON.parse(response);
				// console.log(divisionsAndWorkshops);
				var template = $("#divisionTemplate").html();
				// Compile the template data into a function
				var templateScript = Handlebars.compile(template);
				var html = templateScript(divisionsAndWorkshops);
				// console.log(html);
				$("#selectDivision").append(html);
				$("#selectDivision").on("change", function () {
					Division = $(this).val();
					Category = "";
					var type =
						$(this).find(":selected").attr("class") ===
						"divisionOption"
							? "division"
							: "workshop";
					// console.log($(this).find(":selected").attr("class"));
					// console.log(type);
					$("#selectCategory").find("option").remove();
					var form = new FormData();
					form.append("project_category", "true");
					form.append("division_name", Division);
					form.append("type", type);

					var settings = {
						url:
							"https://internship.aicte-india.org/internshipinindianrailways/api_request.php",
						method: "POST",
						timeout: 0,
						processData: false,
						mimeType: "multipart/form-data",
						contentType: false,
						data: form,
					};

					$.ajax(settings).done(function (response) {
						var departments = { categories: JSON.parse(response) };
						//console.log(departments);
						var template = $("#categoryTemplate").html();
						// Compile the template data into a function
						var templateScript = Handlebars.compile(template);
						// Generate html for all zones in array from compiled template
						var html = templateScript(departments);
						// Insert the HTML code into the page
						$("#selectCategory").append(html);
						$("#selectCategory").on("change", function () {
							Category = $(this).val();
						});
					});
				});
			});
		});
	});
});
