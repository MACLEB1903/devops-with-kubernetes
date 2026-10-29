(() => {
  setInterval(() => {
    const now = new Date();
    const uuid = crypto.randomUUID();
    const log = `${now.toISOString()}: ${uuid}`;

    console.log(log);
  }, 5000);
})();
