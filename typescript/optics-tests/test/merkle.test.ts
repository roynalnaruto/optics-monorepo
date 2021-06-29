const { ethers } = require('hardhat');
const { provider } = ethers;
const { expect } = require('chai');

const { TestMerkle__factory } = require('../../typechain/optics-core');
const { testCases } = require('../../../vectors/merkleTestCases.json');

describe('Merkle', async () => {
  for (let testCase of testCases) {
    const { testName, leaves, expectedRoot, proofs } = testCase;

    describe(testName, async () => {
      let merkle: typeof ethers.Contract, root: string;

      before(async () => {
        let [signer] = await ethers.getSigners();
        const Merkle = new TestMerkle__factory(signer);

        merkle = await Merkle.deploy();
        await merkle.deployed();

        //insert the leaves
        for (let leaf of leaves) {
          const leafHash = ethers.utils.hashMessage(leaf);
          await merkle.insert(leafHash);
        }
      });

      it('returns the correct leaf count', async () => {
        const leafCount = await merkle.count();
        expect(leafCount).to.equal(leaves.length);
      });

      it('produces the proper root', async () => {
        root = await merkle.root();
        expect(root).to.equal(expectedRoot);
      });

      it("can verify the leaves' proofs", async () => {
        for (let proof of proofs) {
          const { leaf, path, index } = proof;

          const proofRoot = await merkle.branchRoot(leaf, path, index);
          expect(proofRoot).to.equal(root);
        }
      });
    });
  }
});
