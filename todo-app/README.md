# Exercise 1.6: The Project, Step 4

Use a NodePort Service to enable access to the project.

---

### How to run:

To run this application, execute the following commands in your command-line.

```bash
# Run the application setup script.
chmod +x ./_setup.sh
./_setup.sh

# Deploy the application to Kubernetes.
kubectl apply -f manifests/
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
