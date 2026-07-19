FROM php:8.2-apache

# Instalar extensiones necesarias
RUN docker-php-ext-install pdo pdo_mysql

# Activar mod_rewrite
RUN a2enmod rewrite

# Copiar el proyecto
COPY . /var/www/html/

# Permitir el uso de .htaccess
RUN sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf

WORKDIR /var/www/html

EXPOSE 80