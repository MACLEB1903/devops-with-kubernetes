cd && cd devops-with-kubernetes

# Build the images.
docker compose -f log_output/compose.yaml up --build
docker compose -f pingpong/compose.yaml up --build

# Import the images to the k3d cluster.
k3d image import log-generator -c <cluster-name>
k3d image import log-reader -c <cluster-name>
k3d image import pingpong -c <cluster-name>

# Apply the k8s manifests.
kubectl apply -f log_output/manifests
kubectl apply -f pingpong/manifests