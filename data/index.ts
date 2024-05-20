export const navItems = [
	{ name: 'About', link: '#about' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Testimonials', link: '#testimonials' },
	{ name: 'Contact', link: '#contact' },
];

export const gridItems = [
	{
		id: 1,
		title: 'I prioritize client collaboration, fostering open communication ',
		description: '',
		className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end',
		img: '/b1.svg',
		spareImg: '',
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '',
		spareImg: '',
	},
	{
		id: 3,
		title: 'My tech stack',
		description: 'I constantly try to improve',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '',
		spareImg: '',
	},
	{
		id: 4,
		title: 'Tech enthusiast with a passion for development.',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '/grid.svg',
		spareImg: '/b4.svg',
	},

	{
		id: 5,
		title: 'Currently building a Stock Market App',
		description: 'The Inside Scoop',
		className: 'md:col-span-3 md:row-span-2',
		imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
		titleClassName: 'justify-center md:justify-start lg:justify-center',
		img: '/b5.svg',
		spareImg: '/grid.svg',
	},
	{
		id: 6,
		title: 'Do you want to start a project together?',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
		img: '',
		spareImg: '',
	},
];

export const projects = [
	{
		id: 1,
		title: '3D Solar System Planets to Explore',
		des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
		img: '/p1.svg',
		iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
		link: '/ui.earth.com',
	},
	{
		id: 2,
		title: 'Yoom - Video Conferencing App',
		des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
		img: '/p2.svg',
		iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
		link: '/ui.yoom.com',
	},
	{
		id: 3,
		title: 'AI Image SaaS - Canva Application',
		des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
		img: '/p3.svg',
		iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
		link: '/ui.aiimg.com',
	},
	{
		id: 4,
		title: 'Animated Apple Iphone 3D Website',
		des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
		img: '/p4.svg',
		iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
		link: '/ui.apple.com',
	},
];

export const testimonials = [
	{
		quote:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: 'Wikus Cornelius',
		title: 'Software Team Leader at Liquid Automation Systems',
	},
];

export const companies = [
	{
		id: 1,
		name: 'SAAB',
		img: '/SAAB_Logo.png',
	},
	{
		id: 2,
		name: 'Liquid Automation Systems',
		img: '/LAS_Logo.png',
	},
	{
		id: 3,
		name: 'Omnigo',
		img: '/Omnigo_Logo.png',
	},
];

export const workExperience = [
	{
		id: 1,
		title: 'Software Engineer',
		company: 'SAAB',
		dateStart: new Date('2024-06-01'),
		dateEnd: new Date(),
		desc: 'Led the development of a Time-Tracking Web App using React, ASP.NET Core, and SQL Server. Reducing time spent on manual time tracking for employees.',
		className: 'md:col-span-2',
		thumbnail: '/exp1.svg',
	},
	{
		id: 2,
		title: 'Software Developer',
		company: 'LAS',
		dateStart: new Date('2023-04-01'),
		dateEnd: new Date('2024-05-31'),
		desc: 'Led the development of a Time-Tracking Web App using React, ASP.NET Core, and SQL Server. Reducing time spent on manual time tracking for employees.',
		className: 'md:col-span-2',
		thumbnail: '/exp1.svg',
	},
	{
		id: 3,
		title: 'Junior Software Developer',
		company: 'Omnigo',
		dateStart: new Date('2021-08-01'),
		dateEnd: new Date('2023-03-31'),
		desc: 'Developed a PCB Tracking Windows Application using WPF, C#, and SQL Server, allowing users to track PCBs through the manufacturing process, minimizing time, errors, and costs.',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp2.svg',
	},
	{
		id: 4,
		title: 'Robotics Engineer Intern',
		company: 'Omnigo',
		dateStart: new Date('2020-12-01'),
		dateEnd: new Date('2020-02-28'),
		desc: "Assisted in implementing autonomous robotic arms and designed prototype robotic grippers to improve efficiency and accuracy in Omnigo's manufacturing operations.",
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp3.svg',
	},
	{
		id: 5,
		company: 'Blast Management & Consulting',
		title: 'Embedded Internship',
		dateStart: new Date('2020-10-01'),
		dateEnd: new Date('2020-11-30'),
		desc: 'Developed a GPS/GNSS-based geo-fence security system for asset monitoring, using AT commands and C programming for reliable communication and integrating the SIM808 module for a cost-effective solution.',
		className: 'md:col-span-2',
		thumbnail: '/exp4.svg',
	},
];

export const socialMedia = [
	{
		id: 1,
		img: '/git.svg',
		link: 'https://github.com/darrenmlouw',
	},
	{
		id: 2,
		img: '/link.svg',
		link: 'https://www.linkedin.com/in/darrenlouw',
	},
];
