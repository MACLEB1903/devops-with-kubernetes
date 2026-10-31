# Exercise 1.4: The Project, Step 2

Create a deployment.yaml for the course project (that you started in [Exercise 1.2](https://github.com/MACLEB1903/devops-with-kubernetes/tree/1.2).)

You won't have access to the port yet but that'll come soon.

---

### How to run:

To run this application, execute the following commands in your command-line.

```bash
# Run the application setup script.
chmod +x ./_setup.sh
./_setup.sh

# Deploy the application to Kubernetes.
kubectl apply -f manifests/deployments.yaml
```

---

### How to clean up:

After completing the exercise, follow the instructions below to clean up the resources used.

```bash
# Run the application clean up script.
chmod +x ./_cleanup.sh
./_cleanup.sh
```
