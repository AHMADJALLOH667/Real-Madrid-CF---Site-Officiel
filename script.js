// Données des joueurs actuels
const currentPlayers = [
    { name: "Thibaut Courtois", number: 1, position: "Gardien", photo: "courtois.jpg" },
    { name: "Dani Carvajal", number: 2, position: "Arrière droit", photo: "carvajal.jpg" },
    { name: "Éder Militão", number: 3, position: "Défenseur central", photo: "militao.jpg" },
    { name: "David Alaba", number: 4, position: "Défenseur central", photo: "alaba.jpg" },
    { name: "Jude Bellingham", number: 5, position: "Milieu offensif", photo: "bellingham.jpg" },
    { name: "Camavinga", number: 6, position: "Milieu central", photo: "camavinga.jpg" },
    { name: "Vinícius Júnior", number: 7, position: "Ailier gauche", photo: "vinicius.jpg" },
    { name: "Federico Valverde", number: 8, position: "Milieu central", photo: "valverde.jpg" },
    { name: "Endrick", number: 9, position: "Avant-centre", photo: "endrick.jpg" },
    { name: "Kylian Mbappé", number: 10, position: "Avant-centre", photo: "mbappe.jpg" },
    { name: "Rodrigo", number: 11, position: "Ailier droit", photo: "rodrigo.jpg" },
    { name: "Trent Alxender-Arnold", number: 12, position: "Arrière droit", photo: "arnold.jpg" },
    { name: "Andriy Lunin", number: 13, position: "Gardien", photo: "lunin.jpg" },
    { name: "Aurélien Tchouaméni", number: 14, position: "Milieu défensif", photo: "tchouameni.jpg" },
    { name: "Arda Güler", number: 15, position: "Milieu offensif", photo: "arda.jpg" },
    { name: "Gonzalo Garcia", number: 16, position: "Avant-centre", photo: "gonzalo.jpg" },
    { name: "Raul Asencio", number: 17, position: "Défenseur Central", photo: "asencio.jpg" },
    { name: "Alvaro Carreras", number: 18, position: "Arrière gauche", photo: "carreras.jpg" },
    { name: "Dani Ceballos", number: 19, position: "Milieu Central", photo: "ceballos.jpg" },
    { name: "Fran Garcia", number: 20, position: "Arrière gauche", photo: "fran garcia.jpg" },
    { name: "Brahim Diaz", number: 21, position: "Ailier droit", photo: "brahim.jpg" },
    { name: "RÜdiger", number: 22, position: "Défenseur central", photo: "rudiger.jpg" },
    { name: "Ferland Mendy", number: 23, position: "Arrière gauche", photo: "mendy.jpg" },
    { name: "Dean Huijsen", number: 24, position: "Défenseur central", photo: "huijsen.jpg" },
    { name: "Franco Mastantuono", number: 30, position: "Ailier droit", photo: "mastantuono.jpg" }
];

// Données des anciens joueurs légendaires
const formerPlayers = [
    { name: "Cristiano Ronaldo", number: 7, position: "Attaquant", era: "2009-2018", photo: "ronaldo.jpg" },
    { name: "Zinedine Zidane", number: 5, position: "Milieu", era: "2001-2006", photo: "zidane-legend.webp" },
    { name: "Raúl González", number: 7, position: "Attaquant", era: "1994-2010", photo: "raul.jpg" },
    { name: "Iker Casillas", number: 1, position: "Gardien", era: "1999-2015", photo: "casillas.jpg" },
    { name: "Sergio Ramos", number: 4, position: "Défenseur", era: "2005-2021", photo: "ramos.jpg" },
    { name: "Roberto Carlos", number: 3, position: "Défenseur", era: "1996-2007", photo: "roberto-carlos.jpg" },
    { name: "David Beckham", number: 23, position: "Milieu", era: "2003-2007", photo: "beckham.jpg" },
    { name: "Ronaldo Nazário", number: 9, position: "Attaquant", era: "2002-2007", photo: "ronaldo-nazario.jpg" },
    { name: "Luis Figo", number: 10, position: "Attaquant", era: "2000-2005", photo: "figo.jpg" },
    { name: "Kaká", number: 8, position: "Milieu", era: "2009-2013", photo: "kaka.jpg" },
    { name: "Gareth Bale", number: 11, position: "Attaquant", era: "2013-2022", photo: "bale.webp" },
    { name: "Xabi Alonso", number: 14, position: "Milieu", era: "2009-2014", photo: "alonso.webp" }
];

