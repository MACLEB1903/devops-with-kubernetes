#!/bin/bash

# Navigate to the exercise directory.
cd && cd devops-with-kubernetes/log-output

# Create a cluster to isolate the exercise.
k3d cluster create exercise-1-3
k3d cluster list

# Build the Docker image.
docker build --progress=plain -t log-output .
docker images | grep log-output

# Import the Docker image into the cluster.
k3d image import log-output -c exercise-1-3