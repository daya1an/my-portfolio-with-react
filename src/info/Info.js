import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

// export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let colors =["rgb(255, 165, 0)", "rgb(0, 191, 255)"];

/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: " Dayalan",
    lastName: " D S ",
    initials: "DS", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://dayalan22102001.github.io/#/ for an example if you'd like
        {
            emoji: '📈',
            text: 'Embracing Change'
        },
        {
            emoji: '📍',
            text: 'Tamil Nadu, India'
        },
        {
            emoji: "💼",
            text: "Software Engineer at Ford"
        },
        {
            emoji: "📧",
            text: "dayalands2210@@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Dayalan. I'm a software engineer at FORD. I studied B.E. Information Science at KCT.A Strong problem-solver with a focus on collaboration in agile environments and a commitment to continuous learning to stay ahead of industry trends.",
    skills:
        {
            // proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            // exposedTo: ['nodejs', 'python', 'adobe illustrator'],
            programmingLangs: ['SQL', 'Java', 'Python', 'C/C++', 'JavaScript'],
            frameworksAndLibs:['Angular', 'React',  'Spring Boot'],
            cloud:['AWS', 'GCP', 'OpenShift', 'Cloud Foundry(PCF)'],
            cicd:['Tekton', 'Jenkins', 'Terraform']
        }
    ,
    hobbies: [
        {
            label: 'personal finance management',
            emoji: '📈'
        },
        // {
        //     label: 'theater',
        //     emoji: '🎭'
        // },
        {
            label: 'movies & series',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1: Automating Mails with Python",
            // live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            live: "#",
            source: "https://github.com/dayalan22102001", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2: Web Scrapping with Spring Boot",
            // live: "https://paytonpierce.dev",
            live: "#",
            source: "https://github.com/dayalan22102001",
            image: mock2
        },
        {
            title: "Project 3: Grocery Store Inventory Management System",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/dayalan22102001",
            image: mock3
        },
        {
            title: "Project 4: GPS based Blood Donor Finder",
            // live: "https://paytonpierce.dev",
            live: "#",
            source: "https://github.com/dayalan22102001",
            image: mock4
        },
        {
            title: "Project 5: Personal Finance Tracker",
            // live: "https://paytonpierce.dev",
            live: "#",
            source: "https://github.com/dayalan22102001",
            image: mock5
        }
    ]
}