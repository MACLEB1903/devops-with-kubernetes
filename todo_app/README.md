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

```bash
# Deploy the application.
kubectl apply -f manifests/deployment.yaml
```
