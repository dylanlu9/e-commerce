#!/bin/bash
TAG=${1-latest}
REPO=${2-latest}
IMAGE_NAME="helio-e-commerce-api"
DIRECTORY="."

cat config/docker_login | docker login --username AWS --password-stdin $REPO
echo "Building image $IMAGE_NAME from directory $DIRECTORY"
docker build -t $IMAGE_NAME:$TAG $DIRECTORY
docker tag $IMAGE_NAME:$TAG $REPO/$IMAGE_NAME:$TAG
docker push $REPO/$IMAGE_NAME:$TAG
echo "Done"
