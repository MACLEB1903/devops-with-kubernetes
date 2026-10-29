# Exercise 1.1: Getting started

Create an application that generates a random string on startup, stores this string into memory, and outputs it every 5 seconds with a timestamp.

```code
2020-03-30T12:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
2020-03-30T12:15:22.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
```

Deploy it into your Kubernetes cluster and confirm that it's running with kubectl logs. You will keep building this application in future exercises. This application will be called `Log output`.

---

### How to run:

To run this application, execute the following commands in your command-line.

```bash
chmod +x ./_setup.sh
./_setup.sh
```

---

### How to test:

To test this application, execute the following commands in your command-line.

```bash
kubectl logs pods/log-output -f
```

---

### How to clean up:

After completing the exercise, follow the instructions below to clean up the resources used.

```bash
chmod +x ./_cleanup.sh
./_cleanup.sh
```
