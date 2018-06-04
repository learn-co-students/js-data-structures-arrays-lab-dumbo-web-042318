// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
  drivers.push(name);
}
function destructivelyPrependDriver(name){
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(name){
  return [...drivers, name]
  // newarr = drivers.map(function(driver) { return driver });
  // newarr.push(name);
  // return newarr;

  // newarr = drivers.slice();
  // newarr.push(name);
  // return newarr;


}
function prependDriver(name){
  newarr = drivers.map(function(driver) { return driver });
  newarr.unshift(name);
  return newarr;
}
function removeLastDriver(name){
  newarr = drivers.map(function(driver) { return driver });
  newarr.pop(name);
  return newarr;
}
function removeFirstDriver(name){
  newarr = drivers.map(function(driver) { return driver });
  newarr.shift(name);
  return newarr;
}
