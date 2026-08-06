# 3.2 Back to Ingress

Deploy the "Log output" and "Ping-pong" applications to GKE, exposing them via Ingress. Ensure "Ping-pong" responds correctly from the /pingpong path, which may involve code modifications. Remember that Ingress requires a successful response from the root path (/) even if mapped to a different path.

### How to run:

NOTE: This exercise uses Azure resources and Terraform. Make sure you have an active Azure account, an available subscription, and permission to create resources. To install Terraform, follow the official [HashiCorp installation guide.](https://developer.hashicorp.com/terraform/install?utm_source=chatgpt.com)

To run this application, execute the following commands in your command-line.



```bash
# Run the script.
./script.sh
```

### How to test:

To test this application, execute the following commands in your command-line.

```bash
# Get the ingress ADDRESS in the 'exercises' namespace.
kubectl get ingress -n exercises

# You should see a similar response:
NAME                 CLASS                                HOSTS   ADDRESS        PORTS   AGE
log-output-ingress   webapprouting.kubernetes.azure.com   *       10.234.56.78   80      1m
```

```bash
# Open the log-output-ingress ADDRESS address in your browser. 
http://10.234.56.78/
http://10.234.56.78/pingpong
```

```bash
# NOTE: Remember to destroy the resources afterward.
cd terraform
terraform destroy --auto-approve
```