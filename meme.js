const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');

const topText = 'Top Text';
const bottomText = 'Bottom Text';
const fontSize = 30;
const fontFamily = 'Arial';
const lineHeight = 40;
const margin = 20;
const textColor = 'white';

function generateMeme() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the top text
  ctx.font = `${fontSize}px ${fontFamily}`;
  ctx.fillStyle = textColor;
  ctx.fillText(topText, margin, margin + lineHeight);

  // Draw the bottom text
  ctx.fillText(bottomText, margin, canvas.height - margin);
}

// Generate the meme initially
generateMeme();
