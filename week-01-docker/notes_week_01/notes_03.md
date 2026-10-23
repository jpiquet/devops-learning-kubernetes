Objectif: Pousser l'image dans un dépot privé DockerHub.

Cette commande crée un deuxième nom (un alias) qui pointe vers la même image locale.
`docker tag docker-app jpiquet/docker-app:v1.0`

```bash
docker tag   docker-app   jpiquet/docker-app:v1.0
             └─ source ─┘  └──────── cible ────────┘
```