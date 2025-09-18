FROM node:24-alpine AS build_image
WORKDIR /app/react-app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:24-alpine AS production_image
WORKDIR /app/react-app

COPY --from=build_image /app/react-app/dist/ /app/react-app/dist/
EXPOSE 4173

COPY package.json .
COPY vite.config.js .

RUN npm install --production=false

CMD ["npm", "run", "preview"]