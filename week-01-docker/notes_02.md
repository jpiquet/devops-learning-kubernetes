Le but était de faire un docker-compose en rajoutant une db postgre.

La difficulté était de retrouver la bonne maniere d'écrire un docker-compose.

Petit probleme avec l'URL de la database : DATABASE_URL: postgres://${DB_USER}:${DB_PWD}@db:5432/${DB_NAME}

Ce que j'ai appris: le --build permet de reconstruire les images qui ont le build:
Si on les mets pas, meme si on a modifier le Dockerfile ca ne va pas rebuilt l'image.