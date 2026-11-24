#!/bin/bash

# Navigate to the exercise directory.
cd && cd devops-with-kubernetes/log-output

# Create a cluster to isolate the exercise.
k3d cluster create exercise-1-10
k3d cluster list

# Build the Docker images.
docker compose --progress=plain build
docker images | grep log-generator
docker images | grep log-reader

# Import the Docker images into the cluster.
k3d image import log-generator -c exercise-1-10
k3d image import log-reader -c exercise-1-10