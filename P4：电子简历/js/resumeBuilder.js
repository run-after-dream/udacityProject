var skills = ["writting","programing","tennis","JS"];

var bio = {
	"name":"James CHEN",
	"role":"Web Developer",
	"contacts":{
		"mobile":"12345678910",
		"email":"12345678910@163.com",
		"github":"12345@github.com",
		"twitter":"none",
		"location":"上海市"
	},
	"welcomeMessage":"Come On!",
	"skills":skills,
	"biopic":"images/me.jpg",
	"display":function()
	{
		var formattedName = HTMLheaderName.replace("%data%","James Chen");
		var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		$("#topContacts,#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		$("#topContacts,#footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		$("#topContacts,#footerContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		$("#topContacts,#footerContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		$("#topContacts,#footerContacts").append(formattedLocation);
		var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
		$("#header").append(formattedBioPic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		if(bio.skills.length > 0)
		{
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i <= bio.skills.length - 1; i++) {
				$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
			}
		}
	}	
};

var education = {
	"schools":[{
		"name":"A",
		"location":"南京市",
		"degree":"master",
		"majors":["Electronics and communications engineering"],
		"dates":"2015.9-2018.6",
		"url":"www.google.com"
	},
	{
		"name":"B",
		"location":"常州市",
		"degree":"bechalor",
		"majors":["Electronics and communications engineering"],
		"dates":"2011.9-2015.6",
		"url":"www.google.com"
	}],
	"onlineCourses":[{
		"title":"front-end development",
		"school":"Udacity",
		"dates":"2017.8-2018.2",
		"url":"http://cn.udacity.com"
	}],
	"display":function()
	{
		$("#education").append(HTMLschoolStart);
		for (var i = 0; i <= education.schools.length - 1; i++)
		{
			var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
			$(".education-entry:last").append(formattedName);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
			$(".education-entry:last").append(formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
			$(".education-entry:last").append(formattedLocation);
			for (var j = 0; j <= education.schools[i].majors.length - 1; j++)
			{
				var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
		
		$(".education-entry:last").append(HTMLonlineClasses);
		for (var i = 0; i <= education.onlineCourses.length - 1; i++)
		{
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
			$(".education-entry:last").append(formattedOnlineTitle);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
			$(".education-entry:last").append(formattedOnlineSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
			formattedOnlineURL = formattedOnlineURL.replace("#",education.onlineCourses[i].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};

var work = {
	"jobs":[{
		"employer":"ABC",
		"title":"Software Engineer",
		"location":"上海市",
		"dates":"in progress",
		"description":" I began work for a public company as a software engineer in NanJing.Because Im capable of more responsibilities, so I decided to change my job. And in August 2018,I left NanJing to ShangHai and worked for a foreign enterprise as a software engineer."
	}],
	"display":function()
	{
		$("#workExperience").append(HTMLworkStart);
		for (var i = 0; i <= work.jobs.length - 1; i++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var project = {
	"projects":[
	{
		"title":"Animal Cards",
		"dates":"2017.8-2017.9",
		"description":"This project use CSS to create a Animal Card which title is panda.",
		"images":["images/proj11.JPG"]
	},
	{
		"title":"Work collection web page",
		"dates":"2017.9-2017.10",
		"description":"This project use HTML,CSS and JS to create a web page which title is journey.",
		"images":["images/proj21.JPG","images/proj22.JPG"]
	}],
	"display":function()
	{
		$("#projects").append(HTMLprojectStart);
		for (var i = 0; i <= project.projects.length - 1; i++){
			var formattedTitle = HTMLprojectTitle.replace("%data%",project.projects[i].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%",project.projects[i].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%",project.projects[i].description);
			$(".project-entry:last").append(formattedDescription);

			if(project.projects[i].images.length > 0)
			{
				for (var j = 0; j <= project.projects[i].images.length - 1; j++){
					var formattedImage = HTMLprojectImage.replace("%data%",project.projects[i].images[j]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
		
	}
};

/*
建立简历的代码将会在这个文件里写出
*/
bio.display();
work.display();
project.display();
education.display();

//解除下面代码的注释, 添加高德地图到 mapDiv 上，使得简历拥有地图
$("#mapDiv").append(gaodeMap);