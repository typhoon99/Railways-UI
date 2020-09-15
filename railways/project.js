var Zone = "";
var Division = "";
var Category = "";
var Project = "";
var Description = "";

Handlebars.registerHelper("inc", function (value, options) {
	return parseInt(value) + 1;
});

// function showProjects(){
// 	var form = new FormData();
// 	form.append("zone_id", Zone);
// 	form.append("project", "true");
// 	form.append("division_id", Division);
// 	form.append("category_id", Category);
// 	var e = {
// 		lengthChange: !1,
// 		dom: "Bfrtip",
// 		buttons: ["copy", "print"],
// 		language: {
// 			paginate: {
// 				previous: "<i class='fas fa-angle-left'>",
// 				next: "<i class='fas fa-angle-right'>",
// 			},
// 		},
// 		ajax: {
// 			url:
// 				"https://internship.aicte-india.org/internshipinindianrailways/api_request.php",
// 			method: "POST",
// 			timeout: 0,
// 			processData: false,
// 			mimeType: "multipart/form-data",
// 			contentType: "application/json; charset=utf-8",
// 			data: form,
// 			dataSrc: function (data) {
// 				console.log(data);
// 				var json = JSON.parse(data);
// 				console.log(json);
// 				var return_data = new Array();
// 				for (var i = 0; i < json.length; i++) {
// 					return_data.push({
// 						SrNo: i + 1,
// 						Project: json[i].project_name,
// 						Nature: json[i].project_nature,
// 						Update:
// 							'<button class="btn btn-white"><i class="fa fa-edit"></i></button>',
// 						Delete:
// 							'<button class="btn btn-white"><i class="fa fa-trash-alt"></i></button>',
// 					});
// 				}
// 				return return_data;
// 			},
// 		},
// 		columns: [
// 			{ data: "SrNo" },
// 			{ data: "Project" },
// 			{ data: "Nature" },
// 			{ data: "Update" },
// 			{ data: "Delete" },
// 		],
// 		select: true,
// 	};
// 	$("#tblProjects").DataTable(e);
// }

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
			Project = "";
			$("#tblProjects").find(".projectRow").remove();
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
					Project = "";
					$("#tblProjects").find(".projectRow").remove();
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
							Project = "";
							$("#tblProjects").find(".projectRow").remove();
							// console.log(Category);
							// showProjects();
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
								var projects = {
									objects: JSON.parse(response),
								};
								//console.log(projects);
								var template = $("#projectsTemplate").html();
								// Compile the template data into a function
								var templateScript = Handlebars.compile(template);
								var html = templateScript(projects);
								// console.log(html);
								// Insert the HTML code into the page
								$("#table").append(html);
								$(".btnEdit").on('click',function(){
									var id = $(this).parent().parent().attr("id");
										var oldTitle = $('#'+id).find('td[label="Project"]').html();
										var oldNature = ($('#'+id).find('td[label="ProjectNature"]').html() == "Online") ? true : false;
										var oldDescription = $('#'+id).find('td[label="ProjectDescription"]').html();
										$("#txtEditProject").val(oldTitle);
										$("#txtEditDescription").val(oldDescription);
										$("#chkEditNature").prop("checked",oldNature);
										// console.log(title);
									$('#modalEdit').modal('show');
									$('#btnEdit').on('click',function(){
										var nature = $("#chkEditNature").prop("checked")
											? "Online"
											: "Offline";
										var name = $("#txtEditProject").val().trim();
										var description = $("#txtEditDescription").val().trim();
										console.log(nature, name, description);
										var form = new FormData();
										form.append("zone_id", Zone);
										form.append("division_id", Division);
										form.append("category_id", Category);
										form.append("project_nature", nature);
										form.append("project_name", name);
										form.append("project_description",description);
										form.append("id",id);
										form.append("update_project", "true");
										for (var pair of form.entries()) {
											console.log(
												pair[0] + " - " + pair[1]
											);
										}
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

										$.ajax(settings).done(function (
											response
										) {
											console.log(response);
											if (response == "success") {
												swal(
													"Project has been updated!",
													{
														icon: "success",
													}
												);
												$('#'+id).find('td[label="Project"]').html(name);
												$('#'+id).find('td[label="ProjectNature"]').html(nature);
												$('#'+id).find('td[label="ProjectDescription"]').html(description);
												$("#modalEdit").modal("hide");
												$("#chkEditNature").prop(
													"checked",
													false
												);
												$("#txtEditProject").val("");
												$("#txtEditDescription").val("");
											}
										});
									})
								})
								$(".btnDelete").on('click',function(){
									var id = $(this).parent().parent().attr("id");
									console.log(id);
									swal({
										title: "Are you sure?",
										text:
											"Once deleted, you will not be able to recover this project!",
										icon: "warning",
										buttons: true,
										dangerMode: true,
									}).then((willDelete) => {
										if (willDelete) {
											var form = new FormData();
											form.append(
												"delete_project",
												"true"
											);
											console.log(id);
											form.append("id", id);

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

											$.ajax(settings).done(function (
												response
											) {
												console.log(response);
												if(response == "success")
												{
													swal(
														"Project has been deleted!",
														{
															icon: "success",
														}
													);
													$('#'+id).remove();
												}
											});
										} 
									});
								});
							});
						});
					});
				});
			});
		});
	});

	$("#btnNewModal").on("click", function () {
		if (Zone != "" && Division != "" && Category != "") {
			$("#modalNew").modal("show");
			$("#btnAdd").on("click", function () {
				var nature = $("#chkNature").prop("checked")
					? "Online"
					: "Offline";
				var name = $("#txtNewProject").val().trim();
				var description = $("#txtNewDescription").val().trim();
				console.log(nature, name, description);
				var form = new FormData();
				form.append("zone_id", Zone);
				form.append("division_id", Division);
				form.append("category_id", Category);
				form.append("project_nature", nature);
				form.append("project_name", name);
				form.append("project_description", description);
				form.append("add_project", "true");
				for (var pair of form.entries()) {
					console.log(pair[0] + " - " + pair[1]);
				}
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
					console.log(response);
					if (response == "success") {
						swal("Project has been added!", {
							icon: "success",
						});
						$("#modalNew").modal("hide");
						$("#chkNature").prop("checked", false);
						$("#txtNewProject").val("");
						$("#txtNewDescription").val("");
						var selectedDepartment = $("#selectCategory").val();
						$("#selectCategory").val(selectedDepartment).trigger("change");
					}
				});
			});
		} else {
			alert("Please select Zone, Division and Department");
		}
	});
	
});
