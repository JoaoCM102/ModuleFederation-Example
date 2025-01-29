# Etapa de construcción
FROM node:18 AS build

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos package.json y package-lock.json antes para aprovechar la caché
COPY package.json package-lock.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el código fuente después de instalar dependencias
COPY . .

# Construimos la aplicación para producción
RUN npm run build --configuration=production

# Etapa de despliegue con Nginx
FROM nginx:alpine

# Copiamos el build generado al directorio de Nginx
COPY --from=build /app/dist/shell /usr/share/nginx/html

# Exponemos el puerto 80 para servir la aplicación
EXPOSE 80

# Arrancamos Nginx
CMD ["nginx", "-g", "daemon off;"]
