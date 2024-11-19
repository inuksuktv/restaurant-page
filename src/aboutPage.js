import aboutImage from '../images/aboutImage.jpg';

export function buildAboutPage() {
  const contentDiv = document.getElementById('content');

  // Create the background image.
  const backgroundImage = document.createElement('img');
  backgroundImage.src = aboutImage;
  backgroundImage.alt = "A cutesie tinyhouse.";

  // Create the about card
  const aboutCard = document.createElement('div');
  aboutCard.classList.add('about-card');

  // Create the main heading
  const mainHeading = document.createElement('h2');
  mainHeading.textContent = "The Green Plate: Your Harmony, Our Passion";

  // Create the introductory paragraph
  const introParagraph = document.createElement('p');
  introParagraph.textContent = "At The Green Plate, we believe in the power of balance. We're more than just a restaurant; we're a sanctuary where you can nourish your body and soul. Our menu is a celebration of fresh, wholesome ingredients, crafted with care to tantalize your taste buds.";

  // Create the "Our Story" heading
  const storyHeading = document.createElement('h2');
  storyHeading.textContent = "Our Story";

  // Create the Chef Rachel paragraph
  const chefParagraph = document.createElement('p');
  chefParagraph.textContent = "Chef Rachel, the visionary behind The Green Plate, has always been passionate about food and its power to bring people together. With a deep commitment to sustainable practices and a love for bold flavors, Chef Rachel has created a menu that reflects their unique culinary perspective.";

  // Create the "Why Choose Us?" heading
  const whyChooseHeading = document.createElement('h2');
  whyChooseHeading.textContent = "Why Choose Us?";

  // Create the benefits list
  const benefitsList = document.createElement('ul');

  const benefit1 = document.createElement('li');
  benefit1.innerHTML = "<strong>Fresh, Local Ingredients:</strong> We source our ingredients from local farmers and suppliers, ensuring the freshest and most flavorful dishes.";
  const benefit2 = document.createElement('li');
  benefit2.innerHTML = "<strong>Mindful Eating:</strong> Our menu is designed to nourish your body and mind, promoting a healthy and balanced lifestyle.";
  const benefit3 = document.createElement('li');
  benefit3.innerHTML = "<strong>Warm and Inviting Atmosphere:</strong> Our cozy and comfortable space is the perfect setting to relax and enjoy a delicious meal.";

  benefitsList.appendChild(benefit1);
  benefitsList.appendChild(benefit2);
  benefitsList.appendChild(benefit3);

  // Create the concluding paragraph
  const concludingParagraph = document.createElement('p');
  concludingParagraph.textContent = "Join us on a culinary journey that celebrates the simple pleasures of life. Let us help you find your harmony, one bite at a time.";

  const attribution = document.createElement('p');
  attribution.classList.add('attribution');
  attribution.innerHTML = 'Photo by <a href="https://www.pexels.com/@rachel-claire">Rachel Claire</a>.';

  aboutCard.appendChild(mainHeading);
  aboutCard.appendChild(introParagraph);
  aboutCard.appendChild(storyHeading);
  aboutCard.appendChild(chefParagraph);
  aboutCard.appendChild(whyChooseHeading);
  aboutCard.appendChild(benefitsList);
  aboutCard.appendChild(concludingParagraph);

  contentDiv.appendChild(backgroundImage);
  contentDiv.appendChild(aboutCard);
  contentDiv.appendChild(attribution);
}