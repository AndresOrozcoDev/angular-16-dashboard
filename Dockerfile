# Usar una imagen base que contenga Node.js
FROM node:latest AS builder

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de tu proyecto al contenedor
COPY . .

# Instalar las dependencias del proyecto
RUN npm install

# Compilar el proyecto
RUN npm run build --prod

# Etapa de producción
FROM nginx:latest

# Copiar los archivos compilados al directorio de Nginx
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Exponer el puerto 80 para acceder al servidor web
EXPOSE 80

# Comando para iniciar el servidor Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]