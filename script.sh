cd && cd devops-with-kubernetes

# Delete previously created images.
docker rmi image-worker
docker rmi image-backend
docker rmi todo-frontend
docker rmi todo-backend
docker rmi postgres:16-alpine

# Build the images.
docker compose -f todo_app/compose.yaml build

# Import the images into the k3d cluster.
k3d image import image-worker -c <cluster-name>
k3d image import image-backend -c <cluster-name>
k3d image import todo-frontend -c <cluster-name>
k3d image import todo-backend -c <cluster-name>

# Delete all resources associated with the "project" namespace, if they exist.
kubectl delete -f todo_app/manifests/namespace.yaml

# Create the namespace "project".
kubectl apply -f todo_app/manifests/namespace.yaml

# Set the current namespaces to "project" in the cluster.
kubectl config set-context --current --namespace=project
kubectl get namespaces

# Apply the updated manifests.
kubectl apply -f todo_app/manifests
