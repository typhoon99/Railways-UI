$('#category1').on('click',function(){
    $("#subCategory1").removeClass('d-none');
     $("#subCategory2").addClass("d-none");
    $("#register-admin-tab").tab("show");
	console.log($(this).id);
})

$("#category2").on("click", function () {
    $("#subCategory1").addClass("d-none");
    $("#subCategory2").removeClass("d-none");
    $('#register-admin-tab').tab("show");
    console.log($(this).id)
});

$("#subCategory-next").on('click', function(){
    $("#register-university-tab").tab("show");
});

$("#zone1").on("click", function () {
	$("#register-employer-tab").tab("show");
});

$("#division1, #division2").on("click", function () {
    
	window.open("./studentRegistration.html","_blank");
});