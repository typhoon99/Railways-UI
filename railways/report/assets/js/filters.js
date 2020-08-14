//Global Parameters for Filtering
var State = null; //string
var Qualification = null; //string
var Gender = null; //string
var Category = null; //string
var Skills = null; //array of strings

//Get Card Data from Database
function getCardData(state = null,qualification=null,gender=null,category=null,skills=null) {
	// $.ajax({
	// 	type: "POST",
	// 	url: "",
	// 	data: { 
    //         state: state,
    //         qualification: qualification,
    //         gender: gender,
    //         category: category,
    //         skills: skills,
    //     },
	// 	success: function (data) {
	// 		$("#cardPosted").val(data.Posted);
	// 		$("#cardCompleted").val(data.Completed);
	// 		$("#cardOngoing").val(data.Ongoing);
	// 	},
	// 	error: function () {},
	// });
}

//Ajax call to get basic card data on page load
$('document').ready(function(){
    getCardData();
})

//On state hover change fill color of state
$('.state').hover(function(){
    // console.log(this.id);
    $(this).toggleClass("selected");
    // console.log($(this).attr("title"));
})

//Shov State/UT Name on Hover
$('[data-toggle="popover"]').popover({
	placement: "top",
	trigger: "hover",
});
//Get State/UT Data for clicked State/UT  
$(".state").click(function () {
    console.log(this.id);
	State = $(this).attr("title");
	var path = "/Maps/" + this.id + ".svg";
    // getCardData(State,Qualification,Gender,Category,Skills);
	$.get(path, function (data) {
		$("#mapDiv").html("");
		console.log(data.documentElement);
		$("#mapDiv").html(data.documentElement);
	});
});

//Filter Data on Qualification
$("#selectQualification_Int").change(function () {
    Qualification = $("#selectQualification_Int").val();
	// console.log(State + " " + Qualification + " " + Gender + " " + Category + " " + Skills);
	getCardData(State, Qualification, Gender, Category, Skills);
});

//Filter Data on Gender
$("#selectGender_Int").change(function () {
	Gender = $("#selectGender_Int").val();
	// console.log(State + " " + Qualification + " " + Gender + " " + Category + " " + Skills);
	getCardData(State, Qualification, Gender, Category, Skills);
});

//Filter Data on Category
$("#selectCategory_Int").change(function () {
	Category = $("#selectCategory_Int").val();
	// console.log(State + " " + Qualification + " " + Gender + " " + Category + " " + Skills);
	getCardData(State, Qualification, Gender, Category, Skills);
});

//Filter Data on Skills - Mutiple Skills as Array
$("#selectSkills_Int").change(function () {
	Skills = $("#selectSkills_Int").val();
	// console.log(State + " " + Qualification + " " + Gender + " " + Category + " " + Skills);
	getCardData(State, Qualification, Gender, Category, Skills);
});

