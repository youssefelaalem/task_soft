FROM node:14-alpine
WORKDIR /app
COPY feed.js package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD node feed.js
#docker run -p 5000:5000  youssefelaalem/node2