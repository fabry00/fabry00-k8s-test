FROM node:12

WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get install -y libgl1-mesa-dev

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
RUN npm install --unsafe-perm
RUN npm run build
CMD [ "npm", "run", "start:prod" ]
