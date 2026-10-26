Jeudi : Create my own registry

Objectif : héberger un registry Docker sur ta machine, y pousser ton image, puis la relancer depuis ce registry.

Difficulté: Comprendre ce qu'est un registery local.

Pour pull l'image officiel de registry: `docker run -d -p 5000:5000 --name registry registry:2.7`

The local registry purpose is to be able to push an image localy and share it with you team for exemple without pushing it on DockerHub and keep it locally.

We have to tag the image with: `docker tag ubuntu localhost:5000/ubuntu`
And then push the image: `docker push localhost:5000/ubuntu`

We can add a volume to the container "registry" to keep the image in the registry even if we stop the container.
To do this we add to docker run: `--volumes [name_of_the_volumes]:/var/lib/registry` (it has to be added every time we run the container in order to access to the volume where images are stored).

To see which image are stored in "registry" : `curl http://localhost:5000/v2/_catalog`

Tuto suivie pour ca: https://www.docker.com/blog/how-to-use-your-own-registry-2/