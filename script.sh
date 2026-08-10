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
docker compose -f todo_app/compose.yaml build

# Log in using the ACR resource name, not its full domain.
az acr login --name theprojectstep14acr

# Tag the local images for ACR.
docker tag image-worker:latest \
  theprojectstep14acr.azurecr.io/image-worker:latest

docker tag wikipedia-worker:latest \
  theprojectstep14acr.azurecr.io/wikipedia-worker:latest

docker tag image-backend:latest \
  theprojectstep14acr.azurecr.io/image-backend:latest

docker tag todo-frontend:latest \
  theprojectstep14acr.azurecr.io/todo-frontend:latest

docker tag todo-backend:latest \
  theprojectstep14acr.azurecr.io/todo-backend:latest

# Push the images to ACR.
docker push theprojectstep14acr.azurecr.io/image-worker:latest
docker push theprojectstep14acr.azurecr.io/wikipedia-worker:latest
docker push theprojectstep14acr.azurecr.io/image-backend:latest
docker push theprojectstep14acr.azurecr.io/todo-frontend:latest
docker push theprojectstep14acr.azurecr.io/todo-backend:latest

# Connect kubectl to the AKS cluster.
az aks get-credentials \
  --resource-group e3.5-the-project-step-14\
  --name tps14-aks \
  --overwrite-existing

kubectl apply -k todo_app/manifests