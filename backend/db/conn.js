const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://joabe:3IpgURBjEQQJ4DEO@cluster0.wuvrioz.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (err) {
    console.log(`Erro: $(err}`);
  }
}
