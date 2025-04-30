FROM nginx:alpine

# Copiar los archivos pre-compilados directamente
COPY dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]