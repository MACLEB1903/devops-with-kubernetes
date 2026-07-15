# 2.1 Connecting pods

Connect the Log output application and the Ping pong application using an HTTP GET endpoint to share the number of pongs instead of using file sharing. Temporarily remove the volume between the two applications.

The response of the `HTTP GET` to Log output will stay the same:

```
2020-03-30T12:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
2020-03-30T12:15:22.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
```

### How to run:

To run this application, execute the following commands in your command-line.

```bash
# Expose the cluster load balancer port.
k3d cluster edit <cluster-name> --port-add "3000:80@loadbalancer"
```

```bash
# Run the script.
./script.sh
```

### How to test:

To test this application, execute the following commands in your command-line.

```bash
# Open the application in your browser.
curl http://localhost:3002/
```

```bash
# Expected ouput should be similar to:
2026-07-15T01:45:49.535Z: 8a125499-e952-470b-b9f7-b9d86a51669c
Pings: 1
```
