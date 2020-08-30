$(".category").on("click", function () {
		$(this).prev().attr("checked", "true");
		$(this).append(
			'<i class="fa fa-check fa-3x text-success" aria-hidden="true"></i>'
		);
		$("#select-category-tab i").first().addClass("filled");
		$("#select-category-tab span").first().addClass("filled");
		var subHeading =
			"Available Projects in: " + $(this).find("label").html();
		$("#subCategory-heading").text(subHeading);
		// console.log(subHeading);
		$(this).append(
			'<i class="fa fa-check text-success" aria-hidden="true"></i>'
		);
		var template = $("#subCategoryTemplate").html();
		// Compile the template data into a function
		var templateScript = Handlebars.compile(template);
		var catId = $(this).find("label").html();
		Category = catId;
		console.log(Category);
		var subCats = context.categories[catId];
		//console.log(subCats);
		var html = templateScript(subCats);
		// console.log(html);
		// Insert the HTML code into the page
		$("#subCategoryRow").append(html);
		$("#select-project-tab").tab("show");
		$("html,body").animate(
			{
				scrollTop: $("#select-project-tab").offset().top,
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

		$("#subCategory-work").on("click", function () {
			Swal.fire({
				title: "Submit your Project",
				input: "text",
				inputAttributes: {
					autocapitalize: "off",
				},
				showCancelButton: true,
				confirmButtonText: "Submit",
				preConfirm: (proj) => {
					$("#select-project-tab").first().addClass("filled");
					$("#lblCustom").html(proj);
					$("#customProj").removeClass("d-none");
					// console.log($("#subcategoryCustom").next());
					$("#subcategoryCustom").next().click();
				},
				allowOutsideClick: () => !Swal.isLoading(),
			});
		});

		$(".subcategory").on("click", function () {
			// console.log("subcat selected");
			$(this).prev().attr("checked", "true");
			$(this).append(
				'<i class="fa fa-check fa-3x text-success" aria-hidden="true"></i>'
			);
			$("#select-project-tab i").first().addClass("filled");
			$("#select-project-tab span").first().addClass("filled");
			// Retrieve the template data from the HTML (jQuery is used here).
			var template = $("#zoneTemplate").html();
			// Compile the template data into a function
			var templateScript = Handlebars.compile(template);
			var html = templateScript(zoneContext);
			// Insert the HTML code into the page
			$("#zonesRow").append(html);
			$("#select-zone-tab").tab("show");
			var SubcatId = $(this).find("label").html();
			Project = SubcatId;
			console.log(Project);
			$("html,body").animate(
				{
					scrollTop: $("#select-zone-tab").offset().top,
				},
				1000
			);
			//on hover show check mark
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
				$(this).append(
					'<i class="fa fa-check fa-3x text-success" aria-hidden="true"></i>'
				);
				$("#select-zone-tab i").first().addClass("filled");
				$("#select-zone-tab span").first().addClass("filled");
				var template_div = $("#divisionTemplate").html();
				// Compile the template data into a function
				var templateScript_div = Handlebars.compile(template_div);
				var zoneId = $(this).find("label").html();
				Zone = zoneId;
				console.log(Zone);
				// console.log(zoneId);
				var divs = zoneContext.zones[zoneId];
				// console.log(divs);
				var html_div = templateScript_div(divs);
				$("#divisionRow").append(html_div);
				if (zoneId == "Metro Railway (Kolkata)") {
					$("#workshopsDiv").addClass("d-none");
				} else {
					var template_ws = $("#workshopTemplate").html();
					var templateScript_ws = Handlebars.compile(template_ws);
					var html_ws = templateScript_ws(divs);
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
					console.log(Division);
					$(this).prev().attr("checked", "true");
					$("#select-division-tab i").first().addClass("filled");
					$("#select-division-tab span").first().addClass("filled");
					var data1 = new FormData();
					data1.append("category", Category);
					data1.append("zone", Zone);
					data1.append("division", Division);
					data1.append("project", Project);
					console.log(data1);
					$.ajax({
						url: "./test.php",
						type: "POST",
						data: data1,
						success: function () {
							window.location.href = "./test.php";
						},
						error: function (error) {
							console.error(error);
						},
					});
					/* window.location.href = "./register.php"; */
				});
			});
		});
	});