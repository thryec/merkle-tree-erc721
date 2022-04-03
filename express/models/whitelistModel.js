const mongoose = require('mongoose')
const Schema = mongoose.Schema

const whitelistSchema = new Schema(
  {
    walletAddress: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Whitelist', whitelistSchema)
