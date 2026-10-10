/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

const wallpaper = {
  light: "img/sunny-boho-pattern-repeat-removable-wallpaper-design-683x1024.jpg",
  dark: "img/darkmode.webp",
}

// Step 1: Select the theme button
const darkTheme = document.getElementById('dark-mode');

// Create a variable to track the current image state
let isDarkMode = false;

const toggleDarkMode = () => {
  const tree = document.getElementById('lightTree');
  tree.style.opacity = 0;
  
  setTimeout(() => {
    if (!isDarkMode) {
      tree.src = "img/dark-forest-scene-with-clear-path-trees.jpg";
      document.body.style.backgroundImage = `url(${wallpaper.dark})`;
      isDarkMode = true;
    } else {
      tree.src = "img/beautiful-forest-spring-season.jpg";
      document.body.style.backgroundImage = `url(${wallpaper.light})`;
      isDarkMode = false;
    }
    
    tree.style.opacity = 1; // Fade in
    tree.style.transition = "opacity 0.5s ease"; // Add CSS transition
  }, 500);
  
  document.body.classList.toggle("dark-mode");
}

darkTheme.addEventListener('click', toggleDarkMode);

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function


/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Animations [PLACEHOLDsER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/
let count = 3;
// Step 1: Add your query for the submit RSVP button here
const rsvp = document.getElementById("rsvp-form");
const countStatement = document.createElement('p');


const addParticipant = function(event) {  
  event.preventDefault();
  if (!this.checkValidity()) { 
    return;
  }

  // Create person object with form data
  const person = {
    firstName: document.getElementById('first-name').value,
    lastName: document.getElementById('last-name').value,
    email: document.getElementById('email').value,
    guild: document.getElementById('guild').value
  };

  let output;
  if (person.guild.length > 0) {
    output = `${person.firstName} from the ${person.guild} Guild has RSVP'd!`;
  } else { 
    output = `${person.firstName} has RSVP'd!`; 
  }
  
  const p = document.createElement('p');
  p.textContent = '🌝 ' + output;
  count += 1;
  countStatement.textContent = "⭐ " + count + " people RSVP'd so far!";
  document.getElementById('count').innerText = '';
  document.getElementById("rsvp-participants").appendChild(p);
  document.getElementById("rsvp-participants").appendChild(countStatement);
  // Show the success modal
  toggleModal(person);
  this.reset();  
}
// Replace the existing event listener with this one
document.getElementById("rsvp-form").addEventListener('submit', addParticipant);

/*** Success Modal ***/
// Animation variables
let direction = 1;
let scale = 1;
let rotationDegree = 0;
let animationInterval;
// Animation function
const animateImage = () => {
  let modalImage = document.getElementById('modal-image');
  
  // Rotate the image back and forth
  rotationDegree += (2 * direction);
  
  // Change direction when reaching threshold
  if (rotationDegree > 15 || rotationDegree < -15) {
    direction *= -1;
  }
  
  // Apply rotation and pulse scaling
  scale = 1 + Math.sin(Date.now() / 300) * 0.05; // Subtle pulse between 0.95 and 1.05
  modalImage.style.transform = `rotate(${rotationDegree}deg) scale(${scale})`;
}
// Show/hide modal function
const toggleModal = (person) => {
  let modal = document.getElementById('success-modal');
  let modalText = document.getElementById('modal-text');
  
  // Update modal display to flex
  modal.style.display = "flex";
  
  // Update modal text to personalized message
  modalText.textContent = `Thanks for RSVPing, ${person.firstName}! We can't wait to see you at our magical event!`;
  
  // Start animation
  animationInterval = setInterval(animateImage, 50);
  
  // Set modal timeout to 5 seconds
  setTimeout(() => {
    modal.style.display = "none";
    // Stop the animation
    clearInterval(animationInterval);
    // Reset animation values
    rotationDegree = 0;
    scale = 1;
    direction = 1;
  }, 5000);
}
