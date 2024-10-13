const aboutSection = document.getElementById('about');
const contents = aboutSection.querySelectorAll('.content');

function activateAnimations() {
    contents.forEach(content => {
        const rect = content.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            content.style.opacity = '1';
            content.style.animation = 'elevate 2s forwards, slideIn 2s forwards';
        } else {
            content.style.opacity = '0';
            content.style.animation = 'none';
        }
    });
}

window.addEventListener('scroll', activateAnimations);
activateAnimations();

const whyChooseSection = document.getElementById('whyChoose');
const cards = whyChooseSection.querySelectorAll('li');

function activateWhyChooseAnimations() {
    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            card.style.opacity = '1';

            if (index % 2 === 0) {
                card.style.animation = 'itemSlideInFromLeft 2.5s ease-out forwards';
            } else {
                card.style.animation = 'itemSlideInFromRight 2.5s ease-out forwards';
            }
        } else {
            card.style.opacity = '0';
            card.style.animation = 'none';
        }
    });
}

window.addEventListener('scroll', activateWhyChooseAnimations);
activateWhyChooseAnimations(); 

const workSection = document.getElementById('work');
const workItems = workSection.querySelectorAll('li');

function activateWorkAnimations() {
    workItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            item.style.opacity = '1';
            item.style.animation = (index % 2 === 0) 
                ? 'itemSlideInFromLeft 2.5s ease-out forwards' 
                : 'itemSlideInFromRight 2.5s ease-out forwards';
        } else {
            item.style.opacity = '0';
            item.style.animation = 'none';
        }
    });
}

window.addEventListener('scroll', activateWorkAnimations);
activateWorkAnimations();

const deliverySection = document.getElementById('delivery');
const deliveryItems = deliverySection.querySelectorAll('li');

function activatedeliveryAnimations() {
    deliveryItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            item.style.opacity = '1';
            item.style.animation = (index % 2 === 0) 
                ? 'itemSlideInFromLeft 2.5s ease-out forwards' 
                : 'itemSlideInFromRight 2.5s ease-out forwards';
        } else {
            item.style.opacity = '0';
            item.style.animation = 'none';
        }
    });
}

window.addEventListener('scroll', activatedeliveryAnimations);
activatedeliveryAnimations();

const toolsSection = document.getElementById('tools');
const toolItems = toolsSection.querySelectorAll('li');

function activateToolAnimations() {
    toolItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            item.style.opacity = '1';
            item.style.animation = `slideInFromLeft 1.2s ease-out forwards`;
            item.style.animationDelay = `${index * 0.2}s`;
        } else {
            item.style.opacity = '0';
            item.style.animation = 'none';
        }
    });
}

window.addEventListener('scroll', activateToolAnimations);
activateToolAnimations();

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('#tools li');
    listItems.forEach((item, index) => {
        item.style.setProperty('--animation-delay', `${index * 0.5}s`);
        item.style.opacity = 1;
    });
});

function updateTitle() {
    const titleElement = document.getElementById('title');
    if (window.innerWidth < 1024) {
        titleElement.innerHTML = "Paulo Mariano<br>Web Developer";
    } else {
        titleElement.innerHTML = "Paulo Mariano || Web Developer";
    }
}

window.addEventListener('resize', updateTitle);
window.addEventListener('load', updateTitle);