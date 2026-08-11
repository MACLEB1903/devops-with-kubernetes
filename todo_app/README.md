# 3.6 The Project, Step 15

Setup automatic deployment for the project as well.

If your pod uses a Persistent Volume Claim access mode ReadWriteOnce(opens in a new tab), you may need to consider the deployment strategy(opens in a new tab), since the default (RollingUpdate) may cause problems. Read more from the documentation(opens in a new tab). The other option is to use an access mode(opens in a new tab) that allows many pods to mount the volume.
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