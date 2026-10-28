FROM	node:24-alpine

WORKDIR /app

COPY	app/package.json app/package-lock.json .

RUN	npm ci --omit=dev && npm cache clean --force

# Copy with non-root user
COPY	--chown=node:node app/server.js .

USER	node

EXPOSE	3000

CMD	["node", "server.js"]