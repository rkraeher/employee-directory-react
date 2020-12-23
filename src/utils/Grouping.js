/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import MergeSorted from "./MergeSorted";
import SortArray from "./SortArray";

// This function organizes the directory to display a selected alphabetic chunk  
//TODO: (1) Grouping only works by last name. Add first name functionality. 
//TODO: (2) Could be improved to ensure asynchronous execution.

export default {
    grouping: function (array, group) {
        var matches = [];
        var nonmatches = [];

        const getRange = () => {
            var range;
            switch (group) {
                case "AE":
                    return range = /^[A-E]+$/;
                case "FL":
                    return range = /^[F-L]+$/;
                case "MS":
                    return range = /^[M-S]+$/;
                case "TZ":
                    return range = /^[T-Z]+$/;
                default:
                    return range = /^[A-Z]+$/;
            }
        }
        var gotRange = getRange();
        for (var i = 0; i < array.length; i++) {
            if ((gotRange.test(array[i].last.charAt(0)))) {
                matches.push(array[i]);
            } else {
                nonmatches.push(array[i]);
            }
            var sortedMatches = SortArray.sortArray(matches, "last");
            var sortedNonMatches = SortArray.sortArray(nonmatches, "last");
        }
        var merged = MergeSorted.mergeSorted(sortedMatches, sortedNonMatches);
        return merged;
    }
}; 