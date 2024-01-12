// Déclaration des variables du jeu
let xp = 0; // Expérience du joueur
let health = 100; // Santé du joueur
let gold = 50; // Or du joueur
let currentWeapon = 0; // Arme actuelle du joueur
let fighting; // Variable pour savoir si le joueur est en train de combattre
let monsterHealth; // Santé du monstre
let inventory = ["stick"]; // Inventaire du joueur

// Sélection des éléments HTML
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// Définition des armes
const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];

// Définition des lieux du jeu
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store".',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters.",
  },
];

// Initialisation des boutons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// Fonction pour mettre à jour l'interface utilisateur en fonction de la localisation
function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}

// Fonctions pour aller à différents endroits
function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

// Fonction pour combattre le dragon
function fightDragon() {
  console.log("Fighting dragon.");
}

// Fonction pour acheter de la santé
function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

// Fonction pour acheter une arme
function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    currentWeapon++;
    goldText.innerText = gold; // Display the new value of gold
    let newWeapon = weapons[currentWeapon].name;
    text.innerText = "You now have a "+ newWeapon +".";; // Display the new weapon message
    inventory .push(newWeapon);//ajouter newWeapon dans le  inventory[]
    text.innerText += " In your inventory you have: " + inventory ;
  }else {
    text.innerText = "You do not have enough gold to buy a weapon.";
  }
}

// Fonctions pour combattre différents monstres
function fightSlime() {
  // Cette fonction est vide et doit être remplie
}

function fightBeast() {
  // Cette fonction est vide et doit être remplie
}
