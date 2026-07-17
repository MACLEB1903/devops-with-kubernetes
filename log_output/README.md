# 2.5 Documentation and ConfigMap

Use the official Kubernetes documentation to create a ConfigMap for the "Log output" application. Define one file named information. txt and one environment variable MESSAGE. Map the file as a volume, set the variable, and print the content along with the usual output:

```
file content: this text is from file
env variable: MESSAGE=hello world
2026-05-18T12:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43.
Ping / Pongs: 3
```

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
http://localhost:3000/pingpong
```

```bash
# Expected browser output, similar to the following:
file content: This file is from information.txt build with configmap.
env variable: MESSAGE=hello world from configmap
2026-07-17T20:11:40.837Z: 014deb58-efa5-46db-946f-54d736fb0c49
Pings: 2
```
