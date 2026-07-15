const http = require("http");

// ❌ Heavy calculation
function calculateSum() {
  let sum = 0;

  // Simulate a huge calculation
  for (let i = 0; i < 5_000_000_000; i++) {
    sum += i;
  }

  return sum;
}

const server = http.createServer((req, res) => {
  if (req.url === "/calculate") {
    const result = calculateSum();

    return res.end(`Sum = ${result}`);
  }

  res.end("⚡ Fast Response");
});



server.listen(3000, () => {
    console.log("🚀 Server is running at http://localhost:3000");
});