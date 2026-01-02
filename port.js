// Mobile menu toggle
document.querySelector(".mobile-menu").addEventListener("click", function () {
	const navLinks = document.querySelector(".nav-links");
	navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// ==================== RUSSIAN TRANSLATION ====================
// Translation dictionary
const translations = {
	en: {
		// Navigation
		nav_home: "Home",
		nav_projects: "Projects",
		nav_skills: "Skills",
		nav_certificates: "Certificates",
		nav_motivation: "Motivation",
		nav_gallery: "Gallery",
		nav_contact: "Contact",

		// Gallery
		gallery_title: "Gallery",
		gallery_subtitle:
			"Moments from Русский Дом events, workshops, competitions and cultural activities",
		filter_all: "All Events",
		filter_russian_house: "Русский Дом",
		filter_competitions: "Competitions",
		filter_semi: "semi mararthon",

		// Hero section
		hero_title: "Skander Larbi",
		hero_subtitle:
			"Future Computer Science Student | Aspiring Russian University Applicant",
		hero_description:
			"Tunisian high school graduate specializing in computer science with 15+ professional certifications. Passionate about technology and Russian culture, applying to top Russian universities for Bachelor's in Computer Science.",
		btn_view_projects: "View My Projects",
		btn_contact_me: "Contact Me",

		// Universities
		universities_title: "Target Russian Universities",
		choice_1: "#1 Choice",
		choice_2: "#2 Choice",
		choice_3: "#3 Choice",
		itmo_desc:
			"Saint Petersburg | World leader in computer science and photonics",
		itmo_program: "Bachelor in Computer Science",
		hse_desc: "Moscow | Top social sciences & computer science university",
		hse_program: "Data Science and Business Analytics",
		spbu_desc: "Saint Petersburg | One of Russia's oldest and most prestigious",
		spbu_program: "Applied Mathematics and Computer Science",
		mipt_desc: "Moscow | Leading physics and technology research center",
		mipt_program: "Computer Science and Engineering",
		kfu_desc: "Kazan | Top university in Volga region",
		kfu_program: "Software Engineering",
		knrtu_desc: "Kazan | Specialized in technology and innovation",
		knrtu_program: "Information Systems and Technologies",
		program_label: "Program:",

		// Projects
		projects_title: "My Projects",
		project1_title: "Number System Converter",
		project1_desc:
			"A web application that converts between binary, octal, decimal, and hexadecimal number systems with real-time updates and validation.",
		project2_title: "Study Hub",
		project2_desc:
			"Educational web application featuring top 3 revision websites for school exams with organized resources, progress tracking, and study tools.",
		project3_title: "Chatfuel Chatbot Project",
		project3_desc:
			"Lead generation chatbot created during Coursera certification, demonstrating automation and AI integration skills.",
		live_demo: "Live Demo",
		github: "GitHub",
		view_certificate: "View Certificate",

		// Skills
		skills_title: "Technical Skills",
		programming: "Programming",
		tools_platforms: "Tools & Platforms",
		languages_sec: "Languages",

		// Certificates
		certificates_title: "Certifications & Achievements",
		coursera_certs: "Coursera Certificates",
		coursera_desc: "Python, Game Development, SEO, Chatbots, 3D Modeling",
		uniathena_certs: "uniathena Certificates",
		uniathena_desc: "Python Basics",
		uniathena_link: "certification link",
		russian_house: "Русский Дом Events",
		russian_house_desc: "Russian culture workshops and round tables",
		national_comps: "National Competitions",
		national_comps_desc: "Technological projects & IT competitions",
		gomycode: "GoMyCode Workshops",
		gomycode_desc: "Python, Soft Skills & Marketing",
		recommendation: "Recommendation Letter",
		recommendation_desc:
			"From President of Tunisian Association of Russian Language Teachers",

		// Motivation
		motivation_title: "My Motivation",
		motivation_p1:
			"I am passionate about computer science because it represents the future of innovation and problem-solving. The ability to create solutions that can impact millions of people drives my interest in this field.",
		motivation_quote:
			'"I chose Russia for my higher education because of its world-renowned technical universities, strong mathematical foundation in education, and unique approach to computer science that combines theoretical depth with practical application."',
		motivation_p2:
			"Russia’s education system has a long-standing tradition of excellence in producing world-class programmers and scientists. I am particularly drawn to the Russian approach to algorithm development and system design. My goal is to contribute to the field of artificial intelligence and software engineering by creating innovative solutions to global challenges.",
		motivation_p3:
			"My experience with Russian culture through Русский Дом events and my Russian language studies have further solidified my decision to pursue my education in Russia. I believe that studying in Russia will not only provide me with excellent technical skills but also a unique cultural perspective that will shape me into a globally-minded professional.",
		//gallery
		gallery_event0_title: "semi-marathon comar",
		gallery_event0_desc: "Tunis | November 2025",
		gallery_event1_title:
			"Storyboarding Workshop: Learning Russian Through Creativity and Creation",
		gallery_event1_desc: "Русский Дом Tunis | January 2025",
		gallery_event2_title:
			"Russian-Tunisian Educational Exchange: Robotics Workshops for Students in Manouba",
		gallery_event2_desc: "Русский Дом Tunis | November 2024",
		gallery_event3_title:
			"When Chekhov Met Doulagi: A Tunisian-Russian Literary Dialogue in Sousse",
		gallery_event3_desc: "Русский Дом Tunis | May 2025",
		gallery_event4_title:
			"Information Day: Russian Government Scholarship Opportunities for Tunisian Students",
		gallery_event4_desc: "Русский Дом Tunis | November 2025",
		gallery_event5_title:
			"Strengthening Russian Language Education in Tunisia: A New Partnership Between the Tunisian Association of Russian Teachers and ISSH Tunis",
		gallery_event5_desc: "Русский Дом Tunis | October 2025",
		gallery_event6_title:
			"Technological Projects Competition – National Robotics Contest at the Maghreb Youth Complex, Radès",
		gallery_event6_desc: "Maghreb Youth Complex, Radès | May 2024",

		// Contact
		contact_title: "Contact Information",
		get_in_touch: "Get In Touch",
		quick_message: "Quick Message",
		your_name: "Your Name",
		your_email: "Your Email",
		your_message: "Your Message",
		send_message: "Send Message",
		education_label: "Education",
		education_text: "Secondary School Diploma in Computer Science",
		email_label: "Email",
		phone_label: "Phone",
		location_label: "Location",

		// Footer
		footer_copyright: "© 2025 Skander Larbi. All rights reserved.",
		footer_portfolio: "Portfolio for Russian University Applications",
		footer_made_with:
			"Made with passion for computer science and Russian education",
	},

	ru: {
		// Navigation
		nav_home: "Главная",
		nav_projects: "Проекты",
		nav_skills: "Навыки",
		nav_certificates: "Сертификаты",
		nav_motivation: "Мотивация",
		nav_gallery: "Галерея",
		nav_contact: "Контакты",

		// Gallery
		gallery_title: "Галерея",
		gallery_subtitle:
			"Фотографии с мероприятий Русского Дома, мастер-классов, соревнований и культурных мероприятий",
		filter_all: "Все мероприятия",
		filter_russian_house: "Русский Дом",
		filter_competitions: "Соревнования",
		filter_semi: "полумарафон",

		// Hero section
		hero_title: "Скандер Ларби",
		hero_subtitle:
			"Будущий студент компьютерных наук | Абитуриент российских университетов",
		hero_description:
			"Выпускник тунисской средней школы, специализирующийся на компьютерных науках, с более чем 15 профессиональными сертификатами. Увлечён технологиями и русской культурой, подаёт заявки в ведущие российские университеты на бакалавриат по компьютерным наукам.",
		btn_view_projects: "Посмотреть проекты",
		btn_contact_me: "Связаться со мной",

		// Universities
		universities_title: "Целевые российские университеты",
		choice_1: "Выбор №1",
		choice_2: "Выбор №2",
		choice_3: "Выбор №3",
		itmo_desc:
			"Санкт-Петербург | Мировой лидер в области компьютерных наук и фотоники",
		itmo_program: "Бакалавр компьютерных наук",
		hse_desc: "Москва | Ведущий университет социальных и компьютерных наук",
		hse_program: "Наука о данных и бизнес-аналитика",
		spbu_desc:
			"Санкт-Петербург | Один из старейших и самых престижных университетов России",
		spbu_program: "Прикладная математика и компьютерные науки",
		mipt_desc:
			"Москва | Ведущий центр исследований в области физики и технологий",
		mipt_program: "Компьютерные науки и инженерия",
		kfu_desc: "Казань | Лучший университет Поволжского региона",
		kfu_program: "Программная инженерия",
		knrtu_desc: "Казань | Специализируется на технологиях и инновациях",
		knrtu_program: "Информационные системы и технологии",
		program_label: "Программа:",

		// Projects
		projects_title: "Мои проекты",
		project1_title: "Конвертер систем счисления",
		project1_desc:
			"Веб-приложение для преобразования между двоичной, восьмеричной, десятичной и шестнадцатеричной системами счисления с обновлением в реальном времени и проверкой.",
		project2_title: "Учебный центр",
		project2_desc:
			"Образовательное веб-приложение с тремя лучшими сайтами для подготовки к школьным экзаменам, организованными ресурсами, отслеживанием прогресса и учебными инструментами.",
		project3_title: "Проект чат-бота Chatfuel",
		project3_desc:
			"Чат-бот для генерации лидов, созданный во время сертификации Coursera, демонстрирующий навыки автоматизации и интеграции ИИ.",
		live_demo: "Живое демо",
		github: "GitHub",
		view_certificate: "Посмотреть сертификат",

		// Skills
		skills_title: "Технические навыки",
		programming: "Программирование",
		tools_platforms: "Инструменты и платформы",
		languages_sec: "Языки",

		// Certificates
		certificates_title: "Сертификаты и достижения",
		coursera_certs: "Сертификаты Coursera",
		coursera_desc: "Python, разработка игр, SEO, чат-боты, 3D-моделирование",
		uniathena_certs: "Сертификаты uniathena",
		uniathena_desc: "Основы Python",
		uniathena_link: "ссылка на сертификат",
		russian_house: "Мероприятия Русского Дома",
		russian_house_desc: "Мастер-классы и круглые столы по русской культуре",
		national_comps: "Национальные конкурсы",
		national_comps_desc: "Технологические проекты и IT-соревнования",
		gomycode: "Мастер-классы GoMyCode",
		gomycode_desc: "Python, гибкие навыки и маркетинг",
		recommendation: "Рекомендательное письмо",
		recommendation_desc:
			"От президента Тунисской ассоциации преподавателей русского языка и литературы",

		// Motivation
		motivation_title: "Моя мотивация",
		motivation_p1:
			"Я увлечён компьютерными науками, потому что они представляют будущее инноваций и решения проблем. Возможность создавать решения, которые могут повлиять на миллионы людей, стимулирует мой интерес к этой области.",
		motivation_quote:
			'"Я выбрал Россию для своего высшего образования из-за её всемирно известных технических университетов, сильной математической базы в образовании и уникального подхода к компьютерным наукам, который сочетает теоретическую глубину с практическим применением."',
		motivation_p2:
			"Система образования России имеет многолетнюю традицию высокого уровня подготовки программистов и учёных мирового класса, меня особенно привлекает российский подход к разработке алгоритмов и проектированию сложных систем, а моей целью является внесение вклада в развитие искусственного интеллекта и программной инженерии путём создания инновационных решений для глобальных задач.",
		motivation_p3:
			"Мой опыт знакомства с русской культурой через мероприятия Русского Дома и изучение русского языка укрепили моё решение получить образование в России. Я считаю, что учёба в России не только даст мне отличные технические навыки, но и уникальную культурную перспективу, которая сформирует меня как профессионала с глобальным мышлением.",
		//gallery
		gallery_event0_title: "полумарафон COMAR",
		gallery_event0_desc: "Тунис | Ноябрь 2025",
		gallery_event1_title:
			"Мастерская раскадровки: изучение русского языка через творчество и созидание",
		gallery_event1_desc: "Русский Дом Тунис | Январь 2025",
		gallery_event2_title:
			"Российско-тунисский образовательный обмен: мастер-классы по робототехнике для учащихся в Манубе",
		gallery_event2_desc: "Русский Дом Тунис | Ноябрь 2024",
		gallery_event3_title:
			"Когда Чехов встретил Дулаги: тунисско-российский литературный диалог в Сусе",
		gallery_event3_desc: "Русский Дом Тунис | Май 2025",
		gallery_event4_title:
			"День информации: возможности получения стипендий правительства России для тунисских студентов",
		gallery_event4_desc: "Русский Дом Тунис | Ноябрь 2025",
		gallery_event5_title:
			"Укрепление преподавания русского языка в Тунисе: новое партнерство между Тунисской ассоциацией преподавателей русского языка и ISSH Тунис",
		gallery_event5_desc: "Русский Дом Тунис | Октябрь 2025",
		gallery_event6_title:
			"Конкурс технологических проектов – Национальный конкурс робототехники в Молодежном комплексе Магриба, Радес",
		gallery_event6_desc: "Молодежный комплекс Магриба, Радес | Май 2024",
		// Contact
		contact_title: "Контактная информация",
		get_in_touch: "Связаться",
		quick_message: "Быстрое сообщение",
		your_name: "Ваше имя",
		your_email: "Ваш email",
		your_message: "Ваше сообщение",
		send_message: "Отправить сообщение",
		education_label: "Образование",
		education_text: "Аттестат средней школы по компьютерным наукам",
		email_label: "Эл. почта",
		phone_label: "Телефон",
		location_label: "Местоположение",

		// Footer
		footer_copyright: "© 2025 Скандер Ларби. Все права защищены.",
		footer_portfolio: "Портфолио для поступления в российские университеты",
		footer_made_with:
			"Сделано с любовью к компьютерным наукам и российскому образованию",
	},
};

// Language switcher with actual translation
document.querySelectorAll(".lang-btn").forEach((btn) => {
	btn.addEventListener("click", function () {
		const lang = this.textContent === "RU" ? "ru" : "en";

		// Update active button
		document
			.querySelectorAll(".lang-btn")
			.forEach((b) => b.classList.remove("active"));
		this.classList.add("active");

		// Update page title
		document.title =
			lang === "ru"
				? "Скандер Ларби | Портфолио для российских университетов"
				: "Skander Larbi | Portfolio for Russian Universities";

		// Apply translations
		applyTranslation(lang);

		// Save language preference
		localStorage.setItem("preferredLang", lang);
	});
});

// Function to apply translations
function applyTranslation(lang) {
	const dict = translations[lang];
	if (!dict) return;

	// Navigation
	document.querySelectorAll(".nav-links a").forEach((link, index) => {
		const keys = [
			"nav_home",
			"nav_projects",
			"nav_skills",
			"nav_certificates",
			"nav_motivation",
			"nav_gallery",
			"nav_contact",
		];
		if (dict[keys[index]]) link.textContent = dict[keys[index]];
	});

	// Gallery translations
	translateElement("#gallery .section-title", "gallery_title", dict);
	translateElement("#gallery .section-subtitle", "gallery_subtitle", dict);

	// Filter buttons
	document.querySelectorAll(".filter-btn").forEach((btn, index) => {
		const keys = ["filter_all", "filter_russian_house", "filter_competitions"];
		if (dict[keys[index]]) btn.textContent = dict[keys[index]];
	});

	// Hero section
	translateElement(".hero h1", "hero_title", dict);
	translateElement(".hero-subtitle", "hero_subtitle", dict);
	translateElement(".hero p", "hero_description", dict);
	translateElement(".btn-primary", "btn_view_projects", dict);
	translateElement(".btn-secondary", "btn_contact_me", dict);

	// Projects
	translateElement("#projects .section-title", "projects_title", dict);
	translateElement(".project-card:nth-child(1) h3", "project1_title", dict);
	translateElement(".project-card:nth-child(1) p", "project1_desc", dict);
	translateElement(".project-card:nth-child(2) h3", "project2_title", dict);
	translateElement(".project-card:nth-child(2) p", "project2_desc", dict);
	translateElement(".project-card:nth-child(3) h3", "project3_title", dict);
	translateElement(".project-card:nth-child(3) p", "project3_desc", dict);

	// Project links
	document.querySelectorAll(".project-link").forEach((link) => {
		const text = link.textContent;
		if (text.includes("Live Demo")) {
			translateElementText(link, "live_demo", dict);
		} else if (text.includes("GitHub")) {
			translateElementText(link, "github", dict);
		} else if (text.includes("View Certificate")) {
			translateElementText(link, "view_certificate", dict);
		} else if (
			text.includes("Живое демо") ||
			text.includes("Посмотреть сертификат")
		) {
			// Handle already translated text
			if (text.includes("демо")) link.textContent = "Живое демо";
			if (text.includes("сертификат"))
				link.textContent = "Посмотреть сертификат";
		}
	});

	// Skills
	translateElement("#skills .section-title", "skills_title", dict);
	translateElement(".skill-category:nth-child(1) h3", "programming", dict);
	translateElement(".skill-category:nth-child(2) h3", "tools_platforms", dict);
	translateElement(".skill-category:nth-child(3) h3", "languages_sec", dict);

	// Certificates
	translateElement("#certificates .section-title", "certificates_title", dict);
	translateElement(".certificate-card:nth-child(1) h3", "coursera_certs", dict);
	translateElement(".certificate-card:nth-child(1) p", "coursera_desc", dict);
	translateElement(
		".certificate-card:nth-child(2) h3",
		"uniathena_certs",
		dict
	);
	translateElement(".certificate-card:nth-child(2) p", "uniathena_desc", dict);
	translateElement(".certificate-card:nth-child(2) a", "uniathena_link", dict);
	translateElement(".certificate-card:nth-child(3) h3", "russian_house", dict);
	translateElement(
		".certificate-card:nth-child(3) p",
		"russian_house_desc",
		dict
	);
	translateElement(".certificate-card:nth-child(4) h3", "national_comps", dict);
	translateElement(
		".certificate-card:nth-child(4) p",
		"national_comps_desc",
		dict
	);
	translateElement(".certificate-card:nth-child(5) h3", "gomycode", dict);
	translateElement(".certificate-card:nth-child(5) p", "gomycode_desc", dict);
	translateElement(".certificate-card:nth-child(6) h3", "recommendation", dict);
	translateElement(
		".certificate-card:nth-child(6) p",
		"recommendation_desc",
		dict
	);

	// Motivation
	translateElement("#motivation .section-title", "motivation_title", dict);
	translateElement(".motivation-content p:nth-child(1)", "motivation_p1", dict);
	translateElement(".quote", "motivation_quote", dict);
	translateElement(".motivation-content p:nth-child(3)", "motivation_p2", dict);
	translateElement(".motivation-content p:nth-child(4)", "motivation_p3", dict);

	// Contact
	translateElement("#contact .section-title", "contact_title", dict);
	translateElement(".contact-info h3", "get_in_touch", dict);
	translateElement(".contact-form h3", "quick_message", dict);

	// Contact items
	document.querySelectorAll(".contact-item strong").forEach((strong, index) => {
		const keys = [
			"email_label",
			"phone_label",
			"location_label",
			"education_label",
		];
		if (dict[keys[index]]) strong.textContent = dict[keys[index]];
	});

	translateElement(".contact-item:nth-child(4) p", "education_text", dict);
	translateElement('button[type="submit"]', "send_message", dict);

	// Form placeholders
	document.querySelectorAll("input[placeholder]").forEach((input) => {
		const placeholder = input.placeholder;
		if (placeholder.includes("Your Name") || placeholder.includes("Ваше имя")) {
			input.placeholder = dict["your_name"];
		} else if (
			placeholder.includes("Your Email") ||
			placeholder.includes("Ваш email")
		) {
			input.placeholder = dict["your_email"];
		}
	});

	document.querySelectorAll("textarea[placeholder]").forEach((textarea) => {
		if (
			textarea.placeholder.includes("Your Message") ||
			textarea.placeholder.includes("Ваше сообщение")
		) {
			textarea.placeholder = dict["your_message"];
		}
	});

	// Footer
	translateElement("footer p:nth-child(1)", "footer_copyright", dict);
	translateElement("footer p:nth-child(2)", "footer_portfolio", dict);
	translateElement("footer p:nth-child(3)", "footer_made_with", dict);
	document.querySelectorAll("[data-translate]").forEach((element) => {
		const key = element.getAttribute("data-translate");
		if (dict[key]) element.textContent = dict[key];
	});
}

// Helper functions
function translateElement(selector, key, dict) {
	const el = document.querySelector(selector);
	if (el && dict[key]) {
		el.textContent = dict[key];
	}
}

function translateElementText(element, key, dict) {
	if (element && dict[key]) {
		const icon = element.querySelector("i");
		if (icon) {
			element.innerHTML = icon.outerHTML + " " + dict[key];
		} else {
			element.textContent = dict[key];
		}
	}
}

// Load saved language preference on page load
window.addEventListener("DOMContentLoaded", () => {
	const savedLang = localStorage.getItem("preferredLang") || "en";

	// Set active button
	document.querySelectorAll(".lang-btn").forEach((btn) => {
		btn.classList.remove("active");
		if (
			(savedLang === "ru" && btn.textContent === "RU") ||
			(savedLang === "en" && btn.textContent === "EN")
		) {
			btn.classList.add("active");
		}
	});

	// Apply translation
	applyTranslation(savedLang);

	// Update title
	document.title =
		savedLang === "ru"
			? "Скандер Ларби | Портфолио для российских университетов"
			: "Skander Larbi | Portfolio for Russian Universities";
});
// ==================== END TRANSLATION ====================

// Animate on scroll
const animateElements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");

				// Animate skill bars
				if (entry.target.classList.contains("skill-progress")) {
					const width = entry.target.getAttribute("data-width");
					entry.target.style.width = width + "%";
				}
			}
		});
	},
	{ threshold: 0.1 }
);

