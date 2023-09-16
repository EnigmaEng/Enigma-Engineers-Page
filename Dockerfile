# aqui se usa la imagen oficial de nginx para servir el sitio web 
FROM nginx:latest


# El comando COPY se utiliza para copiar archivos o directorios desde una ubicacion en este caso el . representa el directorio actual, significa que va a copiar todos los archivos desde el mismo directorio que se encuentra este mismo archivo Dockerfile

# Luego esta la ubicacion de destino que seria /usr/share/nginx/html, los archivos se copiaran a ese directorio del servidor web que esta dentro del contenedor usando nginx

COPY . /usr/share/nginx/html


EXPOSE 80

# Comando para ejecutar el servidor web
CMD ["nginx", "-g", "daemon off;"]