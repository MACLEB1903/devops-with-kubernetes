#!/usr/bin/env bash

# Delete all the resources tied to namespace "exercises" if existent.
kubectl delete -f todo_app/manifests/namespace.yaml

# Apply the updated manifests, including namespace.yaml.
kubectl apply -f todo_app/manifests/namespace.yaml
kubectl apply -f todo_app/manifests