// Données des légendes
const legends = [
    { 
        name: "Alfredo Di Stéfano", 
        era: "1953-1964", 
        photo: "di-stefano.jpg",
        achievements: "5 Ligues des Champions, 8 Ligas, 1 Coupe du Roi. 308 buts en 396 matchs."
    },
    { 
        name: "Ferenc Puskás", 
        era: "1958-1966", 
        photo: "puskas.jpeg",
        achievements: "3 Ligues des Champions, 5 Ligas, 1 Coupe du Roi. 242 buts en 262 matchs."
    },
    { 
        name: "Francisco Gento", 
        era: "1953-1971", 
        photo: "gento.jpeg",
        achievements: "6 Ligues des Champions, 12 Ligas, 2 Coupes du Roi. Record de 8 finales de C1."
    },
    { 
        name: "Cristiano Ronaldo", 
        era: "2009-2018", 
        photo: "ronaldo-legend.jpg",
        achievements: "4 Ligues des Champions, 2 Ligas, 2 Coupes du Roi. 450 buts en 438 matchs."
    },
    { 
        name: "Zinedine Zidane", 
        era: "2001-2006", 
        photo: "zidane-legend.webp",
        achievements: "1 Ligue des Champions, 1 Liga, 1 Coupe du Roi. Ballon d'Or 1998."
    },
    { 
        name: "Raúl González", 
        era: "1994-2010", 
        photo: "raul-legend.jpg",
        achievements: "3 Ligues des Champions, 6 Ligas, 4 Coupes du Roi. 323 buts en 741 matchs."
    }
];

// Données des entraîneurs
const coaches = [
    {
        name: "Xabi Alonso",
        period: "2025-present",
        years: "1981-",
        photo: "xabi.jpg",
        trophies: "---------------------",
        deceased: false
    },
    {
        name: "Carlo Ancelotti",
        period: "2021-2025",
        years: "1959-",
        photo: "ancelotti.webp",
        trophies: "1 Ligue des Champions, 2 Ligas, 1 Coupe du Roi, 1 Coupe du Monde des Clubs",
        deceased: false
    },
    {
        name: "Zinedine Zidane",
        period: "2016-2018, 2019-2021",
        years: "1972-",
        photo: "zidane-coach.jpg",
        trophies: "3 Ligues des Champions, 2 Ligas, 2 Coupes du Monde des Clubs",
        deceased: false
    },
    {
        name: "José Mourinho",
        period: "2010-2013",
        years: "1963-",
        photo: "mourinho.jpg",
        trophies: "1 Liga, 1 Coupe du Roi, 1 Supercoupe d'Espagne",
        deceased: false
    },
    {
        name: "Manuel Pellegrini",
        period: "2009-2010",
        years: "1953-",
        photo: "pellegrini.webp",
        trophies: "1 Supercoupe d'Espagne",
        deceased: false
    },
    {
        name: "Vicente del Bosque",
        period: "1999-2003",
        years: "1950-",
        photo: "del-bosque.jpg",
        trophies: "2 Ligues des Champions, 2 Ligas, 1 Supercoupe d'Europe",
        deceased: false
    },
    {
        name: "Fabio Capello",
        period: "1996-1997, 2006-2007",
        years: "1946-",
        photo: "capello.jpg",
        trophies: "2 Ligas",
        deceased: false
    },
    {
        name: "Miguel Muñoz",
        period: "1960-1974",
        years: "1922-1990",
        photo: "munoz.webp",
        trophies: "2 Ligues des Champions, 9 Ligas, 2 Coupes du Roi",
        deceased: true
    },
    {
        name: "Luis Molowny",
        period: "1974, 1977-1979, 1982, 1985-1986",
        years: "1925-2010",
        photo: "molowny.jpg",
        trophies: "2 Ligues des Champions, 2 Ligas, 1 Coupe du Roi",
        deceased: true
    },
    {
        name: "Leo Beenhakker",
        period: "1986-1989",
        years: "1942-",
        photo: "beenhakker.jpg",
        trophies: "3 Ligas, 1 Coupe du Roi",
        deceased: false
    },
    {
        name: "John Toshack",
        period: "1989-1990",
        years: "1949-2021",
        photo: "toshack.jpg",
        trophies: "1 Liga",
        deceased: true
    }
];

