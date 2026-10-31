# Exercise 1.3: Declarative Approach

In your `"Log output"` application, create a folder for manifests and move your deployment into a declarative file.

Make sure everything still works by restarting and following logs.

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

kubect
---

### How to test:

To test this application, execute the following commands in your command-line.

```bash
# View the application logs.
kubectl logs deployments/log-output -f

# You should see output similar to the following:
2026-10-31T05:03:23.373Z: e3b57820-a191-4c23-91d0-051a6dd70dd0
2026-10-31T05:03:28.376Z: 5a9ba961-3d97-4891-812b-30c87c96a6e8
2026-10-31T05:03:33.379Z: e094886b-bc88-4949-81bf-e09f14518e59
```

---

### How to clean up:

After completing the exercise, follow the instructions below to clean up the resources used.

```bash
chmod +x ./_cleanup.sh
./_cleanup.sh
```
