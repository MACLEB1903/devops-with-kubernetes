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
