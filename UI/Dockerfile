FROM node:17.7.2-bullseye

ENV NODE_OPTIONS=--openssl-legacy-provider

ARG app_path=/app
WORKDIR ${app_path}

# add `node_modules/.bin` to $PATH
ENV PATH ${app_path}/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
COPY public ./public
COPY src ./src

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
