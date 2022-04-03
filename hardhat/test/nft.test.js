const { constants, expectRevert } = require('@openzeppelin/test-helpers')
const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('MerkleNFT', () => {
  let nft
  const rootHash = '18856b5f7d5de9603d1da0f33aed1da324ab2028495005c40958aaf5a1629dcf'
  beforeEach(async () => {
    const NFT = await ethers.getContractFactory('NFT')
    nft = await NFT.deploy(rootHash)
    await nft.deployed()
  })
})
