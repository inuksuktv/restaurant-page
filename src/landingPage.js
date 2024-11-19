import landingImage from "../images/content2.jpg";
export function buildLandingPage() {
  const contentDiv = document.getElementById("content");

  // Create the image element.
  const image = document.createElement('img');
  image.src = landingImage;
  image.alt = 'A woman holding fried chicken over a plate.';
  image.width = '1920';

  // Create the card element
  const card = document.createElement('div');
  card.classList.add('card');

  // Create the first invite paragraph
  const invite1 = document.createElement('p');
  invite1.classList.add('invite');
  invite1.textContent = 'At the Green Plate, we believe that food is more than just sustenance. It\'s a shared experience, a way to connect with loved ones, and a source of comfort.';

  // Create the second invite paragraph
  const invite2 = document.createElement('p');
  invite2.classList.add('invite');
  invite2.textContent = 'Join us and indulge in our hearty, home-cooked meals, prepared with fresh, seasonal ingredients. From our cozy dining room to our inviting outdoor patio, we\'ve created a space where you can relax, unwind, and savor every bite.';

  // Create the action container
  const action = document.createElement('div');
  action.classList.add('action');

  // Create the "Book a table" button
  const bookButton = document.createElement('button');
  bookButton.textContent = 'Book a table';

  // Create the "Browse menu" button
  const browseButton = document.createElement('button');
  browseButton.classList.add('menu-button');
  browseButton.textContent = 'Browse menu';

  // Add buttons to the action container
  action.appendChild(bookButton);
  action.appendChild(browseButton);

  // Create the attribution paragraph
  const attribution = document.createElement('p');
  attribution.classList.add('attribution');
  attribution.innerHTML = 'Photo by <a href="https://www.pexels.com/@rachel-claire">Rachel Claire</a>.';

  // Add elements to the card
  card.appendChild(invite1);
  card.appendChild(invite2);
  card.appendChild(action);

  // Add elements to the content div
  contentDiv.appendChild(image);
  contentDiv.appendChild(card);
  contentDiv.appendChild(attribution);
}