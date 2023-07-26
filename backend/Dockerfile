# Usar la imagen base oficial de PHP con Apache y PHP 8.1
FROM php:8.1-apache

# Instalar extensiones de PHP necesarias
RUN docker-php-ext-install pdo pdo_mysql

# Configurar el directorio de trabajo dentro del contenedor
WORKDIR /var/www/html

# Copiar los archivos del backend a la imagen del contenedor
COPY . .

# Habilitar el módulo de reescritura de Apache
RUN a2enmod rewrite

# Copiar el archivo de configuración de Apache desde la carpeta docker
COPY ./docker/my_apache.conf /etc/apache2/sites-available/000-default.conf

# Exponer el puerto 80 para el servidor Apache
EXPOSE 80

# Comando para iniciar el servidor Apache al ejecutar el contenedor
CMD ["apache2-foreground"]
