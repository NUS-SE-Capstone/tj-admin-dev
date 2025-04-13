#FROM nginx
#LABEL maintainer="w"
#ARG PACKAGE_PATH=./dist/
#ADD ${PACKAGE_PATH:-./} /usr/share/nginx/html/
#ADD ./deploy/nginx.conf /etc/nginx/nginx.template
#CMD envsubst '$NGINX_HOST $NGINX_PORT' < /etc/nginx/nginx.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'
FROM nginx
LABEL maintainer="w"
 
COPY ./dist/  /usr/share/nginx/html/
RUN chmod -R 777 /usr/share/nginx/html/
 
CMD ["nginx", "-g", "daemon off;"]