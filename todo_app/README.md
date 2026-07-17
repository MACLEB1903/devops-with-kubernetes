# 2.1 Connecting pods

In the project continuation, a new service named todo-backend is to be created for managing todo items, featuring a `GET /todos` endpoint for fetching todos and a `POST /todos` endpoint for creating them. Initially, todos will be stored in memory, with plans for database integration later.

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
http://localhost:3000/
```

```bash
# To fetch todos.
http://localhost:3000/todos
```
