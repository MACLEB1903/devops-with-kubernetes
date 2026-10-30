#!/bin/bash

# Navigate to the exercise directory.
cd && cd devops-with-kubernetes/todo-app

# Delete the Kubernetes cluster created for this exercise.
k3d cluster delete exercise-1-2

# Remove the locally built Docker image.
docker rmi todo-app:latest