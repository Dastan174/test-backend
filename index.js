import http from "http";

const courses = [
  { title: "Frontend", price: 5000, id: 1 },
  { title: "Backend", price: 7000, id: 2 },
  { title: "Cyber", price: 15000, id: 3 },
  { title: "AI", price: 10000, id: 4 },
];

// /rooms
// /meetings-hall

const app = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    return res.end("Hello world, server from Dastan");
  } else if (req.method === "GET" && req.url === "/courses") {
    return res.end(JSON.stringify(courses));
  }
});
const port = 5000;

app.listen(port, () => {
  console.log(`server is on ${port}`);
});
