FROM node

RUN npm install -g vuepress

WORKDIR /home/node/app

CMD bash