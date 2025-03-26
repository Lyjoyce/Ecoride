# Etape 0 : nginx
FROM nginx:1.27

# Copier la configuration Nginx
COPY config/default.conf /etc/nginx/conf.d/default.conf

COPY --from=php-fpm /var/www/html /var/www/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]


