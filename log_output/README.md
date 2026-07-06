# 1.1 Getting started

This project is for [Exercise 1.1: Getting Started](https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-2/first-deploy) of the University of Helsinki's [DevOps with Kubernetes](https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026). It aims to create an application that generates a random string on startup, stores this string in memory, and outputs it every 5 seconds with a timestamp as follows:

```
2020-03-30T12:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
2020-03-30T12:15:22.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
```

### How to run:

To run this application, execute the following commands in your preferred terminal or command-line interface.

```bash
# Build the Docker image.
docker build -t log-output .
```

```bash
# Import the image to the local k3d cluster.
k3d image import log-output -c <cluster-name>
```

```bash
# Deploy the application.
kubectl apply -f deployment.yaml
```

```bash
# Get the pod name.
kubectl get pods
```

```bash
# Follow the logs from the pod.
kubectl logs -f <pod-name>
```

<br>

# 1.3 Declarative approach

This project is for [Exercise 1.3: Declarative approach](https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-2/first-deploy) of the University of Helsinki's [DevOps with Kubernetes](https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026). In your "Log output" application, create a folder for manifests and move your deployment into a declarative file.

### How to run:

To run this application, execute the following commands in your preferred terminal or command-line interface.

```bash
# Deploy the application.
kubectl apply -f manifests/deployment.yaml
```

<br>

# [1.7 External access with Ingress]

Add an endpoint to request the current status (timestamp and the random string) and an Ingress so that you can access it with a browser.

### How to run:

To run this application, execute the following commands in your preferred terminal or command-line interface.

```bash
# Expose the cluster load balancer port.
k3d cluster edit <cluster-name> --port-add "3000:80@loadbalancer"
```

```bash
# Build the image using Compose, then import it into the cluster.
docker compose up --build
k3d image import log-output -c <cluster-name>
```

```bash
# Deploy the Kubernetes manifests.
kubectl apply -f manifests/
```

```
# Open the application in your browser.
http://localhost:3000
```

<br>

# 1.10 Even more services

Split the "Log output" application into two different containers within a single pod:

- One generates a random string on startup and writes a line with the random string and timestamp every 5 seconds into a file.
- The other reads that file and provides the content in the HTTP GET endpoint for the user to see.

### How to run:

To run this application, execute the following commands in your preferred terminal or command-line interface.

```bash
# Expose the cluster load balancer port.
k3d cluster edit <cluster-name> --port-add "3000:80@loadbalancer"
```

```bash
# Build the image using Compose, then import it into the cluster.
docker compose up --build
k3d image import log-generator -c <cluster-name>
k3d image import log-reader -c <cluster-name>
```

```bash
# Deploy the Kubernetes manifests.
kubectl apply -f manifests/
```

```
# Open the application in your browser.
http://localhost:3000
```
