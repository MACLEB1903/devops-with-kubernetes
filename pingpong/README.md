# 2.3 Stateful application

Run a Postgres database as a stateful set (with one replica) and save the Ping-pong application counter into the database.

### How to run:

To run this application, execute the following commands in your command-line.

```bash
# Run the script.
# Remember to update `<cluster-name>` on the script.sh.
./script.sh
```

### How to test:

To test this application, execute the following commands in your command-line.

```bash
# Expose the cluster load balancer port.
k3d cluster edit <cluster-name> --port-add "3000:80@loadbalancer"
```

```bash
# List the Pods in the exercises namespace.
kubectl get pods
```

```bash
# Open the following url in your browser.
http://localhost:3000/pingpong

# Excepted output:
# Ping / Pongs: 1
```

```bash
# Delete the statefulset pod then apply it again.
kubectl delete pod pingpong-db-statefulset-0
kubectl apply -f pingpong/manifests/statefulset.yaml
```

```bash
# Open the following url in your browser.
http://localhost:3000/pingpong

# Excepted output:
# Ping / Pongs: 2
```
