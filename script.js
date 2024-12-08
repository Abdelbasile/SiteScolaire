// Fonction pour afficher un message dynamique
function displayWelcomeMessage() {
    const messageElement = document.getElementById('welcome-message');
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
        messageElement.textContent = 'Bonjour, et bienvenue sur notre site !';
    } else if (currentHour < 18) {
        messageElement.textContent = 'Bon après-midi ! Découvrez notre école moderne.';
    } else {
        messageElement.textContent = 'Bonsoir, explorez les opportunités de notre école.';
    }
}

// Appel de la fonction pour afficher le message au chargement de la page
window.onload = displayWelcomeMessage;

//events
 // Fonction pour afficher le calendrier avec des événements
function initCalendar() {
    const calendarEl = document.getElementById('calendar-container');
    
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Examen de mathématiques',
                start: '2024-12-12',
                description: 'Examen de mathématiques pour tous les élèves.'
            },
            {
                title: 'Sortie scolaire',
                start: '2024-12-15',
                description: 'Sortie scolaire pour les classes de 3e.'
            },
            {
                title: 'Réunion parents-professeurs',
                start: '2024-12-20',
                description: 'Réunion entre les enseignants et les parents des élèves.'
            }
        ]
    });
    
    calendar.render();
}

// Appel de la fonction pour initialiser le calendrier
window.onload = initCalendar;
 //contact
  function initMap() {
    var schoolLocation = { lat: 48.8566, lng: 2.3522 }; // Coordonnées de l'école au cameroun
    var map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 14,
        center: schoolLocation
    });

    var marker = new google.maps.Marker({
        position: schoolLocation,
        map: map,
        title: 'École Moderne'
    });
}

const menuButton = document.getElementById("menuButton");
    const menuItems = document.getElementById("menuItems");

    menuButton.addEventListener("click", function () {
        if (menuItems.style.display === "none") {
            menuItems.style.display = "block";
        } else {
            menuItems.style.display = "none";
        }
    });

  const data = ["Événement A", "Actualité B", "Ressource C", "Membre D"];
  const searchInput = document.getElementById("search");
  const suggestions = document.getElementById("suggestions");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const matches = data.filter(item => item.toLowerCase().includes(query));
    suggestions.innerHTML = matches.map(match => `<div>${match}</div>`).join("");
    suggestions.style.display = matches.length ? "block" : "none";
  });

  // Sélection des éléments HTML
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbot = document.getElementById('chatbot');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

// Fonction pour ouvrir/fermer le chatbot
chatbotToggle.addEventListener('click', () => {
  chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
});

// Fonction pour fermer le chatbot
chatbotClose.addEventListener('click', () => {
  chatbot.style.display = 'none';
});

// Fonction pour envoyer un message
chatbotSend.addEventListener('click', () => {
  const userMessage = chatbotInput.value.trim();
  if (userMessage) {
    // Ajouter le message de l'utilisateur
    const userMessageElement = document.createElement('p');
    userMessageElement.classList.add('user-message');
    userMessageElement.textContent = userMessage;
    chatbotMessages.appendChild(userMessageElement);
    
    // Ajouter la réponse du bot (pour simplifier, ici un message statique)
    const botMessageElement = document.createElement('p');
    botMessageElement.classList.add('bot-message');
    botMessageElement.textContent = "Je suis un chatbot. Comment puis-je vous aider ?";
    chatbotMessages.appendChild(botMessageElement);
    
    // Effacer l'input
    chatbotInput.value = '';
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll vers le bas
  }
});
