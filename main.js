// Uniformly adjust the animation duration of all marquees based on their width

// Get all the marquee elements
const marquees = document.querySelectorAll(".marquee__inner");

// Loop through each marquee element and adjust the animation duration
marquees.forEach((marquee) => {
  // Get the width of the marquee element
  const marqueeWidth = marquee.getBoundingClientRect().width;

  // Calculate the animation duration based on the width of the marquee element
  const animationDuration = marqueeWidth / 300;

  // Set the animation duration using CSS variables
  marquee.style.setProperty("--animation-duration", `${animationDuration}s`);
});
