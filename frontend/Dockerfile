# Usar la imagen base oficial de Node.js versión 16
FROM node:16

# Configurar el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos del frontend a la imagen del contenedor
COPY . .

# Instalar las dependencias del proyecto
RUN npm install

# Exponer el puerto 3000 para la aplicación React Native
EXPOSE 3000

# Comando para iniciar la aplicación React Native al ejecutar el contenedor
CMD ["npm", "start"]