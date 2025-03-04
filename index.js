// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
     const headquaters = 42;
    return Math.abs(someValue-headquaters)      
}
function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    const feet = 264;
    return Math.abs(distanceFromHqInBlocks(someValue)*feet)
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}
function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(destination - start) * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination);
  
    if (distanceTravelledInFeet(start, destination) <= 400) {
      return 0; // Free for the first 400 feet
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
      return (distanceTravelledInFeet(start, destination) - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
      return 25; // Flat rate of $25 for distances between 2000 and 2500 feet
    } else if(distanceTravelledInFeet(start, destination) > 2500){
      return "cannot travel that far"; // Reject rides over 2500 feet
    }
  }
  

    
    


    
