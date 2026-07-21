# Switch to devops-with-kubernete dir.
cd && cd devops-with-kubernetes

# Delete previously created images.
docker rmi image-worker
docker rmi image-backend
docker rmi todo-frontend
docker rmi todo-backend

# Build the images.
docker compose -f todo_app/compose.yaml build

# Import the images into the k3d cluster.
k3d image import image-worker -c <cluster-name>
k3d image import image-backend -c <cluster-name>
k3d image import todo-frontend -c <cluster-name>
k3d image import todo-backend -c <cluster-name>

# List the namespaces in the cluster.
kubectl get namespaces
kubectl config set-context --current --namespace=project

# Delete all resources associated with the "project" namespace, if they exist.
kubectl delete -f todo_app/manifests/namespace.yaml

# Apply the updated manifests, including namespace.yaml.
kubectl apply -f todo_app/manifests/namespace.yaml
kubectl apply -f todo_app/manifests

