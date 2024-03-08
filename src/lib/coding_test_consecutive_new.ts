// aedifion Coding Test

//////////////////
//// Task
//////////////////

//  Write a function that takes a Record<string, any[]> as an input and returns a new Record with
//  the same keys but in which any consecutive duplicates have been pruned from their values.

//
// Example input
//
// example_input = {
//     "datapoint_1": [1.0, 2.3, 1.2, 3.4, 2.0, 2.0, 3.1, 2.3],
//     "datapoint_2": [true, true, true, false, true, false],
//     "datapoint_3": ["active", "inactive", "active", "active", "inactive", "inactive"]
// }
//
// Expected output
//
// example_output = {
//     "datapoint_1": [1.0, 2.3, 1.2, 3.4, 2.0, 3.1, 2.3],
//     "datapoint_2": [true, false, true, false],
//     "datapoint_3": ["active", "inactive", "active", "inactive"]
// }

//////////////////
// Solution
//////////////////

// Please implement the function below to solve the task

// import _ from "lodash";
import _ from 'lodash'

export type ArraysObject = Record<string, any[]>

export function removeConsecutiveDuplicates(srcObj: ArraysObject): ArraysObject {
  return _.mapValues(srcObj, (srcArr: any[]) => {
    return srcArr.reduce((acc: any[], curVal: any) => {
      if (acc.length === 0 || !_.isEqual(acc[acc.length - 1], curVal)) {
        acc.push(curVal)
      }
      return acc
    }, [])
  })
}
