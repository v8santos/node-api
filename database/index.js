const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

async function main() {
    await mongoose.connect(uri);
}

main().catch(err => console.log(err));

module.exports = mongoose;