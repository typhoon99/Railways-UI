$('#category1').on('click',function(){
    $("#subCategory1").removeClass('d-none');
     $("#subCategory2").addClass("d-none");
    $("#register-admin-tab").tab("show");
    $("#category1").next().append('<i class="fa fa-check text-success" aria-hidden="true"></i>');
})

$("#category2").on("click", function () {
    $("#subCategory1").addClass("d-none");
    $("#subCategory2").removeClass("d-none");
    $('#register-admin-tab').tab("show");
    $("#category2")
		.next()
		.append('<i class="fa fa-check text-success" aria-hidden="true"></i>');
    console.log($(this).id)
});

$("#subCategory1-project1").on("click", function () {
    $("#register-university-tab").tab("show");
    $("#subCategory1-project1")
		.next()
		.append('<i class="fa fa-check text-success" aria-hidden="true"></i>');
});

$("#subCategory1-project2").on("click", function () {
	$("#register-university-tab").tab("show");
	$("#subCategory1-project1")
		.next()
		.append('<i class="fa fa-check text-success" aria-hidden="true"></i>');
});

$("#subCategory1-project16").on("click", function () {
	Swal.fire({
		title: "Submit your Project",
		input: "text",
		inputAttributes: {
			autocapitalize: "off",
		},
		showCancelButton: true,
		confirmButtonText: "Submit",
		showLoaderOnConfirm: true,
		preConfirm: (login) => {
			$("#register-university-tab").tab("show");
		},
		allowOutsideClick: () => !Swal.isLoading(),
});
})

$("#zone1").on("click", function () {
    $("#register-employer-tab").tab("show");
    $("#zone1")
		.next()
		.append('<i class="fa fa-check text-success" aria-hidden="true"></i>');
	console.log($("#zone1").next());
});

$("#division1, #division2,#division3, #division4,#division5, #division6").on(
	"click",
	function () {
		// window.open("./studentRegistration.html","_blank");
		window.location.href = "./studentRegistration.html";
	}
);