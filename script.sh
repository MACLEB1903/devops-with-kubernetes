#!/usr/bin/env bash

# List the namespaces in the cluster.
kubectl get namespaces

# Delete all the resources tied to namespace "exercises" if existent.
kubectl delete -f log_output/manifests/namespace.yaml

# Apply the updated manifests, including namespace.yaml.
kubectl apply -f log_output/manifests/namespace.yaml
kubectl apply -f pingpong/manifests
kubectl apply -f log_output/manifests