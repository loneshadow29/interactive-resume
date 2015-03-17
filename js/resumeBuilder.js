var bio = 
{
	"name" : "Brandon Ashburn",
	"role" : "Principal MIS Coordinator",
	"contacts" : {
		"mobile" : "(804) 517-8098",
		"email" : "loneshadow29@yahoo.com",
		"location" : "Henrico, Virginia"
	},
};


var education = {
	"degrees" : 
	[
		{
		"name" : "Virginia Commonwealth University",
		"location" : "Richmond, Virginia",
		"degree" : "BAS (In progress)",
		"majors" : "Computer Science",
		"dates" : 2003
		},

		{
		"name" : "Bryant & stratton College",
		"location" : "Richmond, Virginia",
		"degree" : "AAS",
		"majors" : "Microcomputer Info Management",
		"dates" : 1998
		},
		
		{
		"name" : "Lloyd C Bird Highschool",
		"location" : "Chesterfield, Virginia",
		"degree" : "Diploma",
		"majors" : "College Prep",
		"dates" : 1996
		}
	 ]
}

var work = {
	"positions" : 
	[
		{
		"employer" : "Capital One",
		"title" : "Pincipal MIS Coordinator",
		"dates" : "October 2014 - Present",
		"description" : "In charge of identifying violations of SCRA policy and working with lines of business in order to remediate"
		},

		{
		"employer" : "Capital One",
		"title" : "Senior Operations Coordinator (Analytics Team)",
		"dates" : "November 2013 - October 2014",
		"description" : "Reviewed weekly exception reports for branded book and partnership to identify GRC and business failures, assisted with development of ADA controls and tools, subject matter expert in MS Excel, performed data analysis to determine if credit shortfalls broke SCRA statute, developed calculator which would assist production in the manual calculation of retroactive credits and tracked test results during alpha and beta testing phases, owned process for the creation of tools to be used by the department, developed several Excel tools for SCRA and ADA, performed updates for Excel tools used by the department as well as answered any questions regarding the updates, taught an intro to MS Excel class, taught a class on using the VLOOKUP formula, trained beta testers for draft calculator, assisted with requesting computer access as well as installation of software, performed quality control audits of partnership fulfillment cases to ensure accuracy, performed review of online intake remediation initiative to ensure that cases were created for all online SCRA requests, technical support, perform edits of SQL code for QC exception reports, other duties as needed."
		},

		{
		"employer" : "Capital One",
		"title" : "Senior Operations Coordinator (Cross Line of Business)",
		"dates" : "July 2012 - November 2013",
		"description" : "process incoming SCRA requests, calculate retroactive credits via BOBJ and manual calculation, share incoming requests with other applicable lines of business, in charge of BAT tracker process, owned agent driven continuous process improvement process, supported March 2013 process change objective, technical support for lend agents who assisted with production, drafted and provided weekly reporting of double blind reconciliation process, provided weekly reporting of cross line of business intake and fulfillment processes, handled cross line of business sharing for intake and fulfillment, performed adhoc requests for leadership as needed, created tasks and assisted with process map for cross line of business sharing, other duties as needed."
		}
	]
};

var projects = {
	"projects" : [
		{
		"title" : "Fiche Calculator",
		"dates" : "April 2014 - October 2014",
		"description" : "development of a calculator which would extract data such as fees, finance charges and statements dates from fiche statements.  Presented concept to management to request time and resources.  Also, training of the beta testers as well as track their results."
		}
	]
}

bio.display = function()
{

	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedName = HTMLheaderName.replace("%data%",bio.name);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);


	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedWelcomeMsg);
}

work.display = function() 
{
	for (job in work.positions) 
	{
	$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.positions[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.positions[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%",work.positions[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.positions[job].description);
	
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);
	}
}

projects.display = function() 
{
	for (project in projects.projects) 
	{
		$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
	var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
	var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);

	$(".project-entry:last").append(formattedTitle);
	$(".project-entry:last").append(formattedDates);
	$(".project-entry:last").append(formattedDescription);
	}
}

education.display = function() 
{
	for (school in education.degrees) 
	{
		$("#education").append(HTMLschoolStart);
		var SchName = HTMLschoolName.replace("%data%", education.degrees[school].name);
		var formattedSchName = SchName.replace("#", education.degrees[school].url);
		var formattedSchLoc = HTMLschoolLocation.replace("%data%", education.degrees[school].location);
		var formattedSchDates = HTMLschoolDates.replace("%data%", education.degrees[school].dates);
		var formattedSchDeg = HTMLschoolDegree.replace("%data%", education.degrees[school].degree);
		var formattedSchMaj = HTMLschoolMajor.replace("%data%", education.degrees[school].majors);
		
		$(".education-entry:last").append(formattedSchName);
		$(".education-entry:last").append(formattedSchLoc);
		$(".education-entry:last").append(formattedSchDates);
		$(".education-entry:last").append(formattedSchDeg);
		$(".education-entry:last").append(formattedSchMaj);
	}
}

education.display();
projects.display();
work.display();
bio.display();

$("#mapDiv").append(googleMap);
