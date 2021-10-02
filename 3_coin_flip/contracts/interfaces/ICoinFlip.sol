pragma solidity 0.8.8;

interface ICoinFlip {
    function consecutiveWins() external view returns(bool);
    function flip(bool _guess) external returns (bool);
}