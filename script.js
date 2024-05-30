document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menuContainer = document.getElementById('menu-container');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    menuIcon.addEventListener('click', () => {
        menuContainer.classList.toggle('active');
    });

    // Set active link based on current URL
    const currentPath = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Initialize slider
    const initSlider = () => {
        const imageList = document.querySelector('.image-list');
        const slideBtns = document.querySelectorAll('.slide-button');

        slideBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const dir = btn.id === 'prev-slide' ? -1 : 1;
                const scrollAmount = imageList.clientWidth * dir;
                imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        });
    };

    window.addEventListener('load', initSlider);

    const data = [
        {
            "id": "1",
            "label": "Module 1: Foundation of Ethical Hacking Using Artificial Intelligence (AI)",
            "sublabel": ["1.1 Introduction to Ethical Hacking", "1.2 Ethical Hacking Methodology", "1.3 Legal and Regulatory Framework", "1.4 Hacker Types and Motivations", "1.5 Information Gathering Techniques", "1.6 Footprinting and Reconnaissance", "1.7 Scanning Networks", "1.8 Enumeration Techniques"]
        },
        {
            "id": "2",
            "label": "Module 2: Introduction to AI in Ethical Hacking",
            "sublabel": ["1.1 Introduction to Ethical Hacking", "1.2 Ethical Hacking Methodology", "1.3 Legal and Regulatory Framework", "1.4 Hacker Types and Motivations", "1.5 Information Gathering Techniques", "1.6 Footprinting and Reconnaissance", "1.7 Scanning Networks", "1.8 Enumeration Techniques"]
        },
        {
            "id": "3",
            "label": "Module 3: AI Tools and Technologies in Ethical Hacking",
            "sublabel": ["1.1 Introduction to Ethical Hacking", "1.2 Ethical Hacking Methodology", "1.3 Legal and Regulatory Framework", "1.4 Hacker Types and Motivations", "1.5 Information Gathering Techniques", "1.6 Footprinting and Reconnaissance", "1.7 Scanning Networks", "1.8 Enumeration Techniques"]
        },
        {
            "id": "4",
            "label": "Module 4: AI-Driven Reconnaissance Techniques",
            "sublabel": ["1.1 Introduction to Ethical Hacking", "1.2 Ethical Hacking Methodology", "1.3 Legal and Regulatory Framework", "1.4 Hacker Types and Motivations", "1.5 Information Gathering Techniques", "1.6 Footprinting and Reconnaissance", "1.7 Scanning Networks", "1.8 Enumeration Techniques"]
        },
        {
            "id": "5",
            "label": "Module 5: AI in Vulnerability Assessment and Penetration Testing",
            "sublabel": ["1.1 Introduction to Ethical Hacking", "1.2 Ethical Hacking Methodology", "1.3 Legal and Regulatory Framework", "1.4 Hacker Types and Motivations", "1.5 Information Gathering Techniques", "1.6 Footprinting and Reconnaissance", "1.7 Scanning Networks", "1.8 Enumeration Techniques"]
        },
        {
            "id": "6",
            "label": "Module 6: Machine Learning for Threat Analysis",
            "sublabel": ["1.1 Introduction to Ethical Hacking", "1.2 Ethical Hacking Methodology", "1.3 Legal and Regulatory Framework", "1.4 Hacker Types and Motivations", "1.5 Information Gathering Techniques", "1.6 Footprinting and Reconnaissance", "1.7 Scanning Networks", "1.8 Enumeration Techniques"]
        },
        {
            "id": "7",
            "label": "Module 7: Behavioral Analysis and Anomaly Detection for System Hacking",
            "sublabel": ["1.1 Introduction to Ethical Hacking", "1.2 Ethical Hacking Methodology", "1.3 Legal and Regulatory Framework", "1.4 Hacker Types and Motivations", "1.5 Information Gathering Techniques", "1.6 Footprinting and Reconnaissance", "1.7 Scanning Networks", "1.8 Enumeration Techniques"]
        },
        {
            "id": "8",
            "label": "Module 8: AI Enabled Incident Response Systems",
            "sublabel": ["1.1 Introduction to Ethical Hacking", "1.2 Ethical Hacking Methodology", "1.3 Legal and Regulatory Framework", "1.4 Hacker Types and Motivations", "1.5 Information Gathering Techniques", "1.6 Footprinting and Reconnaissance", "1.7 Scanning Networks", "1.8 Enumeration Techniques"]
        },
        {
            "id": "9",
            "label": "Module 9: AI for Identity and Access Management (IAM)",
            "sublabel": ["1.1 Introduction to Ethical Hacking", "1.2 Ethical Hacking Methodology", "1.3 Legal and Regulatory Framework", "1.4 Hacker Types and Motivations", "1.5 Information Gathering Techniques", "1.6 Footprinting and Reconnaissance", "1.7 Scanning Networks", "1.8 Enumeration Techniques"]
        },
        {
            "id": "10",
            "label": "Module 10: Securing AI Systems",
            "sublabel": ["1.1 Introduction to Ethical Hacking", "1.2 Ethical Hacking Methodology", "1.3 Legal and Regulatory Framework", "1.4 Hacker Types and Motivations", "1.5 Information Gathering Techniques", "1.6 Footprinting and Reconnaissance", "1.7 Scanning Networks", "1.8 Enumeration Techniques"]
        },
        {
            "id": "11",
            "label": "Module 11: Ethics in AI and Cybersecurity",
            "sublabel": ["1.1 Introduction to Ethical Hacking", "1.2 Ethical Hacking Methodology", "1.3 Legal and Regulatory Framework", "1.4 Hacker Types and Motivations", "1.5 Information Gathering Techniques", "1.6 Footprinting and Reconnaissance", "1.7 Scanning Networks", "1.8 Enumeration Techniques"]
        },
        {
            "id": "12",
            "label": "Module 12: Capstone Project",
            "sublabel": ["1.1 Introduction to Ethical Hacking", "1.2 Ethical Hacking Methodology", "1.3 Legal and Regulatory Framework", "1.4 Hacker Types and Motivations", "1.5 Information Gathering Techniques", "1.6 Footprinting and Reconnaissance", "1.7 Scanning Networks", "1.8 Enumeration Techniques"]
        }
    ];

    const container = document.getElementById('accordion-container');

    data.forEach(module => {
        const button = document.createElement('button');
        button.className = 'accordion';
        button.innerText = `+ ${module.label}`;
        button.addEventListener('click', function () {
            // Check if the clicked panel is already open
            const panel = this.nextElementSibling;
            const isOpen = panel.style.display === 'block';

            // Close all panels
            const allPanels = document.querySelectorAll('.panel');
            const allButtons = document.querySelectorAll('.accordion');
            allPanels.forEach(panel => {
                panel.style.display = 'none';
            });
            allButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.innerText = `+ ${btn.innerText.slice(2)}`; // Reset button text
            });

            // Toggle the clicked panel
            if (!isOpen) {
                this.classList.add('active');
                this.innerText = `- ${this.innerText.slice(2)}`; // Change button text to minus
                panel.style.display = 'block';
            }
        });

        const panel = document.createElement('div');
        panel.className = 'panel';
        const ul = document.createElement('ul');
        module.sublabel.forEach(sublabel => {
            const li = document.createElement('li');
            li.className = "panel_text"
            li.innerText = sublabel;
            ul.appendChild(li);
        });
        panel.appendChild(ul);

        container.appendChild(button);
        container.appendChild(panel);
    });

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 60,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
 
});
