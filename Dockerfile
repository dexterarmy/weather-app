FROM ubuntu:20.04
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app

RUN apt update -y
RUN apt upgrade -y 
RUN apt install curl -y
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g @angular/cli -y
RUN npm install --pure-lockfile
COPY . /app

CMD ng serve --host 0.0.0.0 --disable-host-check
EXPOSE 4200

# docker run -itd -p 4200:4200 --name mohit weather
