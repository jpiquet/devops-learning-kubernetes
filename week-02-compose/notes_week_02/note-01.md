Consolider le Dockerfile:

Un Docker construit son image couche par couche donc l'ordre des instructions est très importante.
Ce qui change rarement en haut et ce qui change moins en bas.

Par exemple, etant donné que le code change il est important de mettre l'instruction de COPY apres les dépendances.

Dockerignore:
Le `.dockerignore` est utilisé pour ignorer certain fichiers lors du build donc de ne pas les inclure dans l'image lorsqu'on va utiliser COPY par exemple.

Multistage-build:

Le Multistage-build utilise plusieurs FROM. Il sert notement a compiler un programme avec ses dependance son compilateur etc.. Et copier le binaire pour l'executer dans un nouvel environnement.
Cela va réduire la taille de l'image (voir Dockerfile.multistage).

Executer en root:

Pour executé en non-root on va de preference donné les droits a l'utilisateur dès la COPY.
`COPY --chown=user:group`
A savoir que node porte l'utilisatuer node prêt a l'emploi.