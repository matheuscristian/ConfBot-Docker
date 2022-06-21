FROM node:18-alpine
WORKDIR /app
COPY . .
ENV token="none"
RUN npm install
CMD npm start