# 1.9 More services

This project is for [1.9 More services](courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026/chapter-2/first-deploy) of the University of Helsinki's [DevOps with Kubernetes](https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes-2026). It aims to develop a second application that simply responds with "pong 0" to a GET request and increases a counter (the 0) so that you can see how many requests have been sent. The counter should be in memory so it may reset at some point. Create a new deployment for it and have it share ingress with "Log output" application. Route requests directed '/pingpong' to it.

### How to run:

To run this application, execute the following commands in your preferred terminal or command-line interface.

```bash
# Build the Docker image.
docker compose up --build
```

```bash
# Import the image into the same cluster used by the log-output app.
k3d image import pingpong -c <cluster-name>
```

```bash
# Deploy the application.
kubectl apply -f manifests/
```

```
# Open the application in your browser.
# Note: the log-output cluster must expose 3000:80@loadbalancer.
http://localhost:3000/pingpong
```
