const aboutSection = document.getElementById('about') as HTMLElement;
const contents = aboutSection.querySelectorAll('.content') as NodeListOf<HTMLElement>;

function activateAnimations(): void {
    let triggerAnimation = false;

    contents.forEach(content => {
        const rect = content.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            triggerAnimation = true;
        }
    });

    if (triggerAnimation) {
        contents.forEach(content => {
            content.style.opacity = '1';
            content.style.animation = 'slideIn 2s forwards';
        });
    } else {
        contents.forEach(content => {
            content.style.opacity = '0';
            content.style.animation = 'none';
        });
    }
}

window.addEventListener('scroll', activateAnimations);
activateAnimations();

const whyChooseSection = document.getElementById('whyChoose') as HTMLElement;
const cards = whyChooseSection.querySelectorAll('li') as NodeListOf<HTMLElement>;
const imageContainer = document.querySelector('.image-container-icons') as HTMLElement;

function activateWhyChooseAnimations(): void {
    const isSmallScreen = window.innerWidth < 1024;

    if (isSmallScreen) {
        if (imageContainer) {
            const rectImage = imageContainer.getBoundingClientRect();
            if (rectImage.top < window.innerHeight && rectImage.bottom >= 0) {
                imageContainer.style.opacity = '1';
                imageContainer.style.animation = 'itemSlideInFromLeft 2.5s ease-out forwards';
            } else {
                imageContainer.style.opacity = '0';
                imageContainer.style.animation = 'none';
            }
        }

        cards.forEach((card) => {
            const rectCard = card.getBoundingClientRect();
            if (rectCard.top < window.innerHeight && rectCard.bottom >= 0) {
                card.style.opacity = '1';
                card.style.animation = 'itemSlideInFromLeft 2.5s ease-out forwards';
            } else {
                card.style.opacity = '0';
                card.style.animation = 'none';
            }
        });
    } else {
        if (imageContainer) {
            imageContainer.style.opacity = '1';
            imageContainer.style.animation = 'none';
        }

        cards.forEach((card) => {
            const rectCard = card.getBoundingClientRect();
            if (rectCard.top < window.innerHeight && rectCard.bottom >= 0) {
                card.style.opacity = '1';
                card.style.animation = 'itemSlideInFromLeft 2.5s ease-out forwards';
            } else {
                card.style.opacity = '0';
                card.style.animation = 'none';
            }
        });
    }
}

activateWhyChooseAnimations();
window.addEventListener('scroll', activateWhyChooseAnimations);

const workSection = document.getElementById('work') as HTMLElement;
const workItems = workSection.querySelectorAll('li') as NodeListOf<HTMLElement>;

function activateWorkAnimations(): void {
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

const deliverySection = document.getElementById('delivery') as HTMLElement;
const deliveryItems = deliverySection.querySelectorAll('li') as NodeListOf<HTMLElement>;

function activatedeliveryAnimations(): void {
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

const toolsSection = document.getElementById('tools') as HTMLElement;
const toolItems = toolsSection.querySelectorAll('li') as NodeListOf<HTMLElement>;

function activateToolAnimations(): void {
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
    const listItems = document.querySelectorAll('#tools li') as NodeListOf<HTMLElement>;
    listItems.forEach((item, index) => {
        item.style.setProperty('--animation-delay', `${index * 0.5}s`);
        item.style.opacity = '1';
    });
});

function updateTitle(): void {
    const titleElement = document.getElementById('title') as HTMLElement;
    if (window.innerWidth < 1024) {
        titleElement.innerHTML = "Paulo Mariano<br>Full Stack Developer";
    } else {
        titleElement.innerHTML = "Paulo Mariano || Full Stack Developer";
    }
}

window.addEventListener('resize', updateTitle);
window.addEventListener('load', updateTitle);
