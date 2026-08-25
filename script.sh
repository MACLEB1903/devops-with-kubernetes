# Switch to the project directory.
cd ~/devops-with-kubernetes

# Log in before Terraform accesses Azure.
az login --use-device-code

# Create the resource group, ACR, AKS cluster, and role assignment.
cd terraform

terraform init
terraform plan
terraform apply --auto-approve

cd ..

# Build the application images.
docker compose -f log_output/compose.yaml build
docker compose -f pingpong/compose.yaml build

# Log in using the ACR resource name, not its full domain.
az acr login --name dwkacr

# Tag the local images for ACR.
docker tag log-generator:latest \
  dwkacr.azurecr.io/log-generator:latest

docker tag log-reader:latest \
  dwkacr.azurecr.io/log-reader:latest

docker tag pingpong-backend:latest \
  dwkacr.azurecr.io/pingpong-backend:latest

# Push the images to ACR.
docker push dwkacr.azurecr.io/log-generator:latest
docker push dwkacr.azurecr.io/log-reader:latest
docker push dwkacr.azurecr.io/pingpong-backend:latest

# Connect kubectl to the AKS cluster.
az aks get-credentials \
  --resource-group e4-1-readiness-probe \
  --name dwk-aks \
  --overwrite-existing

# Apply the manifests
kubectl create namespace exercises
kubectl config set-context --current --namespace=exercises
kubectl apply -k log_output/manifests
kubectl apply -k pingpong/manifests