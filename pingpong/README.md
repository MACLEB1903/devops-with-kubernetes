# 3.1 Pingpong GKE

Deploy Ping-pong application into GKE. In this exercise use a LoadBalancer service to expose the service.

### How to run:

To run this application, execute the following commands in your command-line.

Make sure you have Terraform installed before continuing. Follow the official [HashiCorp installation guide.](https://developer.hashicorp.com/terraform/install?utm_source=chatgpt.com)

```bash
# Run the script.
# NOTE: Remember to update `<arc-name>` on the terraform/variables.tf
# NOTE: Remember to update `<arc-name>` on the script.sh
./script.sh
```

### How to test:

To test this application, execute the following commands in your command-line.

```bash
# Get the EXTERNAL-IP address.
kubectl get svc

# You should see a similar response:
NAME               TYPE           CLUSTER-IP      EXTERNAL-IP    PORT(S)          AGE
pingpong-api-svc   LoadBalancer   10.240.15.87    203.0.113.42   8080:31456/TCP   5m12s
pingpong-db-svc    ClusterIP      10.240.18.22    <none>         5432/TCP         5m12s
```

```bash
# Open the pingpong-api-svc EXTERNAL-IP address in your browser. 
http://203.0.113.42/pingpong
```

```bash
# NOTE: Remember to destroy the resources afterward.
terraform destroy
```


