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
docker compose -f pingpong/compose.yaml build
docker compose -f log_output/compose.yaml build

# Log in using the ACR resource name, not its full domain.
az acr login --name backtoingressacr

# Tag the local images for ACR.
docker tag pingpong-backend:latest \
  backtoingressacr.azurecr.io/pingpong-backend:latest

docker tag log-generator:latest \
  backtoingressacr.azurecr.io/log-generator:latest

docker tag log-reader:latest \
  backtoingressacr.azurecr.io/log-reader:latest

# Push the images to ACR.
docker push backtoingressacr.azurecr.io/pingpong-backend:latest
docker push backtoingressacr.azurecr.io/log-generator:latest
docker push backtoingressacr.azurecr.io/log-reader:latest

# Connect kubectl to the AKS cluster.
az aks get-credentials \
  --resource-group e3.2-back-to-ingress \
  --name backtoingressaks \
  --overwrite-existing

# Enable the AKS Application Routing Ingress controller.
az aks approuting enable \
  --resource-group e3.2-back-to-ingress \
  --name backtoingressaks

# Confirm the IngressClass exists.
kubectl get ingressclass

# Create the namespace first.
kubectl apply -f log_output/manifests/namespace.yaml

# Deploy Ping-pong first because Log Output calls it.
kubectl apply -f pingpong/manifests

# Deploy Log Output and its Ingress.
kubectl apply -f log_output/manifests

# Verify the resources.
kubectl get pods,svc,ingress -n exercises