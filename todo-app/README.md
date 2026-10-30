# Exercise 1.2: The Project, Step 1

Create a web server that outputs `Server started in port NNNN` when it is started and deploy it into your Kubernetes cluster. Please make it so that an environment variable `PORT` can be used to choose the used port. You may call the server todo app since it will, amongst other things, provide the functionality of a todo application pretty soon.

You will not have access to the port when it is running in Kubernetes yet. We will configure the access when we get to networking.

---

### How to run:

To run this application, execute the following commands in your command-line.

```bash
# Run the application setup script.
chmod +x ./_setup.sh
./_setup.sh

# Deploy the application to Kubernetes.
kubectl run todo-app \
  --image=todo-app:latest \
  --image-pull-policy=IfNotPresent \
  --env=PORT=8080

# Forward local port 3000 to port 8080 inside the Kubernetes Pod.
kubectl port-forward todo-app 3000:8080
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
