FROM node:18-alpine
WORKDIR /app
COPY . .
ENV config="none"
RUN npm install
CMD npm start