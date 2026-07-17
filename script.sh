# Switch to devops-with-kubernete dir.
cd && cd devops-with-kubernetes

# Delete previously created images.
docker rmi log-generator
docker rmi log-reader
docker rmi pingpong

# Build the images.
docker compose -f log_output/compose.yaml build
docker compose -f pingpong/compose.yaml build

# Import the images into the k3d cluster.
k3d image import log-generator -c <cluster-name>
k3d image import log-reader -c <cluster-name>
k3d image import pingpong -c <cluster-name>

# List the namespaces in the cluster.
kubectl get namespaces
kubectl config set-context --current --namespace=exercises

# Delete all resources associated with the "exercises" namespace, if they exist.
kubectl delete -f log_output/manifests/namespace.yaml

# Apply the updated manifests, including namespace.yaml.
kubectl apply -f log_output/manifests/namespace.yaml
kubectl apply -f pingpong/manifests
kubectl apply -f log_output/manifests