animateElements.forEach((el) => observer.observe(el));

// Animate skill bars separately
const skillBars = document.querySelectorAll(".skill-progress");
skillBars.forEach((bar) => {
	observer.observe(bar);
});

// Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
	e.preventDefault();
	alert("Thank you for your message! I will respond as soon as possible.");
	this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		const targetId = this.getAttribute("href");
		if (targetId === "#") return;

		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop - 80,
				behavior: "smooth",
			});

			// Close mobile menu if open
			if (window.innerWidth <= 768) {
				document.querySelector(".nav-links").style.display = "none";
			}
		}
	});
});

// Initialize skill bars with animation
window.addEventListener("load", function () {
	// Trigger animation for elements already in view
	animateElements.forEach((el) => {
		const rect = el.getBoundingClientRect();
		if (rect.top < window.innerHeight && rect.bottom >= 0) {
			el.classList.add("visible");

			if (el.classList.contains("skill-progress")) {
				const width = el.getAttribute("data-width");
				el.style.width = width + "%";
			}
		}
	});
});

// Gallery functionality
const galleryItems = document.querySelectorAll(".gallery-item");
const filterButtons = document.querySelectorAll(".filter-btn");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeLightbox = document.querySelector(".close-lightbox");
const prevBtn = document.querySelector(".lightbox-nav.prev");
const nextBtn = document.querySelector(".lightbox-nav.next");

