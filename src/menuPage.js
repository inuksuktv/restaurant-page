import menuImage from '../images/menuImage.jpg'
import cornbread from '../images/cornbread.jpg';
import wings from '../images/wings.jpg';
import pizza from '../images/pizza.jpg';
import potatoes from '../images/potatoes.jpg';
import fish from '../images/fish.jpg';

class MenuItem {
  constructor(name, image, description) {
    this.name = name;
    this.image = image;
    this.description = description;
  }
}

function createMenuCard(menuItem) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('menu-card');

  const cardTitle = document.createElement('h4');
  cardTitle.textContent = menuItem.name;

  const cardImage = document.createElement('img');
  cardImage.src = menuItem.image;
  cardImage.alt = menuItem.name;
  cardImage.height = 300;

  const cardDescription = document.createElement('p');
  cardDescription.textContent = menuItem.description;

  cardDiv.appendChild(cardTitle);
  cardDiv.appendChild(cardImage);
  cardDiv.appendChild(cardDescription);

  return cardDiv;
}

export function buildMenuPage() {
  const contentDiv = document.getElementById('content');

  const backgroundImage = document.createElement('img');
  backgroundImage.src = menuImage;
  backgroundImage.alt = "Vegetables growing in rows.";

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  const menu = [
    new MenuItem("Classic cornbread", cornbread, "Golden-brown, buttery cornbread, baked to perfection. A simple, comforting side dish."),
    new MenuItem("Duck wings", wings, "Delectable duck wings drizzled with honey. Served with homemade potato chips."),
    new MenuItem("Pizza", pizza, "A fiery feast with jalapeños, roasted red peppers, and a spicy tomato sauce, topped with melted mozzarella and fresh cilantro."),
    new MenuItem("Garlic potatoes", potatoes, "Warm, rustic potato medallions, roasted with herbs and spices, served on a rich, garlicky aioli."),
    new MenuItem("Fish and veg", fish, "Sustainable cod, pan-fried golden brown, served with a vibrant mix of roasted vegetables.")
  ]
  menu.forEach((item) => {
    const card = createMenuCard(item);
    menuDiv.appendChild(card);
  })

  const attribution = document.createElement('p');
  attribution.classList.add('attribution');
  attribution.innerHTML = 'Photos by <a href="https://www.pexels.com/@rachel-claire">Rachel Claire</a>.';

  contentDiv.appendChild(backgroundImage);
  contentDiv.appendChild(menuDiv);
  contentDiv.appendChild(attribution);

  console.log("Menu page built!");
}