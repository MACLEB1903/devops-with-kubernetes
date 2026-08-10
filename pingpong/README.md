# 3.4 Rewritten routing

Your ping-pong app now most likely needs to respond to the URL /pingpong to work in the cluster setup. It would be nice if we were not forced to reflect the cluster-level URL structures in the applications, and instead, the app itself could provide the behavior in the root path /. Thanks to the flexibility of the Gateway API, this can be easily done by route rewriting.

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
# Get the gateway ADDRESS in the 'exercises' namespace.
kubectl get gateway -n exercises

# You should see a similar response:
NAME                 CLASS              ADDRESS          PROGRAMMED   AGE
log-output-gateway   approuting-istio   10.234.567.890   True         0s
```

```bash
# Open the log-output-ingress ADDRESS address in your browser. 
http://10.234.567.890/
http://10.234.567.890/pingpong
```

```bash
# NOTE: Remember to destroy the resources afterward.
cd terraform
terraform destroy --auto-approve
```