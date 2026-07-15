# Change directoty to devops-with-kubernetes
cd && cd devops-with-kubernetes

# Delete existing images.
docker rmi log-generator
docker rmi log-reader
docker rmi pingpong

# Delete previous existing manifests.
kubectl delete -f log_output/manifests/
kubectl delete -f pingpong/manifests/

# Build the images and import the the k3d cluster.
docker compose -f log_output/compose.yaml build
docker compose -f pingpong/compose.yaml build

k3d image import log-generator -c log-output
k3d image import log-reader -c log-output
k3d image import pingpong -c log-output

# Apply the manifests.
kubectl apply -f log_output/manifests/
kubectl apply -f pingpong/manifests/