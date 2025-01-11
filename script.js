
const textElement = document.getElementById('text');
const text = "Kash Chauhan";
let index = 0;

function typeWriterEffect() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriterEffect, 500); // Adjust speed by changing the time (ms)
  }
}

// Start animation
typeWriterEffect();

    // Snowfall Effect
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄'; // Snowflake symbol
        snowflake.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        snowflake.style.animationDuration = Math.random() * 1 + 's'; // Random fall duration
        snowflake.style.fontSize = Math.random() * 20 + 50 + 'px'; // Random size
        document.body.appendChild(snowflake);
  
        // Remove the snowflake after animation ends
        setTimeout(() => {
          snowflake.remove();
        }, 1100); // Adjust time to match animation duration
      }
  
      // Create snowflakes at intervals
      setInterval(createSnowflake, 100); // Adjust interval for snowfall density
