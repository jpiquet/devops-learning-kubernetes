Front et deux reseau:

On récupère l'image de nginx alpine sur Docker Hub avec le sha pour plus de sécurité:
`nginx:1.30-alpine@sha256:0e52bd054126cdc040b1276c0af347aeb02a41b9cfe305d6094767ac30e97949`

On crée 2 network dans le compose pour isolé nginx et le backend:
```yaml
networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge
```

Pour reussir l'exercice il a fallut ajouter une page index.html(qui va fetch la page localhost:3000/visits de mon API) et monter un volume sur le dossier de nginx: 
`/usr/share/nginx/html`

Lorsque j'ouvre `localhost:8080` ca me montre directement la page `/visit` de mon API (node).