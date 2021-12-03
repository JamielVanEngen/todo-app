#!/bin/sh
echo Building todo-app

docker build -t todo-app-build:latest . -f Dockerfile.build

docker create --name extract todo-app-build:latest

docker cp extract:/app/dist/todo-app ./app

docker rm -f extract

echo Building server:latest

docker build -t todo-app:latest . -f Dockerfile.deploy