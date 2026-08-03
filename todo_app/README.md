# 2.10 The Project, Step 13

The project could really use logging. Add request logging so that you can monitor every todo that is sent to the backend.

Set the limit of 140 characters for todos in the backend as well. Use Postman or curl to test that too long todos are blocked by the backend, and you can see the non-allowed messages in your Grafana.

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
# Open the following url in your browser.
http://localhost:3000/
http://localhost:3000/todos
```

```bash
# Port-forward Prometheus and Grafana to access their dashboards locally.
kubectl port-forward -n monitoring svc/prom-prometheus-server 9090:80
kubectl port-forward -n monitoring svc/grafana 3001:80

http://localhost:9090/
http://localhost:3001/
```
