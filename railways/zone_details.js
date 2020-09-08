var zoneContext = {
	zones: {
		"CR": {
			divisions: ["Mumbai", "Bhusawal", "Pune ", "Solapur", "Nagpur CR"],
			workshops: ["Parel", "Matunga", "Kurdwadi"],
			name: "Central Railway",
			noOfDivisions: 5,
			noOfWorkshops: 3,
		},
		"Northen Railway": {
			divisions: ["Delhi", "Ambala", "Firozpur", "Lucknow", "Moradabad"],
			workshops: [
				"Charbagh",
				"Alambagh",
				"Amritsar",
				"Jagadhri",
				"Kalka",
			],
			code: "NR",
			noOfDivisions: 5,
			noOfWorkshops: 5,
		},
		"North Eastern Railway": {
			divisions: ["Izzatnagar", "Lucknow NER", "Varanasi"],
			workshops: ["Gorakhpur", "Izatnagar"],
			code: "NER",
			noOfDivisions: 3,
			noOfWorkshops: 2,
		},
		"Northeast Frontier Railway": {
			divisions: [
				"Alipurdaur",
				"Katihar",
				"Rangiya",
				"Lumding",
				"Tinsukia",
			],
			workshops: ["Dibrugarh", "NewBongaigaon", "Tindharia"],
			code: "NFR",
			noOfDivisions: 5,
			noOfWorkshops: 3,
		},
		"Eastern Railway": {
			divisions: ["Howrah", "Sealdah", "Asansol", "Malda"],
			workshops: ["Jamalpur", "Lilluah", "Kanchrapara", "Budge Budge"],
			code: "ER",
			noOfDivisions: 4,
			noOfWorkshops: 4,
		},
		"South Eastern Railway": {
			divisions: ["Adra", "Chakradharpur", "Kharagpur", "Ranchi"],
			workshops: ["Kharagpur (Main)", "Kharagpur (Wagon)", "Haldia"],
			code: "SER",
			noOfDivisions: 4,
			noOfWorkshops: 3,
		},
		"South Central Railway": {
			divisions: [
				"Secunderabad",
				"Hyderabad",
				"Hazur Sahib Nanded",
				"Vijaywada",
				"Guntur",
				"Guntakal",
			],
			workshops: ["Lallaguda", "Guntapalli"],
			code: "SCR",
			noOfDivisions: 6,
			noOfWorkshops: 2,
		},
		"Southern Railway": {
			divisions: [
				"Chennai",
				"Tiruchirappalli",
				"Madurai",
				"Palakkad",
				"Salem",
				"Thiruvananthapurum",
			],
			workshops: [
				"Perambur(Carr.)",
				"Perambur(Loco.)",
				"Golden Rock",
				"Lallaguda",
			],
			code: "SR",
			noOfDivisions: 6,
			noOfWorkshops: 4,
		},
		"Western Railway": {
			divisions: [
				"Mumbai WR",
				"Ratlam",
				"Ahmedabad",
				"Rajkot",
				"Bhavnagar",
				"Vadodara",
			],
			workshops: [
				"Dahod",
				"Lower Parel",
				"Mahalaxmi",
				"Pratapnagar",
				"Bhavnagar",
			],
			code: "WR",
			noOfDivisions: 6,
			noOfWorkshops: 5,
		},
		"South Western Railway": {
			divisions: ["Hubballi", "Bengaluru", "Mysuru"],
			workshops: ["Mysore", "Hubli"],
			code: "SWR",
			noOfDivisions: 3,
			noOfWorkshops: 2,
		},
		"North Western Railway": {
			divisions: ["Jaipur", "Ajmer", "Bikaner", "Jodhpur"],
			workshops: ["Ajmer (Carr.)", "Ajmer (Loco.)", "Bikaner", "Jodhpur"],
			code: "NWR",
			noOfDivisions: 4,
			noOfWorkshops: 4,
		},
		"West Central Railway": {
			divisions: ["Jabalpur", "Bhopal", "Kota "],
			workshops: ["Kota", "Bhopal"],
			code: "WCR",
			noOfDivisions: 3,
			noOfWorkshops: 2,
		},
		"North Central Railway": {
			divisions: ["Prayagraj", "Agra", "Jhansi"],
			workshops: ["Jhansi", "Gwalior"],
			code: "NCR",
			noOfDivisions: 3,
			noOfWorkshops: 2,
		},
		"South East Central Railway": {
			divisions: ["Bilaspur", "Raipur", "Nagpur SEC"],
			workshops: ["Nagpur", "Raipur"],
			code: "SECR",
			noOfDivisions: 3,
			noOfWorkshops: 2,
		},
		"East Coast Railway": {
			divisions: ["Khudra Road", "Sambalpur", "Rayagada", "Waltair"],
			workshops: ["Mancheswar"],
			code: "ECoR",
			noOfDivisions: 4,
			noOfWorkshops: 1,
		},
		"East Central Railway": {
			divisions: [
				"Danapur",
				"Dhanbad",
				"Pt Deen Dayal Upadhyaya",
				"Samastipur",
				"Sonpur",
			],
			workshops: ["Harnaut", "Samastipur"],
			code: "ECR",
			noOfDivisions: 5,
			noOfWorkshops: 2,
		},
		"Metro Railway (Kolkata)": {
			divisions: ["Kolkata"],
			code: "MTP",
			noOfDivisions: 1,
			noOfWorkshops: 0,
		},
	},
};

