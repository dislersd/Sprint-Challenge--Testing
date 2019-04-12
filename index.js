//require('dotenv').config(); use this if after you install dotenv

const server = require("./api/server.js")

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n ** server running on port ${port} **\n`)
})