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
az acr login --name dwkacr

# Tag the local images for ACR.
docker tag todo-backend:latest \
  dwkacr.azurecr.io/todo-backend:latest

docker tag todo-frontend:latest \
  dwkacr.azurecr.io/todo-frontend:latest

docker tag todo-backup:latest \
  dwkacr.azurecr.io/todo-backup:latest

# Push the images to ACR.
docker push dwkacr.azurecr.io/todo-backend:latest
docker push dwkacr.azurecr.io/todo-frontend:latest
docker push dwkacr.azurecr.io/todo-backup:latest

# Connect kubectl to the AKS cluster.
az aks get-credentials \
  --resource-group e3.10-the-project-step-18 \
  --name dwk-aks \
  --overwrite-existing

printf '%s' "$(terraform output -raw BACKUP_BLOB_SAS_URL)" | base64 -w 0; echo

kubectl create namespace e3-10-the-project-step-18
kubectl config set-context --current --namespace=e3-10-the-project-step-18
kubectl apply -k todo_app/manifests
