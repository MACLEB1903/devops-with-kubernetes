#!/bin/bash

# Navigate to the exercise directory.
cd && cd devops-with-kubernetes/todo-app

# Create a cluster to isolate the exercise.
k3d cluster create exercise-1-2
k3d cluster list

# Build the Docker image.
docker build --progress=plain -t todo-app .
docker images | grep todo-app

# Import the Docker image into the cluster.
k3d image import todo-app:latest -c exercise-1-2