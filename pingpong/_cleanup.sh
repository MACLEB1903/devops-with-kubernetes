#!/bin/bash

# Navigate to the exercise directory.
cd && cd devops-with-kubernetes/pingpong

# Delete the Kubernetes cluster created for this exercise.
k3d cluster delete exercise-1-11

# Remove the locally built Docker image.
docker rmi pingpong:latest