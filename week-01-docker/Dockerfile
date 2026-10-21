FROM	node:24

WORKDIR /app

EXPOSE	3000

COPY	app/package.json ./

RUN	npm install

COPY	app/server.js .

CMD	["node", "server.js"]
