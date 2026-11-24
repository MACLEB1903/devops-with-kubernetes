#!/bin/bash

# Navigate to the exercise directory.
cd && cd devops-with-kubernetes/log-output

# Delete the Kubernetes cluster created for this exercise.
k3d cluster delete exercise-1-10

# Remove the locally built Docker images.
docker rmi log-generator:latest
docker rmi log-reader:latest