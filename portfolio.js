function animateItem(item) {
    item.style.transform = 'scale(1.05)';
}

function resetAnimation(item) {
    item.style.transform = 'scale(1)';
}

const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        animateItem(item);
    });

    item.addEventListener('mouseout', () => {
        resetAnimation(item);
    });
});
document.querySelectorAll('a[href^="#flower"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#sky"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('a[href^="#others"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
