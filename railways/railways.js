var Zone = "";
var Division = "";
var Category = "";
var Project = "";
var Description = "";

Handlebars.registerHelper("inc", function (value, options) {
	return parseInt(value) + 1;
});

$(document).ready(function () {

	//Disable Click on Nav Tabs
	$(
		"#select-category-tab, #select-project-tab, #select-zone-tab, #select-division-tab"
	).on("click", function () {
		return false;
	});

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
		//console.log(wrapper);
		// Retrieve the template data from the HTML (jQuery is used here).
		var template = $("#zoneTemplate").html();
		// Compile the template data into a function
		var templateScript = Handlebars.compile(template);
		// Generate html for all zones in array from compiled template
		var html = templateScript(wrapper);
		// console.log(html);
		// Insert the HTML code into the page
		$("#zonesRow").append(html);
		$(".zone").hover(
			function () {
				$(this).append(
					'<i class="fa fa-check fa-3x text-success" aria-hidden="true"></i>'
				);
			},
			function () {
				$(this).find("i").last().remove();
			}
		);
		$(".zone").on("click", function () {
			$(this).prev().attr("checked", "true");
			// $(this).append(
			// 	'<i class="fa fa-check fa-3x text-success" aria-hidden="true"></i>'
			// );
			$("#select-zone-tab i").first().addClass("filled");
			$("#select-zone-tab span").first().addClass("filled");
			// console.log($(this).prev().val());
			Zone = $(this).prev().val();
			console.log(Zone);
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
				//console.log(divisionsAndWorkshops);
				var template_div = $("#divisionTemplate").html();
				// Compile the template data into a function
				var templateScript_div = Handlebars.compile(template_div);
				var divisions = {divisions : divisionsAndWorkshops.division};
				var workshops = {workshops : divisionsAndWorkshops.workshop};
				//console.log(divisions);
				var html_div = templateScript_div(divisions);
				$("#divisionRow").append(html_div);
				if (Zone == "MTP" || Zone == "HQ") {
					$("#workshopsDiv").addClass("d-none");
				} else {
					var template_ws = $("#workshopTemplate").html();
					var templateScript_ws = Handlebars.compile(template_ws);
					var html_ws = templateScript_ws(workshops);
					$("#workshopRow").append(html_ws);
				}
				$("#select-division-tab").tab("show");
				$("html,body").animate(
					{
						scrollTop: $("#select-division-tab").offset().top,
					},
					1000
				);
				
				//on hover show check mark
				$(".division").hover(
					function () {
						$(this).append(
							'<i class="fa fa-check fa-3x text-success" aria-hidden="true"></i>'
						);
					},
					function () {
						$(this).find("i").last().remove();
					}
				);
				$(".division").on("click", function () {
					Division = $(this).find("label").html();
					var type = $(this).find("label").attr("type");
					console.log(Division);
					console.log(type);
					$(this).prev().attr("checked", "true");
					$("#select-division-tab i").first().addClass("filled");
					$("#select-division-tab span").first().addClass("filled");
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
						var departments = {categories : JSON.parse(response)};
						//console.log(departments);
						var template = $("#categoryTemplate").html();
						// Compile the template data into a function
						var templateScript = Handlebars.compile(template);
						// Generate html for all zones in array from compiled template
						var html = templateScript(departments);
						// Insert the HTML code into the page
						$("#categoryRow").append(html);
						$("#select-category-tab").tab("show");
						$("html,body").animate(
							{
								scrollTop: $("#select-category-tab").offset()
									.top,
							},
							1000
						);
						$(".category").hover(
							function () {
								$(this).append(
									'<i class="fa fa-check fa-3x text-success" aria-hidden="true"></i>'
								);
							},
							function () {
								$(this).find("i").last().remove();
							}
						);
						$(".category").on("click", function () {
							$(this).prev().attr("checked", "true");
							// $(this).append(
							// 	'<i class="fa fa-check fa-3x text-success" aria-hidden="true"></i>'
							// );
							$("#select-category-tab i")
								.first()
								.addClass("filled");
							$("#select-category-tab span")
								.first()
								.addClass("filled");
							var subHeading =
								"Available Projects in: " +
								$(this).find("label").html();
							$("#subCategory-heading").text(subHeading);
							// console.log(subHeading);
							// $(this).append(
							// 	'<i class="fa fa-check text-success" aria-hidden="true"></i>'
							// );
							Category = $(this).prev().attr("id");
							// console.log(Category);
							var form = new FormData();
							form.append("zone_id", Zone);
							form.append("project", "true");
							form.append("division_id", Division);
							form.append("category_id", Category);

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
								var projects = {objects :JSON.parse(response)};
								console.log(projects);
								var template = $("#subCategoryTemplate").html();
								// Compile the template data into a function
								var templateScript = Handlebars.compile(
									template
								);
								var html = templateScript(projects);
								// console.log(html);
								// Insert the HTML code into the page
								$("#subCategoryRow").append(html);
								$("#select-project-tab").tab("show");
								$("html,body").animate(
									{
										scrollTop: $(
											"#select-project-tab"
										).offset().top,
									},
									1000
								);
								$(".subcategory").hover(
									function () {
										$(this).append(
											'<i class="fa fa-check fa-3x text-success" aria-hidden="true"></i>'
										);
									},
									function () {
										$(this).find("i").last().remove();
									}
								);
								$(".subcategory").on("click", function () {
									// console.log("subcat selected");
									$(this).prev().attr("checked", "true");
									$("#select-project-tab i")
										.first()
										.addClass("filled");
									$("#select-project-tab span")
										.first()
										.addClass("filled");
										Project = $(this).find("label").html();
										//console.log(Project);
										var form = new FormData();
										form.append("session", "true");
										form.append("zone", Zone);
										form.append("division", Division);
										form.append("project_category", Category);
										form.append("project", Project);

										var settings = {
											url:
												"https://internship.aicte-india.org/internshipinindianrailways/src/php/main.php",
											method: "POST",
											timeout: 0,
											processData: false,
											mimeType: "multipart/form-data",
											contentType: false,
											data: form,
										};

										$.ajax(settings).done(function (response) {
											//console.log(response);
											if (response === "success") {
												window.location.href =
													"./studentRegistration.html";
											}
										});
								});
								$("#subCategory-work").on("click", function () {
									$("#modalSuggest").modal("show");
									$("#btnSuggest").on("click", function () {
										$("#modalSuggest").modal("hide");
										Project = $("#txtProjectName").val().trim();
										Description = $("#txtDescription").val().trim();
										var form = new FormData();
										form.append("suggested", "true");
										form.append("zone", Zone);
										form.append("division", Division);
										form.append("project_category", Category);
										form.append("project", Project);
										form.append("description", Description);

										var settings = {
											url: "https://internship.aicte-india.org/internshipinindianrailways/src/php/main.php",
											method: "POST",
											timeout: 0,
											processData: false,
											mimeType: "multipart/form-data",
											contentType: false,
											data: form,
										};

										$.ajax(settings).done(function (response) {
											//console.log(response);
											if (response === "success") {
												window.location.href =
													"./studentRegistration.html";
											}
										});
									});
								});
							});
						});
					});
				});
			if (Zone == "HQ") {
				//console.log("In HQ");
				$(".division").click();
				//console.log("Division clicked");
			}
			});
		});
	});
});