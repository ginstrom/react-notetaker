FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./

RUN npm install
RUN npm install -g nodemon
RUN npm install --save-dev @testing-library/react @testing-library/jest-dom @types/jest

COPY . ./

EXPOSE 3000

CMD ["npm", "start"] 