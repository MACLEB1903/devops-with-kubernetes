# Exercise 1.5: The Project, Step 3

Make the project respond something to a `GET` request sent to the / url of the project. A simple HTML page is good, or you can deploy something more complex, like a single-page application.

See [here](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/) how you can define environment variables for containers.

Use `kubectl port-forward` to confirm that the project is accessible and works in the cluster by using a browser to access the project.

---

### How to run:

To run this application, execute the following commands in your command-line.

```bash
# Run the application setup script.
chmod +x ./_setup.sh
./_setup.sh

# Deploy the application to Kubernetes.
kubectl apply -f manifests/deployments.yaml

# Forward local port 3000 to port 8080 in the Pod.
kubectl port-forward deployments/todo-app 3000:8080
```

---

### How to test:

To test this application, execute the following commands in your command-line.

```bash
# 1. Open http://localhost:3000 in your browser.
# 2. You should see the following output:
# Server started in port 8080
```

---

### How to clean up:

After completing the exercise, follow the instructions below to clean up the resources used.

```bash
# Run the application clean up script.
chmod +x ./_cleanup.sh
./_cleanup.sh
```
