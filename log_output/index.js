setInterval(() => {
  const uuid = crypto.randomUUID();
  const now = new Date();
  console.log(`${now.toISOString()}: ${uuid}`);
}, 5000);
