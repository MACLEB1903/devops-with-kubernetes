#!/usr/bin/env bash

# Exit when changing directory fails.
cd ~/devops-with-kubernetes

# Delete existing images.
docker rmi image-worker
docker rmi image-backend
docker rmi todo-frontend
docker rmi todo-backend

# Delete previously applied manifests.
kubectl delete -f todo_app/manifests

# Build the images.
docker compose -f todo_app/compose.yaml build

# Import the images into the k3d cluster.
k3d image import image-worker -c <cluster-name>
k3d image import image-backend -c <cluster-name>
k3d image import todo-frontend -c <cluster-name>
k3d image import todo-backend -c <cluster-name>

# Apply the manifests.
kubectl apply -f todo_app/manifests/