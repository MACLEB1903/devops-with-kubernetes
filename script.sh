# Change directoty to devops-with-kubernetes
cd && cd devops-with-kubernetes

# Delete previous existing manifests
kubectl delete -f todo_app/manifests/

# Build the images and import the the k3d cluster
docker compose -f todo_app/compose.yaml build

k3d image import todo-api:latest -c todo-app
k3d image import todo-fetcher:latest -c todo-app
k3d image import todo-frontend:latest -c todo-app

# Apple the manifests
kubectl apply -f todo_app/manifests/
