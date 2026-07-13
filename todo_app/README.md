# 1.2 Getting started

This project is for [Exercise 1.2. The project, step 1](courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-2/first-deploy) of the University of Helsinki's [DevOps with Kubernetes](https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026). This exercise aims to create a web server called "todo app" that reads a PORT environment variable, outputs "Server started in port NNNN" on startup (as shown below), and is deployed into Kubernetes cluster.

```
> backend@1.0.0 start
> node index.js

Server started in port 3000
```

### How to run:

To run this application, execute the following commands in your preferred terminal or command-line interface.

```bash
# Build the Docker image.
docker build -t todo .
```

```bash
# Import the image to the local k3d cluster.
k3d image import todo -c <cluster-name>
```

```bash
# Deploy the application and use the local image.
kubectl run todo --image=todo --image-pull-policy=Never
```

```bash
# Follow the logs from the pod.
kubectl logs -f todo
```

<br>

# 1.4 The project, Step 2

This project is for [Exercise 1.4: The project, Step 2](courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-2/first-deploy) of the University of Helsinki's [DevOps with Kubernetes](https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026). This exercise aims to create a deployment.yaml for the course project (that you started in Exercise 1.2.)

### How to run:

To run this application, execute the following commands in your preferred terminal or command-line interface.

```bash
# Deploy the application.
kubectl apply -f manifests/deployment.yaml
```

<br>

# 1.5 The project, Step 3

In this project, configure the application to return a webpage (or SPA) via a GET request at the / URL. Use environment variables if needed, and verify cluster access using kubectl port-forward in your browser.

### How to run:

To run this application, execute the following commands in your preferred terminal or command-line interface.

```bash
# Build the image using Compose, then import it into the cluster.
docker compose up --build
k3d image import todo -c <cluster-name>
```

```bash
# Deploy the application.
kubectl apply -f manifests/deployment.yaml
```

```bash
# Use port-forwarding to access the application.
kubectl port-forward POD_NAME 3000:3000
```

<br>

# 1.6. The project, Step 4

Instructions: Use a NodePort Service to enable access to the project.

### How to run:

To run this application, execute the following commands in your preferred terminal or command-line interface.

```bash
# Deploy the application.
kubectl apply -f manifests/service.yaml
```

# 1.8 The project, Step 5

Switch to using Ingress instead of NodePort to access the project. You can delete the Ingress of the "Log output" application so they don't interfere with this exercise. We'll look more into paths and routing in the next exercise, and at that point, you can configure the project to run with the "Log output" application side by side.

### How to run:

To run this application, execute the following commands in your preferred terminal or command-line interface.

```bash
# Expose the cluster load balancer port.
k3d cluster edit <cluster-name> --port-add "8081:80@loadbalancer"
```

```bash
# Build the image using Compose, then import it into the cluster.
docker compose up --build
k3d image import todo -c <cluster-name>
```

```bash
# Deploy the Kubernetes manifests.
kubectl apply -f manifests/
```

```
# Open the application in your browser.
# You should see "This app is built with ClusterIP and Ingress."
http://localhost:8081
```

<br>

# 1.12 The project, Step 6

To enhance the project, an hourly random image from Lorem Picsum (e.g., https://picsum.photos/1200) will be added. The image should be displayed for 10 minutes, during which it can be revisited once before a new image is shown. To avoid frequent API calls, the image should be cached in a persistent volume, ensuring accessibility even if the application crashes or the container shuts down. Testing this functionality will involve shutting down the container to observe the behavior.

### How to run:

To run this application, execute the following commands in your preferred terminal or command-line interface.

```bash
# Expose the cluster load balancer port.
k3d cluster edit <cluster-name> --port-add "3000:80@loadbalancer"
```

```bash
# Run the script to build docker images and run on the k8s cluster.
# Note: Change the <cluster-name> found in ./script.sh file.
./script.sh
```

```bash
# Open the application in your browser and see the image.
http://localhost:3000
```

### How to test:

To test this application, execute the following commands in your preferred terminal or CLI.

```bash
# Delete the current deployment.
kubectl delete -f todo_app/manifests/deployment.yaml
```

```bash
# Re-apply the manifests.
kubectl apply -f todo_app/manifests/deployment.yaml
```

```bash
# You can the see same image as before.
http://localhost:3000
```

# 1.13 The project, Step7

To enhance the project, incorporate a todo app function by adding an input field limited to 140 characters, a send button (which will not yet send todos), and a display of existing todos with some pre-defined entries.

**NOTE: TO RUN AND TEST THIS PROJECT (1.13), USE THE SAME COMMANDS AS FOR PROJECT 1.12.**
