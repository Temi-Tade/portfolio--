const dyn_text = document.querySelector("#dynamic_text")
const skillsElement = document.querySelector("#skills")
const projectsElement = document.querySelector("#p_names") 
const imageElement = document.querySelector("#projects img")
const backToTop = document.querySelector('#to_top')

const messages = ['My name is Temi...', '...I am a front end web developer, I have a strong passion for knowing more about technology as I believe it is the future of humanity and i want to contribute to making the future safe and better for all...', '...I enjoy employing logic to solve problems and of course also being called a programmer ;)...', '...grab your popcorn, have your seats, strap yourself in... welcome to my world!']

const skills = {
	name: ["html", "css", "javascript", "python", "command line", ],
	level: [80, 75, 70, 40, 50,],
};

const projects = ["https://password-checker-ver.vercel.app/", "https://temi-tade.github.io/love_calculator/", "https://temi-tade.github.io/countdown-timer/"]

const projectNames = ["password checker", "love calculator", "countdown timer"]
						
const images = ["./assets/images/pass_check.png", "./assets/images/love_calc.png", "./assets/images/count_down.png"]

window.addEventListener('scroll', (e) => {
	if (document.body.getBoundingClientRect().y <= -25){
		backToTop.style.transform = 'scale(1)'
		backToTop.querySelector('button').onclick = () => {
			document.body.scrollIntoView()
		}
	}else{
		backToTop.style.transform = 'scale(0)'
	}
})

if (window.innerWidth < 600) {
	document.querySelector("#ham_btn").onclick = () => {
		document.querySelector("header nav").classList.toggle('open')
		document.querySelector("header #socials_nav").classList.toggle('open')
	}
}
