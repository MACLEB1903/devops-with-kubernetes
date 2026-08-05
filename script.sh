# Switch to devops-with-kubernete dir.
cd && cd devops-with-kubernetes

# Delete previously created images.
docker rmi postgres:16-alpine
docker rmi pingpong-backend

# Build the images.
docker compose -f pingpong/compose.yaml build

# Create Azure resources (resource group, ACR, AKS, and role assignment) using Terraform.
terraform init
terraform plan
terraform apply --auto-approve

# Push the image to the azure container registry.
docker tag pingpong-backend <acr-name>.azurecr.io/pingpong-backend
docker push <arc-name>.azurecr.io/pingpong-backend:latest

# Login and connect local kubectl to the AKS cluster.
az login
az aks get-credentials \
  --resource-group pingpong\
  --name pingpongakc \
  --overwrite-existing

# Apply the updated manifests, including namespace.yaml.
kubectl apply -f pingpong/manifests/namespace.yaml
kubectl apply -f pingpong/manifests