// Initialisation du site
document.addEventListener('DOMContentLoaded', function() {
    // Chargement des joueurs actuels
    loadCurrentPlayers();
    
    // Chargement des anciens joueurs
    loadFormerPlayers();
    
    // Chargement des légendes
    loadLegends();
    
    // Chargement des entraîneurs
    loadCoaches();
    
    // Configuration de la navigation mobile
    setupMobileNavigation();
    
    // Configuration de l'hymne
    setupHymne();
    
    // Configuration du scroll smooth
    setupSmoothScroll();
});

// Fonction pour charger les joueurs actuels
function loadCurrentPlayers() {
    const container = document.getElementById('current-players');
    container.innerHTML = '';
    
    currentPlayers.forEach(player => {
        const playerCard = createPlayerCard(player);
        container.appendChild(playerCard);
    });
}

// Fonction pour charger les anciens joueurs
function loadFormerPlayers() {
    const container = document.getElementById('former-players');
    container.innerHTML = '';
    
    formerPlayers.forEach(player => {
        const playerCard = createPlayerCard(player, true);
        container.appendChild(playerCard);
    });
}

// Fonction pour créer une carte de joueur
function createPlayerCard(player, isFormer = false) {
    const card = document.createElement('div');
    card.className = 'player-card';
    
    const eraText = isFormer ? `<div class="player-era">${player.era}</div>` : '';
    
    // Créer un placeholder si l'image n'existe pas
    const photoElement = document.createElement('div');
    photoElement.className = 'player-photo';
    photoElement.style.backgroundImage = `url('${player.photo}')`;
    photoElement.style.backgroundSize = 'cover';
    photoElement.style.backgroundPosition = 'center';
    photoElement.innerHTML = '👤';
    
    // Gérer l'erreur d'image
    const img = new Image();
    img.onload = function() {
        photoElement.style.backgroundImage = `url('${player.photo}')`;
        photoElement.innerHTML = '';
    };
    img.onerror = function() {
        photoElement.style.background = 'linear-gradient(45deg, #1e3c72, #2a5298)';
        photoElement.innerHTML = '⚽';
    };
    img.src = player.photo;
    
    card.innerHTML = `
        <div class="player-name">${player.name}</div>
        <div class="player-number">#${player.number}</div>
        <div class="player-position">${player.position}</div>
        ${eraText}
    `;
    
    card.insertBefore(photoElement, card.firstChild);
    
    return card;
}

// Fonction pour charger les légendes
function loadLegends() {
    const container = document.getElementById('legends');
    container.innerHTML = '';
    
    legends.forEach(legend => {
        const legendCard = document.createElement('div');
        legendCard.className = 'legend-card';
        
        // Créer un placeholder pour la photo
        const photoElement = document.createElement('div');
        photoElement.className = 'legend-photo';
        photoElement.style.backgroundImage = `url('${legend.photo}')`;
        photoElement.style.backgroundSize = 'cover';
        photoElement.style.backgroundPosition = 'center';
        photoElement.innerHTML = '👑';
        
        // Gérer l'erreur d'image
        const img = new Image();
        img.onload = function() {
            photoElement.style.backgroundImage = `url('${legend.photo}')`;
            photoElement.innerHTML = '';
        };
        img.onerror = function() {
            photoElement.style.background = 'linear-gradient(45deg, #1e3c72, #2a5298)';
            photoElement.innerHTML = '👑';
        };
        img.src = legend.photo;
        
        legendCard.innerHTML = `
            <div class="legend-name">${legend.name}</div>
            <div class="legend-era">${legend.era}</div>
            <div class="legend-achievements">${legend.achievements}</div>
        `;
        
        legendCard.insertBefore(photoElement, legendCard.firstChild);
        container.appendChild(legendCard);
    });
}

// Fonction pour charger les entraîneurs
function loadCoaches() {
    const container = document.getElementById('coaches');
    container.innerHTML = '';
    
    coaches.forEach(coach => {
        const coachCard = document.createElement('div');
        coachCard.className = 'coach-card';
        
        const deceasedClass = coach.deceased ? 'deceased' : '';
        const yearsText = coach.deceased ? `${coach.years} (Décédé)` : `Né en ${coach.years}`;
        
        // Créer un placeholder pour la photo
        const photoElement = document.createElement('div');
        photoElement.className = `coach-photo ${deceasedClass}`;
        photoElement.style.backgroundImage = `url('${coach.photo}')`;
        photoElement.style.backgroundSize = 'cover';
        photoElement.style.backgroundPosition = 'center';
        photoElement.innerHTML = '👨‍💼';
        
        // Gérer l'erreur d'image
        const img = new Image();
        img.onload = function() {
            photoElement.style.backgroundImage = `url('${coach.photo}')`;
            photoElement.innerHTML = '';
        };
        img.onerror = function() {
            photoElement.style.background = 'linear-gradient(45deg, #1e3c72, #2a5298)';
            photoElement.innerHTML = '👨‍💼';
        };
        img.src = coach.photo;
        
        coachCard.innerHTML = `
            <div class="coach-name">${coach.name}</div>
            <div class="coach-period">${coach.period}</div>
            <div class="coach-years">${yearsText}</div>
            <div class="coach-trophies">${coach.trophies}</div>
        `;
        
        coachCard.insertBefore(photoElement, coachCard.firstChild);
        container.appendChild(coachCard);
    });
}

