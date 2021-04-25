pragma solidity ^0.5.0;

contract Decentragram {
  string public name;
  uint public imageCount = 0;
  mapping(uint => Image) public images;


  struct Image {
    uint id;
    string hash;
    string description;
    address payable author;

  }

  event ImageCreated(
    uint id,
    string hash,
    string description,
    address payable author
  );


  constructor() public {
    name = "Decentragram";
  }

  function uploadImage(string memory _imgHash, string memory _description) public {
    // Make sure the image hash exists
    require(bytes(_imgHash).length > 0);
    // Make sure image description exists
    require(bytes(_description).length > 0);
    // Make sure uploader address exists
    require(msg.sender!=address(0));

    // Increment image id
    imageCount ++;

    // Add Image to the contract
    images[imageCount] = Image(imageCount, _imgHash, _description, msg.sender);
    // Trigger an event
    emit ImageCreated(imageCount, _imgHash, _description, msg.sender);
  }

}
