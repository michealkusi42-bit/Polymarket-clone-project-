// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.6;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// GHCedi — test token simulating a Ghana Cedi peg (TESTNET ONLY, no real value)
contract GHCedi is ERC20 {
    address public owner;

    constructor() ERC20("Ghana Cedi Test Token", "GHC-T") {
        owner = msg.sender;
        _mint(msg.sender, 100000 * 10**18);
    }

    function mint(address to, uint256 amount) external {
        require(msg.sender == owner, "Only owner can mint");
        _mint(to, amount);
    }
}