// Configuration de la navigation mobile
function setupMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Configuration de l'hymne
function setupHymne() {
    const hymne = document.getElementById('hymne');
    const playButton = document.getElementById('play-hymne');
    const stopButton = document.getElementById('stop-hymne');
    
    // Vérifier si l'hymne existe
    function checkHymneExists() {
        return new Promise((resolve) => {
            const testAudio = new Audio();
            testAudio.oncanplaythrough = () => resolve(true);
            testAudio.onerror = () => resolve(false);
            testAudio.src ='hymne.mp3';
        });
    }
    
    // Jouer l'hymne
    playButton.addEventListener('click', async function() {
        const exists = await checkHymneExists();
        if (exists) {
            hymne.play().catch(e => {
                console.log('Impossible de jouer l\'hymne:', e);
                alert('L\'hymne ne peut pas être joué. Vérifiez que le fichier hymne.mp3 est présent.');
            });
        } else {
            alert('Le fichier hymne.mp3 n\'a pas été trouvé. Veuillez l\'ajouter au dossier du site.');
        }
    });
    
    // Arrêter l'hymne
    stopButton.addEventListener('click', function() {
        hymne.pause();
        hymne.currentTime = 0;
    });
    
    // Auto-play au chargement de la page (avec permission utilisateur)
    setTimeout(async () => {
        const exists = await checkHymneExists();
        if (exists) {
            hymne.play().catch(e => {
                console.log('Auto-play bloqué par le navigateur');
                // Afficher un message informatif
                playButton.textContent = '🎵 Cliquez pour jouer l\'hymne';
            });
        } else {
            playButton.textContent = '🎵 Ajoutez hymne.mp3';
            playButton.style.background = 'rgba(255, 0, 0, 0.3)';
        }
    }, 1000);
}

// Configuration du scroll smooth
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animation d'apparition des éléments au scroll
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Gestion du mode hors-ligne
function setupOfflineMode() {
    // Enregistrement du service worker pour le mode hors-ligne
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('javascript/sw.js')
            .then(registration => {
                console.log('Service Worker enregistré avec succès');
            })
            .catch(error => {
                console.log('Erreur d\'enregistrement du Service Worker:', error);
            });
    }
}

// Initialisation des animations de scroll
setupScrollAnimations();

// Initialisation du mode hors-ligne
setupOfflineMode();

// Gestion des erreurs d'images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Fonction pour créer des images de placeholder
function createPlaceholderImage(text, size = '120px') {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = parseInt(size);
    canvas.height = parseInt(size);
    
    // Fond
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Texte
    ctx.fillStyle = '#999';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width/2, canvas.height/2);
    
    return canvas.toDataURL();
}

// Amélioration de l'expérience utilisateur
document.addEventListener('DOMContentLoaded', function() {
    // Ajout d'un indicateur de chargement
    const loadingIndicator = document.createElement('div');
    loadingIndicator.id = 'loading';
    loadingIndicator.innerHTML = 'Chargement...';
    loadingIndicator.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 20px;
        border-radius: 10px;
        z-index: 9999;
    `;
    document.body.appendChild(loadingIndicator);
    
    // Masquer l'indicateur après le chargement
    setTimeout(() => {
        loadingIndicator.style.display = 'none';
    }, 2000);
});

// Gestion des touches clavier pour l'hymne
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        const hymne = document.getElementById('hymne');
        if (hymne.paused) {
            hymne.play();
        } else {
            hymne.pause();
        }
    }
});

// Notification de bienvenue
function showWelcomeNotification() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification('¡Hala Madrid!', {
                    body: 'Bienvenue sur le site officiel du Real Madrid CF',
                    icon: 'logo.png'
                });
            }
        });
    }
}

// Afficher la notification après 3 secondes

setTimeout(showWelcomeNotification, 3000);

