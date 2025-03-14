# etape 2 : mettre à disposition un serveur web
FROM nginx:alpine3.19

# importation de notre configuration ngix à la place de celle par defaut
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# etape 3 : copier le resultat du "build" dans mon server
COPY --from=build /app/dist/front-newsletter /usr/share/nginx/html
# j'ecoute sur le port 80
EXPOSE 80

# demarrer le serveur nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
