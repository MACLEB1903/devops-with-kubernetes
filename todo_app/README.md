# 2.8 The project, Step 11

Create a database and save the todos there. Again, the database should be defined as a stateful set with one replica. Use `Secrets` and/or `ConfigMaps` to have the backend access the database.

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
