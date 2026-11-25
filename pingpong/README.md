# Exercise 1.11: Persisting Data

Let's share data between `Ping-pong` and `Log output` applications using persistent volumes.

Create both a `PersistentVolume` and `PersistentVolumeClaim` and alter the Deployment to utilize it. As PersistentVolumes are often maintained by cluster administrators rather than developers and those are not application specific you should keep the definition for those separated, perhaps in own folder.

Save the number of requests to the `Ping-pong` application into a file in the volume and output it with the timestamp and the random string when sending a request to our `Log output` application. In the end, the two pods should share a persistent volume between the two applications. So the browser should display the following when accessing the `Log output` application:

```bash
2020-03-30T12:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43.
Ping / Pongs: 3
```

---

### How to run:

To run this application, execute the following commands in your command-line.

```bash
# Run the setup script for log-output.
cd && cd devops-with-kubernetes/log-output
chmod +x ./_setup.sh
./_setup.sh

# Run the setup script for pingpong.
cd && cd devops-with-kubernetes/pingpong
chmod +x ./_setup.sh
./_setup.sh

# Create a directory on the Kubernetes node for the PersistentVolume.
docker exec k3d-exercise-1-11-server-0 mkdir -p /tmp/kube

# Deploy the log-output to Kubernetes.
cd && cd devops-with-kubernetes/log-output
kubectl apply -f manifests/

# Deploy the pingpong to Kubernetes.
cd && cd devops-with-kubernetes/pingpong
kubectl apply -f manifests/

#Expose port 80 of the k3d cluster on host port 4000.
k3d cluster edit exercise-1-11 --port-add "4000:80"@loadbalancer

#Expose port 80 of the k3d cluster on host port 3000.
k3d cluster edit exercise-1-11 --port-add "3000:80"@loadbalancer
```

### How to test:

To test this application, execute the following commands in your command-line.

```bash
# 1. Open http://localhost:3000/pingpong in your browser, or
#    curl localhost:3000/pingpong
#    You should see output similar to the following:
#
#    PONG: 0
#
# 2. Open http://localhost:4000/ in your browser, or
#    curl localhost:3000/pingpong
#    You should see output similar to the following:
#
#   2026-11-25T19:59:41.472Z: 6dee6d6d-04bc-4b87-932e-871deea9e36e
#   Ping / Pong: 42
```

---

### How to clean up:

After completing the exercise, follow the instructions below to clean up the resources used.

```bash
cd && cd devops-with-kubernetes/log-output
chmod +x ./_cleanup.sh
./_cleanup.sh

cd && cd devops-with-kubernetes/pingpong
chmod +x ./_cleanup.sh
./_cleanup.sh
```
