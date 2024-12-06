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