const http = require("http");

async function calculateSum() {
  let sum = 0;

  const LIMIT = 5_000_000_000;
  const CHUNK_SIZE = 5_000_000;

  for (let i = 0; i < LIMIT; i += CHUNK_SIZE) {

    // Calculate one chunk
    for (let j = i; j < Math.min(i + CHUNK_SIZE, LIMIT); j++) {
      sum += j;
    }

    // ✅ Give the event loop a chance
    await new Promise(resolve => setImmediate(resolve));
  }

  return sum;
}

const server = http.createServer(async (req, res) => {
  if (req.url === "/calculate") {
    const result = await calculateSum();

    return res.end(`Sum = ${result}`);
  }

  res.end("⚡ Fast Response");
});

server.listen(3001, () => {
    console.log("🚀 Server is running at http://localhost:3001");
});