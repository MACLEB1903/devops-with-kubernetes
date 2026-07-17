# 2.3 Keep them separated

Create a namespace called exercises for the applications in the exercises. Move the "Log output" and "Ping-pong" to that namespace and use that in the future for all of the exercises, except the project that shall have a separate namespace. You can follow the course material using the default namespace.

### How to run:

**NOTE: This exercise focuses on creating namespaces. To build the application, first follow the installation guide from exercise [2.1 Connecting Pods](https://github.com/MACLEB1903/devops-with-kubernetes/tree/2.1/log_output).**

To run this application, execute the following commands in your command-line.

```bash
# Run the script.
./script.sh
```

### How to test:

To test this application, execute the following commands in your command-line.

```bash
# Set the current context to use the exercises namespace.
kubectl config set-context --current --namespace=exercises
```

```bash
# List the Pods in the exercises namespace.
kubectl get pods
```

```bash
# Expected terminal output, similar to the following:
NAME                                     READY   STATUS    RESTARTS   AGE
log-output-deployment-xxxxxxxx-xxxxx     2/2     Running   0          49s
pingpong-deployment-xxxxxxxxxx-xxxxx     1/1     Running   0          49s
```
