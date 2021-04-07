pragma solidity ^0.5.0;

contract Decentragram {
  string public name;
  uint public imageCount = 0;
  mapping(uint => Image) public images;


  struct Image {
    uint id;
    string hash;
    string description;
    uint maxVal;
    uint minVal;
    // string maxCount;
    // string minCount;string memory _minVal,string memory _maxCount,string memory _minCount,
    string date;
    address payable author;

  }

  event ImageCreated(
    uint id,
    string hash,
    string description,
    uint maxVal,
    uint minVal,  
    // _minVal,_maxCount,_minCount,
    // string maxCount,
    // string minCount,_minVal,_maxCount,_minCount,
    string date,
    address payable author
  );


  constructor() public {
    name = "Decentragram";
  }

  function uploadImage(string memory _imgHash, string memory _description,uint _maxVal,uint _minVal,string memory _date) public {
    // Make sure the image hash exists
    require(bytes(_imgHash).length > 0);
    // Make sure image description exists
    require(bytes(_description).length > 0);
    // Make sure uploader address exists
    require(msg.sender!=address(0));

    // Increment image id
    imageCount ++;

    // Add Image to the contract
    images[imageCount] = Image(imageCount, _imgHash, _description,_maxVal,_minVal,_date, msg.sender);
    // Trigger an event
    emit ImageCreated(imageCount, _imgHash, _description,_maxVal,_minVal,_date, msg.sender);
  }

}