let currentImageIndex = 0;
let filteredItems = Array.from(galleryItems);

// Filter functionality
filterButtons.forEach((button) => {
	button.addEventListener("click", () => {
		// Update active button
		filterButtons.forEach((btn) => btn.classList.remove("active"));
		button.classList.add("active");

		const filter = button.getAttribute("data-filter");

		// Filter items
		galleryItems.forEach((item) => {
			if (filter === "all" || item.getAttribute("data-category") === filter) {
				item.style.display = "block";
				setTimeout(() => {
					item.style.opacity = "1";
					item.style.transform = "scale(1)";
				}, 10);
			} else {
				item.style.opacity = "0";
				item.style.transform = "scale(0.8)";
				setTimeout(() => {
					item.style.display = "none";
				}, 300);
			}
		});
	});
});

// Lightbox functionality
galleryItems.forEach((item, index) => {
	item.addEventListener("click", () => {
		const imgSrc = item.querySelector("img").src;
		const caption = item.querySelector("h4").textContent;
		const description = item.querySelector("p").textContent;

		filteredItems = Array.from(
			document.querySelectorAll(
				'.gallery-item[style*="display: block"], .gallery-item[style*="display:block"]'
			)
		);
		const currentFilteredIndex = filteredItems.indexOf(item);
		currentImageIndex = currentFilteredIndex;

		lightboxImg.src = imgSrc;
		lightboxCaption.innerHTML = `<h3>${caption}</h3><p>${description}</p>`;
		lightbox.style.display = "flex";
		document.body.style.overflow = "hidden";
	});
});

