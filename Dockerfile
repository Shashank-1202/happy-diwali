FROM ubuntu:24.04

RUN apt update -y && apt install -y nginx && apt clean && rm -rf /var/lib/apt/lists/*

COPY app /var/www/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
