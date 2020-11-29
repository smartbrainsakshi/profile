
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sakshi Mishra",
  title: "Hey there! I'm Sakshi",
  subTitle: emoji("A passionate Software Developer 🚀"),
  resumeLink: "https://drive.google.com/file/d/1LYF5K8V-NA7KFbreQiM0horB-DgGx_KU/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/smartbrainsakshi",
  linkedin: "https://linkedin.com/in/sakshi-mishra-451a4a103/",
  gmail: "sakshipooja21@gmail.com",
  stackoverflow: "df",
  youtube: "https://www.youtube.com/channel/UCoRKkeZWGUd7YFF2-IlwvMA"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I know",
  subTitle: "I have strong hold on the below skills and worked on many more stacks",
  skills: [
    emoji("⚡ Develop web and mobile applications"),
    emoji("⚡ Writing Optimal Code with Conventions"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Madan Mohan Malaviya University of Technology",
      logo: require("./assets/images/mmmut.jpg"),
      subHeader: "Bachelor's of Technology in Computer Science and Engineering",
      duration: "July 2014 - July 2018",
      descBullets: [
        "CGPA: 8.58",
        "Curriclar and Extra-curricular activities",
        "3 Tech Internships",
        "1 Research Paper",
        "Lead at Entrepreneurship Cell",
        "Part of University Hockey Team",
        "Member of Nation Service Scheme",
        "Multiple Personal Projects",
        "Won various competitions"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend",  //Insert stack or technology you have experience in
      progressPercentage: "70%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer",
      company: "Reliance Jio",
      companylogo: require("./assets/images/jio.png"),
      date: "May 2020 – Present",
	  descBullets: [
        "Developed API in Spring Boot for Placing order and order return modules",
        "Worked on developing 2nd level caching with Aerospike database.",
		"Implemented Kafka for microservice communication and Redis as first level cache"
      ]
    },
    {
      role: "Software Development Engineer in Test",
      company: "Coviam",
      companylogo: require("./assets/images/coviam.jpg"),
      date: "April 2019 – May 2020",
      descBullets: [
		  "Improving existing code base based on new requirement",
		  "Developing espresso tool for mobile application testing",
		  "Contributed in implementing payment gateway for offline and online payments and manual testing"
	  ]
    },
    {
      role: "Software Development Engineer in Test",
      company: "Rivigo",
      companylogo: require("./assets/images/rivigo.png"),
      date: "June 2018 – April 2019",
	  descBullets: [
		  "Developed and designed pricing engine as part of finance team for partner companies based on the number of rounds of the truck, fuel utilized and other factors",
		  "Written API in Spring Boot to generate PDFs based on the fields and customization requested",
		  "Worked on building an automation model from scratch for backend API using REST Assured"
	  ]
    },
	{
      role: "Software Development Intern",
      company: "NDMC",
      companylogo: require("./assets/images/ndmc.png"),
      date: "May 2017 – December 2017",
	  descBullets: [
	      "New Delhi Muncipal Council",
		  "Worked on task allocation engine which divide task equally based on location, shifts, gender and other parameters",
		  "Contributed in Android application NDMC 311 for complaints tracking and customer support feature with more than 8000,000",
		  "Integrated secure payment and refund functionality"
	  ]
    },
	{
      role: "Software Intern",
      company: "TCS",
      companylogo: require("./assets/images/tcs.png"),
      date: "April 2017 – May 2017",
	  descBullets: [
      "Developed a web app",
      "Website to provide students to sell and buy used items within college campus"
	  ]
    },
	{
      role: "Software Remote Intern",
      company: "Deevesoft",
      companylogo: require("./assets/images/deevesoft.png"),
      date: "Februay 2017",
	  descBullets: [
		  "Android health app to help patient to contact with doctor any time with personalized chat and news feed for regular health updates. Use of FitBit API to help patient find their health related necessary details any time."
	  ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Live Projects",
  projects: [
    {
      image: require("./assets/images/myclg.webp"),
      link: "https://goo.gl/2uyUwc"
    },
    {
      image: require("./assets/images/sankalp.webp"),
      link: "http://ec2-65-0-51-0.ap-south-1.compute.amazonaws.com/index"
    }
  ]
};


const podcastSection = {
  title: emoji("YouTube Channel 👩‍🏫"),
  subtitle: "Sharing my knowledge ",

  // Please Provide with Your Podcast embeded Link
  link: "https://www.youtube.com/channel/UCoRKkeZWGUd7YFF2-IlwvMA",
  podcast: []
};
// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements 🏆 "),
  subtitle: "Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "107th Rank in TCS Codevita 2016",
      subtitle: "30k+ participants",
      image: require("./assets/images/codevita.png"),
      footerLink: [{ name: "Certificate", url: "https://drive.google.com/file/d/12mye7d_bk2KMxgitYwmlTq5LPDniuvt3/view?usp=sharing" }]
    },
    {
      title: "Sankalp 95 (NGO)",
      subtitle: "Created their website and participated in social causes",
      image: require("./assets/images/sankalp.webp"),
      footerLink: [{ name: "Certificate", url: "https://drive.google.com/file/d/1Cyx77-8Yf0WnNsvTKRgbTP-XCZaLRXcO/view?usp=sharing" }]
    }
  ]
};

// Blogs Section
const blogSection = {

  title: "Research Paper",

  blogs: [
    {
      url: "http://www.tjprc.org/journals/international-journal-of-computer-networking-wireless-and-mobile-communications23",
      title: "Optimization Clustering approach for energy efficiency in wireless network",
      description: "International Journal of Computer Networking, Wireless and Mobile Communications (IJCNWMC)"
    }
  ]
};
// Podcast Section


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "sakshipooja21@gmail.com"
};


export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, podcastSection, contactInfo };
