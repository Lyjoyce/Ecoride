
# Application EcoRide STUDI 2025 (formateurs:e ) 

## Présentation
La startup "EcoRide" fraichement crée en France, a pour objectif de réduire l'impact 
environnemental des déplacements en encourageant le covoiturage. EcoRide prône une 
approche écologique et souhaite se faire connaître au travers d’un projet porté par José, le 
directeur technique, d’une application web. 
L’ambition "EcoRide" est de devenir la principale plateforme de covoiturage pour les 
voyageurs soucieux de l'environnement et ceux qui recherchent une solution économique 
pour leurs déplacements. Il est important à souligner que la plateforme de covoiturage doit 
gérer uniquement les déplacements en voitures. 
José, souhaitant avoir l’aide d’un/d’une développeur/développeuse a contacté Studi afin 
d’obtenir une personne qualifiée ayant les compétences requises. Suite à un entretien entre 
vous et José, vous avez été sélectionné afin de développer la plateforme EcoRide.

Cet exercice permet de mettre en évidence les compétences suivantes : 
- front-end : site web dynamique et responsive
- back-end : composant d'accès à la base de données
- base de données : manipulation des opérations élémentaires 

## Pré-requis

Afin de pouvoir lancer le projet en local, vous devez avoir ces outils sur votre machine : 
- pour la partie back
    - [Java JDK 17](https://adoptium.net/temurin/releases/)
    - [Maven](https://dlcdn.apache.org/maven/maven-3/3.8.7/binaries/apache-maven-3.8.7-bin.zip)
- pour la partie front
    - JS (LTS) 

- pour la partie base de données 
    - créez une base de données, puis, un utilisateur avec les droits sur cette base de données
    - récupérez les informations de connexion à la base de données (nom de la base, nom de l'utilisateur, mot de passe, adresse de la base de données)
    - dans le fichier application.properties du projet back, remplacez les valeurs par défaut par les valeurs récupérées précédemment

IDE
- [Visual Studio Code](https://code.visualstudio.com/)


## Technologies utilisées

Ce projet utilise en front javascript, Spring Boot 3.4.3 en back-end 

## Utilisation

### Lancement du projet

Pour lancer le projet, il faut lancer les commandes suivantes dans l'ordre :
- `mvn clean install` dans le dossier back
- `yarn install` dans le dossier front
- `yarn start` dans le dossier front
- `mvn spring-boot:run` dans le dossier back
- ouvrir votre navigateur sur l'adresse http://localhost:

### Fonctionnalités

- S'enregistrer avec prénom, nom, email et mot de passe
- Se connecter avec prénom, nom, email et mot de passe  
- Sélectionner un trajet
- Afficher un covoiturage (carpooling en anglais)
- Sélectionner un covoiturage
- Obtenir une place /un siège
- 



