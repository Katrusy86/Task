"use strict";

let weeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let nearestFirstFoundDay;
let avgTemperature = 0;

function NearestFoundDay(WeekTemperatureArray) {
  for (let i = 0; i < WeekTemperatureArray.length; i += 1) {
    avgTemperature += WeekTemperatureArray[i] / WeekTemperatureArray.length;
  }

  let diffTemp = avgTemperature - WeekTemperatureArray[0];
  for (let item of WeekTemperatureArray) {
    if (Math.abs(item - avgTemperature) < diffTemp) {
      nearestFirstFoundDay = WeekTemperatureArray.indexOf(item);
    }
  }

  console.log("Target day:" + weeks[nearestFirstFoundDay]);
  return nearestFirstFoundDay;
}


// ==================================================

// function NearestFoundDay(WeekTemperatureArray) {

//     const avgTemperature = WeekTemperatureArray.reduce((acc, item)=> {
//         return acc + item / WeekTemperatureArray.length;
//     }, 0)

//     let diffTemp = avgTemperature - WeekTemperatureArray[0];
//     WeekTemperatureArray.forEach((item)=> {
//         if (Math.abs(item - avgTemperature) < diffTemp){
//             nearestFirstFoundDay = WeekTemperatureArray.indexOf(item);;
//         }
//     });

//     console.log("Target day:" + weeks[nearestFirstFoundDay]);
//     return nearestFirstFoundDay;
// }

  console.log(NearestFoundDay([10, 20, 10, 30, 0, 5, 12])); // 6 - Sun
  console.log(NearestFoundDay([10, 20, 12, 30, -1, 5, 12])); // 2 - Wed
  console.log(NearestFoundDay([1.3, 2.0, 10, 3.2, 1, 5.5, 1.2])); // 5 - Sat
