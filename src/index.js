var crypto = require("crypto");

class Server {
  constructor(id, index = -1) {
    this.id = id;
    this.index = index;
  }

  toString() {
    return `${this.id} (Index-${this.index})`;
  }
}

class ConsistentHashing {
  constructor() {
    this.HASH_SPACE = Math.pow(2, 10);
    this.servers = ["ServerA", "ServerB", "ServerC"];
    this.sortedServers = [];

    this.initServers();
  }

  initServers() {
    this.servers.forEach((serverName) => {
      const index = this.findPositionFor(serverName);

      this.sortedServers.push(new Server(serverName, index));
    });

    this.sortedServers.sort((s1, s2) => s1.index - s2.index);
  }

  hash(value) {
    return crypto
      .createHash("md5")
      .update(value)
      .digest("hex")
      .split("")
      .reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  }

  findPositionFor(serverOrClientId) {
    return this.hash(serverOrClientId) % this.HASH_SPACE;
  }

  findServerFor(clientId) {
    const clientPos = this.findPositionFor(clientId);

    console.log(`++${clientId} is at index ${clientPos}`);

    for (let server of this.sortedServers) {
      if (clientPos <= server.index) return server;
    }

    return this.sortedServers[0];
  }

  static main() {
    const ch = new ConsistentHashing();

    console.log(ch.sortedServers);

    const clients = ["ClientX", "ClientY", "ClientZ"];

    clients.forEach((client) => {
      const server = ch.findServerFor(client);
      console.log(`** ${client} is mapped with ${server.toString()}`);
    });
  }
}

module.exports = ConsistentHashing;
