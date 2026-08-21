# 3.10 The Project, Step 18

In part 3 we did a Job that made a backup of our Database using the command pg_dump. Unfortunately, the backup was not saved anywhere. Create now a CronJob that makes a backup of your todo database (once per 24 hours) and saves it to Google Object Storage(opens in a new tab).

In this exercise, you can create the secret for the cloud access from the command line, thus, there is no need to create it in the GitHub action.

### How to run:

NOTE: This exercise uses Azure resources and Terraform. Make sure you have an active Azure account, an available subscription, and permission to create resources. To install Terraform, follow the official [HashiCorp installation guide.](https://developer.hashicorp.com/terraform/install?utm_source=chatgpt.com)

To run this application, execute the following commands in your command-line.

```bash
# Run the script.
./script.sh
```

```bash
# Add the BLOB_URL to the secret.yaml bu running:
printf '%s' "$(terraform output -raw BACKUP_BLOB_SAS_URL)" | base64 -w 0; echo
```

### How to test:

To test this application, execute the following commands in your command-line.

```bash
# Get the ingress ADDRESS in the e3-8-the-project-step-17 namespace.
kubectl get ingress -n e3-10-the-project-step-18

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