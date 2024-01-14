# Application Ecommerce de Pizzas avec Node.js, Express, React et MongoDB

### Description 🍕:
Ce projet est une application Ecommerce pour une entreprise de pizzas, développée en utilisant la pile MERN (MongoDB, Express, React, Node.js). L'application permet aux utilisateurs de parcourir une variété de pizzas, de les ajouter à un panier d'achat, puis de procéder à l'achat. Les fonctionnalités clés comprennent :

- **Backend avec Node.js et Express :**
  - Utilisation de Node.js et Express pour construire un serveur robuste et scalable.

- **Frontend avec React :**
  - Implémentation d'une interface utilisateur dynamique et interactive avec React, créant une expérience fluide en page unique (SPA).

- **Base de données MongoDB :**
  - Stockage et gestion efficaces des données avec MongoDB, une base de données NoSQL, assurant flexibilité et évolutivité.

- **Fonctionnalités Ecommerce :**
  - Permet aux utilisateurs de parcourir une sélection diversifiée de pizzas.
  - Prise en charge de l'ajout de pizzas à un panier d'achat pour une expérience d'achat pratique.

- **Authentification utilisateur avec Google :**
  - Implémentation de l'authentification utilisateur via Google, assurant une expérience sécurisée et personnalisée.

- **Intégration de paiement avec Stripe :**
  - Intègre Stripe pour des paiements en ligne fluides et sécurisés, offrant un processus de paiement sans tracas.

Cette application Ecommerce de Pizzas constitue une solution complète pour la gestion d'une entreprise de pizzas en ligne, combinant la puissance de Node.js, Express, React et MongoDB pour fournir une application riche en fonctionnalités et conviviale.

------

**Configuration ⚙️:**

1. **Prérequis :**
   Assurez-vous d'avoir Node.js installé sur votre machine. Vous pouvez télécharger Node.js depuis [le site officiel de Node.js](https://nodejs.org/).

2. **Installation des dépendances :**
   Dans le répertoire du projet, exécutez la commande suivante pour installer les dépendances nécessaires :
   ```bash
   npm install
   ```

3. **Utilisation de Docker pour démarrer la base de données 🐳:**
   Assurez-vous d'avoir Docker installé sur votre machine. Vous pouvez télécharger Docker depuis [le site officiel de Docker](https://www.docker.com/get-started).

   - **Lancer l'application avec Docker pour la base de données :**
     ```bash
     docker-compose up
     ```
     Cela va créer et démarrer les conteneurs nécessaires pour la base de données de l'application.

   - **Arrêter les conteneurs Docker de la base de données :**
     ```bash
     docker-compose down
     ```

4. **Démarrer l'application ▶️:**
   Une fois les dépendances installées et les conteneurs Docker de la base de données démarrés, lancez l'application avec la commande :
   ```bash
   npm start
   ```
