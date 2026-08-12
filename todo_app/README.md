# 3.7 The Project, Step 16

Improve the deployment so that each branch creates a separate environment. The main branch should still be deployed in the namespace project. Your solution may assume that branches are named so that they are valid namespace names.

### How to run:

NOTE: This exercise uses Azure resources and Terraform. Make sure you have an active Azure account, an available subscription, and permission to create resources. To install Terraform, follow the official [HashiCorp installation guide.](https://developer.hashicorp.com/terraform/install?utm_source=chatgpt.com)

To run this application, execute the following commands in your command-line.

```bash
# Run the script.
./script.sh
```

```bash
# Add the following variables as GitHub Secrets:
# Note: These variables are available after running ./script.sh
AZURE_CLIENT_ID
AZURE_TENANT_ID
AZURE_SUBSCRIPTION_ID
```
```bash

# Push the application.

# NOTE: An error might occur if the GitHub branch name does not match the resource group name.
# client-id.tf automatically replaces "." with "-" in the resource group name.

# NOTE: In this example, we used:
#   Branch Name: e3-7-the-project-step-16
#   Resource Group Name: e3.7-the-project-step-16
```
### How to test:

To test this application, execute the following commands in your command-line.

```bash
# Get the ingress ADDRESS in the 'project' namespace.
kubectl get ingress -n project

# You should see a similar response:
NAME                 CLASS                                HOSTS   ADDRESS        PORTS   AGE
todo-ingress   webapprouting.kubernetes.azure.com  *       10.234.56.78   80      1m
```

```bash
# Open the log-output-ingress ADDRESS address in your browser. 
http://10.234.56.78/
http://10.234.56.78/todos
```


```bash
# NOTE: Remember to destroy the resources afterward.
cd terraform
terraform destroy --auto-approve
```