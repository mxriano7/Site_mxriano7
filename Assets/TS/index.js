var aboutSection = document.getElementById('about');
var contents = aboutSection.querySelectorAll('.content');
function activateAnimations() {
    var triggerAnimation = false;
    contents.forEach(function (content) {
        var rect = content.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            triggerAnimation = true;
        }
    });
    if (triggerAnimation) {
        contents.forEach(function (content) {
            content.style.opacity = '1';
            content.style.animation = 'slideIn 2s forwards';
        });
    }
    else {
        contents.forEach(function (content) {
            content.style.opacity = '0';
            content.style.animation = 'none';
        });
    }
}
window.addEventListener('scroll', activateAnimations);
activateAnimations();
var whyChooseSection = document.getElementById('whyChoose');
var cards = whyChooseSection.querySelectorAll('li');
var imageContainer = document.querySelector('.image-container-icons');
function activateWhyChooseAnimations() {
    var isSmallScreen = window.innerWidth < 1024;
    if (isSmallScreen) {
        if (imageContainer) {
            var rectImage = imageContainer.getBoundingClientRect();
            if (rectImage.top < window.innerHeight && rectImage.bottom >= 0) {
                imageContainer.style.opacity = '1';
                imageContainer.style.animation = 'itemSlideInFromLeft 2.5s ease-out forwards';
            }
            else {
                imageContainer.style.opacity = '0';
                imageContainer.style.animation = 'none';
            }
        }
        cards.forEach(function (card) {
            var rectCard = card.getBoundingClientRect();
            if (rectCard.top < window.innerHeight && rectCard.bottom >= 0) {
                card.style.opacity = '1';
                card.style.animation = 'itemSlideInFromLeft 2.5s ease-out forwards';
            }
            else {
                card.style.opacity = '0';
                card.style.animation = 'none';
            }
        });
    }
    else {
        if (imageContainer) {
            imageContainer.style.opacity = '1';
            imageContainer.style.animation = 'none';
        }
        cards.forEach(function (card) {
            var rectCard = card.getBoundingClientRect();
            if (rectCard.top < window.innerHeight && rectCard.bottom >= 0) {
                card.style.opacity = '1';
                card.style.animation = 'itemSlideInFromLeft 2.5s ease-out forwards';
            }
            else {
                card.style.opacity = '0';
                card.style.animation = 'none';
            }
        });
    }
}
activateWhyChooseAnimations();
window.addEventListener('scroll', activateWhyChooseAnimations);
var workSection = document.getElementById('work');
var workItems = workSection.querySelectorAll('li');
function activateWorkAnimations() {
    workItems.forEach(function (item, index) {
        var rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            item.style.opacity = '1';
            item.style.animation = (index % 2 === 0)
                ? 'itemSlideInFromLeft 2.5s ease-out forwards'
                : 'itemSlideInFromRight 2.5s ease-out forwards';
        }
        else {
            item.style.opacity = '0';
            item.style.animation = 'none';
        }
    });
}
window.addEventListener('scroll', activateWorkAnimations);
activateWorkAnimations();
var deliverySection = document.getElementById('delivery');
var deliveryItems = deliverySection.querySelectorAll('li');
function activatedeliveryAnimations() {
    deliveryItems.forEach(function (item, index) {
        var rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            item.style.opacity = '1';
            item.style.animation = (index % 2 === 0)
                ? 'itemSlideInFromLeft 2.5s ease-out forwards'
                : 'itemSlideInFromRight 2.5s ease-out forwards';
        }
        else {
            item.style.opacity = '0';
            item.style.animation = 'none';
        }
    });
}
window.addEventListener('scroll', activatedeliveryAnimations);
activatedeliveryAnimations();
var toolsSection = document.getElementById('tools');
var toolItems = toolsSection.querySelectorAll('li');
function activateToolAnimations() {
    toolItems.forEach(function (item, index) {
        var rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            item.style.opacity = '1';
            item.style.animation = "slideInFromLeft 1.2s ease-out forwards";
            item.style.animationDelay = "".concat(index * 0.2, "s");
        }
        else {
            item.style.opacity = '0';
            item.style.animation = 'none';
        }
    });
}
window.addEventListener('scroll', activateToolAnimations);
activateToolAnimations();
document.addEventListener('DOMContentLoaded', function () {
    var listItems = document.querySelectorAll('#tools li');
    listItems.forEach(function (item, index) {
        item.style.setProperty('--animation-delay', "".concat(index * 0.5, "s"));
        item.style.opacity = '1';
    });
});
function updateTitle() {
    var titleElement = document.getElementById('title');
    if (window.innerWidth < 1024) {
        titleElement.innerHTML = "Paulo Mariano<br>Full Stack Developer";
    }
    else {
        titleElement.innerHTML = "Paulo Mariano || Full Stack Developer";
    }
}
window.addEventListener('resize', updateTitle);
window.addEventListener('load', updateTitle);