var projectContext = {
	categories: {
		"Electrical Engineering": {
			subcategories: [
				"Foot patrolling in traction distribution (Online)",
				"Real time monitoring of Tower wagons (Online)",
				"Online monitoring of OHE using SCADA (Online)",
				"Online monitoring of asset in Traction Distribution (Online)",
				"Tender Management in Traction Distribution (Online)",
				"Materials Management system in Traction Distribution (Online)",
				"Power quality monitoring , power measurements and fault detection  (Offline)",
				"Design and construction of 25 KV substation, 22/2.2 KV substation  (Offline)",
				"Mechanized working in the field of stripping, dismantling (Offline)",
				"Failure analysis of electronics card and its remedies (Offline)",
				"Transportation and handling of various equipment  (Offline)",
				"Formation of quality circles, data analysis and attention thereof (Offline)",
				"Development of R&D sections & laboratory to eradicate recurring defects  (Offline)",
				"Needs of specialization team for exchanging ideas  quality maintenance  (Offline)",
				"Pictorial demonstrations for upgrading skills of maintenance staff, supervisors etc (Offline)",
				"Automation of crane working by decontrol from work place (Offline)",
				"Design, development and installation of occupancy sensors to office buildings (Offline)",
				"Automation of measuring & recording systems various electrical equipments (Offline)",
				"Multi Skilling of staff  to get optimum utilization of  manpower (Offline)",
				"Temperature sensing, monitoring, communicating & preventive action in power supply panels (Offline)",
				"Optimising use of air-conditioning for equipments and human comfort (Offline)",
			],
		},
		"Electronics Signaling and Telecommunication": {
			subcategories: [
				"High reliability Train detection system (Offline)",
				"Implementation of Integrated Security System (Offline)",
				"Study of electronic interlocking (Offline)",
				"Study of automatic signaling (Offline)",
				"Study of Mobile Train Radio Communication  (Offline)",
				"Study of Integrated Passenger Information System (Offline)",
				"Installation, Configuration and testing of IP based telephone exchange (Offline)",
				"Study of Train Management System (TMS) (Offline)",
				"Study of control Communication with SDH/ PDH and optic fiber  (Offline)",
				"Automatic Validation of EI logic through formal verification tools (Offline)",
				"Machine learning based point predictive maintenance (Offline)",
				"AI based power supply monitoring (Offline)",
			],
		},
		"Civil Engineering": {
			subcategories: [
				"Public private partnership (PPP) – study of opportunities, challenges etc (Offline)",
				"Asset register and asset management, costing and commercial accounting  (Offline)",
				"Capital budgeting and project costing  (Offline)",
				"Zero based Budgeting  (Offline)",
				"Rationalization of allowances (Offline)",
			],
		},
		"Mechanical Engineering": {
			subcategories: [
				"Image processing to develop assisted maintenance regime by apps",
				"Developing an optimized profile for maximizing wheel life",
				"Identifying materials for fabrication & furnishing of rolling stock",
				"Development of MIS system to help in troubleshooting of online failures",
				"Design and development of an online training module",
				"Designing a minimalistic modular light weight toilet",
				"Derailment detection device and its feasibility in Indian Railways",
				"Vibration analysis & study of feasibility of onboard condition monitoring of rolling stock",
				"Use of piezo based energy harvesting in wayside locations",
				"Study preventive maintenance schedule & optimise the activities",
				"Study air suspension system,FIBA and compare with spring suspension system",
				"Study cases of train parting and suggest improvements",
				"Pros & cons of train set type rolling stock wrt conventional locomotive lead trains",
				"Study various types of coupler and their design",
				"Optimize depth of cut during tyre turning to increase wheel life",
				"Analyze wheel shelling cases in LHB coaches & find major causes",
				"Analyze spring breakage cases in FIAT bogie & find major causes",
				"Study FIAT bogie design to identify vulnerable areas due to vibration at High speed",
				"Maintenance,monitoring and performance analysis of inverters fitted in SGAC coaches ",
				"Online monitoring of Temperature & engine parameter with alert notification",
				"Failure analysis of V belt breakage in SGAC coaches",
				"Maintenance and testing of healthiness of push pull system",
				"AI based Fire detection and suppression system in EMU using CCTV",
				"Improvement of maintenance efficiency by reorganization of maintenance sections",
				"Automation of maintenance activities",
				"Study & Update in cleaning practices of EMU coaches",
			],
		},
		"Commercial and Marketing": {
			subcategories: [
				"Logistic and supply chain management (Offline)",
				"Tendering in Railways along with contract management (Offline)",
				"Ticketing system in Railways (Offline)",
				"Terminal and Train Management system (Offline)",
				"PPP models for development of freight  terminal and stations (Offline)",
			],
		},
		"Finance Management": {
			subcategories: [
				"Green energy: Electricity generation through piezoelectric mechanism  (Offline)",
				"Feasibility and suitability of installation of small scale on-grid wind mills over OHE masts (Offline)",
				"Potential of utilization of surplus railway land for  solar power plants  (Offline)",
				"Green buildings: Possibility and challenges in Railways’ context  (Offline)",
				"Water Desalination plants: can coastal railways in India learn & adopt from Israel? (Offline)",
				"Type of treatment to be given to rails to restrict corrosion/liner biting (Offline)",
				"Detection if rail fractures through detection of discontinuity in rails by OFC cables  (Offline)",
				"To make track free from glued joint, axle counter and signaling elements (Offline)",
				"Use of railway land for solar panels to avoid CRO (Offline)",
				"Automation of water distribution system and getting rid of valve operating system (Offline)",
				"Business development by utilizing Roof Tops Of Large COP areas (Offline)",
				"Replacement of Iron/Steel  material in FOBs, Lift Frames, etc in coastal area (Offline)",
			],
		},
		"Operations Management and Logistics": {
			subcategories: [
				"Contact-less integrated payment system",
				"Bicycle train integration",
				"Integrated control system for suburban railway",
				"Crew Scheduling system for suburban railway",
				"Access control of Suburban stations",
				"Assisted signal sighting system for the crew",
				"Assisted Troubleshooting system for the crew",
				"AI based crew behaviour monitoring system",
				"Integrating suburban network with State Public transport",
				"Review existing train operation & working rules",
				"Feasibility study for introducing AC trains in suburban system",
				"Impact of Metro on Suburban train services requirement",
			],
		},
		"Human Resource Management": {
			subcategories: [
				"Yardstick Revision",
				"360 deg Feedback Mechanism",
				"Leadership Lessons on Railways",
				"Railway Organizational structure",
			],
		},
		"Materials Management": {
			subcategories: [
				"Process improvements for warranty claim realizations (Offline)",
				"Increasing share of procurement through GeM  (Offline)",
				"Development of efficient inventory management system (Offline)",
			],
		},
		राजभाषा: {
			subcategories: [
				"राजभाषा और तकनीकी विन्यास",
				"सूचना प्रौद्योगिकी और राजभाषा",
				"भारतीय रेलों पर राजभाषा का प्रभावी संचालन",
				"राजभाषा पारंगत प्रशिक्षु",
				"भारतीय रेल और राजभाषा।",
			],
		},
	},
};

Handlebars.registerHelper("inc", function (value, options) {
	return parseInt(value) + 1;
});

$(document).ready(function () {
    var zone = window.location.search.split("?")[1].replace("id=","");
    console.log(zone);
	// Retrieve the template data from the HTML (jQuery is used here).
	var template = $("#divisionTemplate").html();
	// Compile the template data into a function
	var templateScript = Handlebars.compile(template);
	// Generate html for all zones in array from compiled template
	var html = templateScript(zoneContext);
	// Insert the HTML code into the page
	$("#table").append(html);
});
