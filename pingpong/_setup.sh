#!/bin/bash

# Navigate to the exercise directory.
cd && cd devops-with-kubernetes/pingpong

# Create a cluster to isolate the exercise.
k3d cluster create exercise-1-9
k3d cluster list

# Build the Docker image.
docker build --progress=plain -t pingpong .
docker images | grep pingpong

# Import the Docker image into the cluster.
k3d image import pingpong -c exercise-1-9