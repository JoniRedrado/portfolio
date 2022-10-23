FROM node:14.19.3-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm build
RUN npm install -g serve
EXPOSE 3000
CMD ["npm", "start"]
