// This will serve as our main file through which we will launch the game client.
// IP address and port information: 10.0.0.209 PORT 50541
// Snek-multiplayer IP: 10.0.2.15 PORT: 50541

const net = require("net");

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Handling Data. receive this welcome greeting (data) and, for now, simply print it out to the screen
  conn.on("data", (data) => {
    console.log("Server says: you ded cuz you idled ", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();
