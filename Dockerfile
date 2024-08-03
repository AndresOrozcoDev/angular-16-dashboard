# Etapa de construcción
FROM node:latest AS builder

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de tu proyecto al contenedor
COPY . .

RUN npm cache clean --force

# Instalar las dependencias del proyecto
RUN npm install

# Compilar el proyecto
RUN npm run build --prod

# Etapa de producción
FROM nginx:latest

# Copiar el archivo de configuración de Nginx principal
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar el archivo de configuración del servidor
COPY default.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos compilados al directorio de Nginx
COPY --from=builder /app/dist/angular-16-dashboard /usr/share/nginx/html

# Exponer el puerto 80 para acceder al servidor web
EXPOSE 4200

# Comando para iniciar el servidor Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
