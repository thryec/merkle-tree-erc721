const { constants, expectRevert } = require('@openzeppelin/test-helpers')
const { inTransaction } = require('@openzeppelin/test-helpers/src/expectEvent')
const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('MerkleNFT', () => {
  let nft
  const rootHash = '0x18856b5f7d5de9603d1da0f33aed1da324ab2028495005c40958aaf5a1629dcf'
  const goodProof = [
    '0xa9e85881a8ef2b190fa543358f7eaca231b3a969f4e9be4fb9b53774bd49a166',
    '0x95698052542557927f378c67cf1e6eb6d8f02cb49b2c3b162e945ece0dfdfbac',
  ]
  const badProof = []
  beforeEach(async () => {
    const NFT = await ethers.getContractFactory('NFT')
    nft = await NFT.deploy(rootHash)
    await nft.deployed()
  })

  describe('Minting', () => {
    it('allows whitelisted address to mint', async () => {
      nft.whitelistMint(goodProof)
    })

    it('does not allow un-whitelisted address to mint', async () => {
      nft.whitelistMint(badProof)
    })
  })
})
