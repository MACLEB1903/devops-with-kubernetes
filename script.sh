# Switch to the project directory.
cd ~/devops-with-kubernetes

# Log in before Terraform accesses Azure.
az login --use-device-code

# Create the resource group, ACR, AKS cluster, and role assignment.
cd terraform

terraform init
terraform plan
terraform apply --auto-approve

# Connect kubectl to the AKS cluster.
az aks get-credentials \
--resource-group e3.7-the-project-step-16 \
--name tps16-aks --overwrite-existing

# Log the azure credentials.
AZURE_TENANT_ID=$(az account show --query tenantId -o tsv)
AZURE_SUBSCRIPTION_ID=$(az account show --query id -o tsv)

printf "\nAZURE_TENANT_ID = $AZURE_TENANT_ID
AZURE_SUBSCRIPTION_ID = $AZURE_SUBSCRIPTION_ID"

printf "\n\nAdd the following variables as GitHub Secrets:\n"
printf "AZURE_CLIENT_ID\nAZURE_TENANT_ID\nAZURE_SUBSCRIPTION_ID\n"