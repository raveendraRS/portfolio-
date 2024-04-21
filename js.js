document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".menu a");

    // Intersection Observer to update active state based on section visibility
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = "#" + entry.target.id;
            const correspondingLink = document.querySelector(`.menu a[href="${id}"]`);

            if (entry.isIntersecting) {
                correspondingLink.classList.add("active");
                history.pushState(null, null, id); // Update URL
            } else {
                correspondingLink.classList.remove("active");
            }
        });
    }, { threshold: 0.5 });

    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling to section when menu item is clicked
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = navLink.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
                history.pushState(null, null, targetId);
            }
        });
    });

    // Check if the page is reloaded and redirect to the home page if needed
    const hash = window.location.hash;
    if (!hash || hash === "#") {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});


  
function displayStringOneByOne(str, delay, elementId, callback) {
    let index = 0;
    let wordIndex = 0;
    const words = str.split(' ');
    const outputElement = document.getElementById(elementId);
    const intervalId = setInterval(() => {
        const letter = document.createElement('span');
        letter.textContent = words[wordIndex][index] || ' ';
        if (letter.textContent === ' ') {
            letter.innerHTML = '&nbsp;';
        }
        const colorClass = getColorClass(wordIndex);
        letter.classList.add('rotate', colorClass);
        outputElement.appendChild(letter);
        index++;
        if (index >= words[wordIndex].length + 1) {
            index = 0;
            wordIndex++;
            if (wordIndex >= words.length) {
                clearInterval(intervalId);
                const lastLetter = outputElement.lastChild;
                lastLetter.addEventListener('animationend', () => {
                    clearInterval(intervalId);
                    if (callback) {
                        const myString = "RAVEENDRA KATTUBADI";
                        const delay = 100; // 0.1 second
                        callback(myString, delay, 'name',displayRole);
                    }
                });
            }
        }
    }, delay);
}
function name(str, delay, elementId, callback) {
    let index = 0;
    let wordIndex = 0;
    const words = str.split(' ');
    const outputElement = document.getElementById(elementId);
    const intervalId = setInterval(() => {
        const letter = document.createElement('span');
        letter.textContent = words[wordIndex][index] || ' ';
        if (letter.textContent === ' ') {
            letter.innerHTML = '&nbsp;';
        }
        const colorClass = '#A0ABC8';
        letter.classList.add('rotate', colorClass);
        outputElement.appendChild(letter);
        index++;
        if (index >= words[wordIndex].length + 1) {
            index = 0;
            wordIndex++;
            if (wordIndex >= words.length) {
                clearInterval(intervalId);
                const lastLetter = outputElement.lastChild;
                lastLetter.addEventListener('animationend', () => {
                    clearInterval(intervalId);
                    if (callback) {
                      
                        callback();
                    }
                });
            }
        }
    }, delay);
}


function displayRole() {
    const additionalWords = "I am a Front-End Developer";
    const wordsArray = additionalWords.split(' ');
    wordsArray.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word;
        if (index < wordsArray.length - 1) {
            span.innerHTML += '&nbsp;';
        }
        document.getElementById('role').appendChild(span);
    });

    const br = document.createElement('br'); // Add a line break
    document.getElementById('role').appendChild(br); // Append the line break

    displayDescription();
}


function displayDescription() {
    const description = "As a Front-End Developer, I specialize in crafting engaging and interactive user experiences. With a keen eye for design and a knack for coding, I bring websites and web applications to life. I thrive on the challenge of translating creative ideas into functional, aesthetically pleasing digital solutions. Let's collaborate and turn your vision into reality!"
      document.getElementById('description').textContent = description;
}

function getColorClass(index) {
    const colors = ['red', 'green', 'blue'];
    return colors[index % colors.length];
}

// Example usage RAVEENDRA KATTUBADI
const myString = "Hey, I'm ";
const delay = 100; // 0.1 second
displayStringOneByOne(myString, delay, 'demo', name);
document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    // Path to your resume PDF file
    var fileUrl = './img/raveendra.pdf';
    
    // Create a temporary anchor element
    var downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = 'RAVEENDRA_KATTUBADI_Resume.pdf';
    
    // Append the anchor element to the body
    document.body.appendChild(downloadLink);
    
    // Trigger the click event of the anchor element
    downloadLink.click();
    
    // Remove the anchor element from the body
    document.body.removeChild(downloadLink);
});
function showIconsButtonsContainer() {
    var container = document.querySelector('.icons-buttons-container');
    container.style.display = 'block'; // Show the container
}

// Call the function after a delay of 10 seconds (10000 milliseconds)
setTimeout(showIconsButtonsContainer, 7000);

document.addEventListener('DOMContentLoaded', function() {
    var menuToggleCheckbox = document.getElementById('menu-toggle-checkbox');
    var menu = document.querySelector('.menu');

    menuToggleCheckbox.addEventListener('change', function() {
        if (menuToggleCheckbox.checked) {
            menu.classList.add('open');
        } else {
            menu.classList.remove('open');
        }
    });
});

