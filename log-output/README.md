# Exercise 1.7: External Access with Ingress

"Log output" application currently outputs a timestamp and a random string (that it creates on startup) to the logs.

Add an endpoint to request the current status (timestamp and the random string) and an Ingress so that you can access it with a browser.

You can just store the random string to the memory.

---

### How to run:

To run this application, execute the following commands in your command-line.

```bash
# Run the application setup script.
chmod +x ./_setup.sh
./_setup.sh

# Deploy the application to Kubernetes.
kubectl apply -f manifests/

#Expose port 80 of the k3d cluster on host port 4000.
k3d cluster edit exercise-1-7 --port-add "4000:80"@server:0
```

## kubect

### How to test:

To test this application, execute the following commands in your command-line.

```bash
# 1. Open http://localhost:4000 in your browser, or
#    run curl http://localhost:4000 in your terminal.
# 2. You should see output similar to the following:
# 2026-11-16T20:15:29.264Z: a87fe32a-5b26-4bd0-8b66-3d87a909e4ed
```

---

### How to clean up:

After completing the exercise, follow the instructions below to clean up the resources used.

```bash
chmod +x ./_cleanup.sh
./_cleanup.sh
```
