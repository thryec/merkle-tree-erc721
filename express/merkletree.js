const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')

const whitelist = [
  '0x3eb9c5B92Cb655f2769b5718D33f72E23B807D24',
  '0x83F388d34dd62Cd6cd6B787c7DFC21E67EBc89F7',
  '0x9C4dF9FFAdcDa26DCdd24A8d8953a92CCD3AdE0D',
  '0x6cdc726b602C91683963FE29300F582594179c7c',
  '0x64F64fC4A31F5819aCB8060E664F06Fa04bea3b4',
  '0x93C575fb5aB57f3Cb546Eda045B3a904B0b690Fe',
]

const leafNodes = whitelist.map((addr) => keccak256(addr))
const merkleTree = new MerkleTree(leafNodes, keccak256, { sort: true })
const rootHash = merkleTree.getRoot()

// console.log('root hash:', rootHash.toString('hex'))
console.log('merkle tree: \n ', merkleTree.toString())

const claimingAddress = whitelist[0]
const hexProof = merkleTree.getProof(claimingAddress)
const valid = merkleTree.verify(hexProof, claimingAddress, rootHash)

console.log('proof: ', hexProof)
console.log('validity: ', valid)
