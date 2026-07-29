# 2.9 The Project, Step 12

Create a CronJob that generates a new todo every hour to remind you to do 'Read <URL>', here <URL> is a Wikipedia article that was decided by the job randomly. It does not have to be a hyperlink, the user can copy-paste the URL from the todo.

https://en.wikipedia.org/wiki/Special:Random(opens in a new tab) responds with a redirect to a random Wikipedia page so you can ask it to provide a random article for you to read. TIP: Check location header

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
