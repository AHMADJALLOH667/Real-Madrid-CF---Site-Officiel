# Real Madrid CF - Site Officiel

Un site web complet dédié au Real Madrid Club de Fútbol, développé avec HTML, CSS et JavaScript pur.

## 🏆 Fonctionnalités

- **Hymne du club** : Lecture automatique de l'hymne du Real Madrid
- **Histoire du club** : Chronologie complète depuis la fondation
- **Équipe actuelle** : Joueurs avec photos et numéros
- **Anciens joueurs** : Légendes du club avec leurs époques
- **Palmarès** : Tous les trophées avec les années d'obtention
- **Légendes** : Joueurs emblématiques du club
- **Entraîneurs** : Tous les coachs avec leurs palmarès (photos NB pour les défunts)
- **Mode hors-ligne** : Fonctionne sans connexion internet (PWA)

## 🚀 Installation

1. Téléchargez tous les fichiers dans un dossier
2. Ajoutez les images des joueurs, entraîneurs et légendes
3. Ajoutez le fichier audio de l'hymne (`hymne.mp3` ou `hymne.ogg`)
4. Ouvrez `index.html` dans un navigateur web

## 📁 Structure des fichiers

```
/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript
├── manifest.json       # Configuration PWA
├── sw.js              # Service Worker
├── README.md          # Documentation
├── logo.png           # Logo du club
├── stadium.jpg        # Photo du stade
├── hymne.mp3          # Hymne du club
└── images/            # Dossier des images
    ├── joueurs/       # Photos des joueurs
    ├── entraîneurs/   # Photos des entraîneurs
    └── légendes/      # Photos des légendes
```

## 🎵 Hymne du Real Madrid

L'hymne se lance automatiquement au chargement de la page. Vous pouvez le contrôler avec les boutons "Jouer l'Hymne" et "Arrêter".

## 📱 Mode Responsive

Le site s'adapte parfaitement aux écrans :
- Ordinateurs de bureau
- Tablettes
- Smartphones

## 🔧 Personnalisation

### Ajouter des joueurs
Modifiez le tableau `currentPlayers` dans `script.js` :

```javascript
const currentPlayers = [
    { name: "Nom du joueur", number: 10, position: "Position", photo: "photo.jpg" },
    // ...
];
```

### Ajouter des trophées
Modifiez la section trophées dans `index.html` :

```html
<div class="trophy-item">2024, 2025, 2026</div>
```

## 🌐 Mode Hors-ligne

Le site fonctionne sans connexion internet grâce au Service Worker. Toutes les ressources sont mises en cache pour une utilisation hors-ligne.

## 🎨 Couleurs

- **Bleu principal** : #1e3c72
- **Bleu secondaire** : #2a5298
- **Or** : #FFD700
- **Orange** : #FFA500

## 📞 Support

Pour toute question ou suggestion, contactez-nous.

---

**¡Hala Madrid!** ⚽👑