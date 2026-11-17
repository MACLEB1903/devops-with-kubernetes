# Exercise 1.8: The Project, Step 5

Switch to using Ingress instead of `NodePort` to access the project. You can delete the Ingress of the `Log output` application so they don't interfere with this exercise. We'll look more into paths and routing in the next exercise, and at that point, you can configure the project to run with the `Log output` application side by side.

---

### How to run:

To run this application, execute the following commands in your command-line.

```bash
# Run the application setup script.
chmod +x ./_setup.sh
./_setup.sh

# Deploy the application to Kubernetes.
kubectl apply -f manifests/

#Expose port 80 of the k3d cluster on host port 8080.
k3d cluster edit exercise-1-8 --port-add "8080:80"@loadbalancer
```

---

### How to test:

To test this application, execute the following commands in your command-line.

```bash
# 1. Open http://localhost:8080 in your browser.
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
