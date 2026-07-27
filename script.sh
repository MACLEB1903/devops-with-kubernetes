# Switch to devops-with-kubernete dir.
cd && cd devops-with-kubernetes

# Delete previously created images.
docker rmi postgres:16-alpine
docker rmi pingpong-backend

# Build the images.
docker compose -f pingpong/compose.yaml build

# Import the images into the k3d cluster.
k3d image import pingpong-backend -c <cluster-name>

# List the namespaces in the cluster.
kubectl get namespaces
kubectl config set-context --current --namespace=exercises

# Delete all resources associated with the "project" namespace, if they exist.
kubectl delete -f pingpong/manifests/namespace.yaml

# Apply the updated manifests, including namespace.yaml.
kubectl apply -f pingpong/manifests/namespace.yaml
kubectl apply -f pingpong/manifests

