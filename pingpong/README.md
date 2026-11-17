# Exercise 1.9: More Services

Develop a second application that simply responds with `pong 0` to a `GET` request and increases a counter (the 0) so that you can see how many requests have been sent. The counter should be in memory so it may reset at some point. Create a new deployment for it and have it share ingress with `Log output` application. Route requests directed `/pingpong` to it.

In future exercises, this second application will be referred to as `ping-pong application`. It will be used with `Log output`application.

The ping-pong application will need to listen to requests on `/pingpong`, so you may have to make changes to its code. This can be avoided by configuring the Ingress to rewrite the path, but we will leave that as an optional exercise. You can check out [this](https://kubernetes.io/docs/concepts/services-networking/ingress/#the-ingress-resource).

---

### How to run:

To run this application, execute the following commands in your command-line.

```bash
# Run the application setup script.
chmod +x ./_setup.sh
./_setup.sh

# Deploy the application to Kubernetes.
kubectl apply -f manifests/

#Expose port 80 of the k3d cluster on host port 3000.
k3d cluster edit exercise-1-9 --port-add "3000:80"@server:0
```

### How to test:

To test this application, execute the following commands in your command-line.

```bash
# 1. Open http://localhost:3000/pingpong in your browser, or
#    run curl http://localhost:3000/pingpong in your terminal.
# 2. You should see output similar to the following:
# PONG: 0
```

---

### How to clean up:

After completing the exercise, follow the instructions below to clean up the resources used.

```bash
chmod +x ./_cleanup.sh
./_cleanup.sh
```
