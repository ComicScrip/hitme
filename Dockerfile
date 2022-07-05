FROM node:14.15

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm i -g pnpm
RUN pnpm i

COPY . .

CMD [ "npm", "start" ]