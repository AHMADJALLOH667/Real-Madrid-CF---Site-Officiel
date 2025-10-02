// Service Worker pour le mode hors-ligne
const CACHE_NAME = 'real-madrid-v1';
const urlsToCache = [
  '',
  'index.html',
  'styles.css',
  'script.js',
  'manifest.json',
  // Images principales
  'logo.png',
  'stadium.jpg',
  'stadium-bg.jpg',
  'founding.jpg',
  'bernabeu.jpg',
   //Images des joueurs actuels
  'courtois.jpg',
  'carvajal.jpg',
  'militao.jpg',
  'alaba.jpg',
  'bellingham.jpg',
  'nacho.jpg',
  'vinicius.jpg',
  'kroos.jpg',
  'benzema.jpg',
  'modric.jpg',
  'asensio.jpg',
  'camavinga.jpg',
  'lunin.jpg',
  'casemiro.jpg',
  'valverde.jpg',
  'rodrygo.jpg',
  'vazquez.jpg',
  'tchouameni.jpg',
  'ceballos.jpg',
  'tobias.jpg',
  // Images des anciens joueurs
  'ronaldo.jpg',
  'zidane.jpg',
  'raul.jpg',
  'casillas.jpg',
  'ramos.jpg',
  'roberto-carlos.jpg',
  'beckham.jpg',
  'ronaldo-nazario.jpg',
  'figo.jpg',
  'kaka.jpg',
  'bale.jpg',
  'alonso.jpg',
   //Images des légendes
  'di-stefano.jpg',
  'puskas.jpg',
  'gento.jpg',
  'ronaldo-legend.jpg',
  'zidane-legend.jpg',
  'raul-legend.jpg',
   //Images des entraîneurs
  'ancelotti.jpg',
  'zidane-coach.jpg',
  'mourinho.jpg',
  'pellegrini.jpg',
  'del-bosque.jpg',
  'capello.jpg',
  'munoz.jpg',
  'molowny.jpg',
  'beenhakker.jpg',
  'toshack.jpg',
  // Hymne
  'hymne.mp3',
  'hymne.ogg',
   //Icônes
  'icon-192.png',
  'icon-512.png',
  'favicon.ico'
];

 //Installation du Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
  );
});

 //Activation du Service Worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

 //Interception des requêtes
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
         //Cache hit - retourner la réponse du cache
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
             //Vérifier si nous avons reçu une réponse valide
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

             //Cloner la réponse
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

 //Gestion des notifications push
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'Nouvelle actualité du Real Madrid!',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Voir le site',
        icon: 'icon-192.png'
      },
      {
        action: 'close',
        title: 'Fermer',
        icon: 'icon-192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Real Madrid CF', options)
  );
});

 //Gestion des clics sur les notifications
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('')
    );
  }
});

 //Synchronisation en arrière-plan
self.addEventListener('sync', function(event) {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
   //Logique de synchronisation en arrière-plan
  console.log('Synchronisation en arrière-plan effectuée');
}