// Close lightbox
closeLightbox.addEventListener("click", () => {
	lightbox.style.display = "none";
	document.body.style.overflow = "auto";
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
	if (e.target === lightbox) {
		lightbox.style.display = "none";
		document.body.style.overflow = "auto";
	}
});

// Navigation in lightbox
prevBtn.addEventListener("click", () => {
	currentImageIndex =
		(currentImageIndex - 1 + filteredItems.length) % filteredItems.length;
	updateLightbox();
});

nextBtn.addEventListener("click", () => {
	currentImageIndex = (currentImageIndex + 1) % filteredItems.length;
	updateLightbox();
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
	if (lightbox.style.display === "flex") {
		if (e.key === "Escape") {
			lightbox.style.display = "none";
			document.body.style.overflow = "auto";
		} else if (e.key === "ArrowLeft") {
			currentImageIndex =
				(currentImageIndex - 1 + filteredItems.length) % filteredItems.length;
			updateLightbox();
		} else if (e.key === "ArrowRight") {
			currentImageIndex = (currentImageIndex + 1) % filteredItems.length;
			updateLightbox();
		}
	}
});

function updateLightbox() {
	const currentItem = filteredItems[currentImageIndex];
	const imgSrc = currentItem.querySelector("img").src;
	const caption = currentItem.querySelector("h4").textContent;
	const description = currentItem.querySelector("p").textContent;

	lightboxImg.src = imgSrc;
	lightboxCaption.innerHTML = `<h3>${caption}</h3><p>${description}</p>`;
}

// Make sure gallery is visible on page load
window.addEventListener("load", () => {
	// Ensure gallery section is properly displayed
	const gallerySection = document.getElementById("gallery");
	if (gallerySection) {
		gallerySection.style.display = "block";
	}
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
	const navLinks = document.querySelector(".nav-links");
	const mobileMenu = document.querySelector(".mobile-menu");

	if (
		window.innerWidth <= 768 &&
		navLinks.style.display === "flex" &&
		!e.target.closest(".nav-links") &&
		!e.target.closest(".mobile-menu")
	) {
		navLinks.style.display = "none";
	}
});

// Responsive navigation on window resize
window.addEventListener("resize", () => {
	const navLinks = document.querySelector(".nav-links");
	if (window.innerWidth > 768) {
		navLinks.style.display = "flex";
	} else {
		navLinks.style.display = "none";
	}
});
function badel() {
	document.getElementById("semi").innerHTML = "полумарафон";
}
function badel2() {
	document.getElementById("semi").innerHTML = "semi marathon";
}
