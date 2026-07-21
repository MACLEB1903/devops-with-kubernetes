# 2.6 The project, Step 10

Make sure that your project has no hard coded ports, URLs, or other configurations in the source code. Pass all the configurations to pods as env variables that are defined either in a config map or in deployments.

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
