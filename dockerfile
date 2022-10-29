FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000 6006

ENTRYPOINT [ "yarn", "run" ] 
CMD ["dev"]