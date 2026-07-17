# 2.4 The Project, Step 9

Create a namespace called project for the project and move everything related to the project to that namespace. Use the new namespace in the future for all the project related exercises.

### How to run:

**NOTE: This exercise focuses on creating namespaces. To build the application, first follow the installation guide from exercise [2.2 The project, Step 8](https://github.com/MACLEB1903/devops-with-kubernetes/tree/2.2/todo_app).**

To run this application, execute the following commands in your command-line.

```bash
# Run the script.
./script.sh
```

### How to test:

To test this application, execute the following commands in your command-line.

```bash
# Set the current context to use the exercises namespace.
kubectl config set-context --current --namespace=project
```

```bash
# List the Pods in the exercises namespace.
kubectl get pods
```

```bash
# Expected terminal output, similar to the following:
NAME                                     READY   STATUS    RESTARTS   AGE
todo-backend-deployment-xxxxxxxx-xxxxx   2/2     Running   0          49s
todo-frontend-deploymen-xxxxxxxxxx-xxxxx  /1     Running   0          49s
```
