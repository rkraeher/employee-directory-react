import React from "react";
import mergeSorted from "./MergeSorted";
import sortArray from "./SortArray";

export const grouping = (array, group) => {
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
    // This loop organizes the directory based on an alphabetic chunk, and unshifts
    // the current queried chunk, so that it appears first in the client. 
    //TODO: (1) Grouping only works by last name. Add first name functionality. 
    //TODO: (2) Could be improved to ensure asynchronous execution.
    for (var i = 0; i < array.length; i++) {
        if ((gotRange.test(array[i].last.charAt(0)))) {
            matches.push(array[i]);
        } else {
            nonmatches.push(array[i]);
        }
        var sortedMatches = sortArray(matches, "last");
        var sortedNonMatches = sortArray(nonmatches, "last");
    }
    var merged = mergeSorted(sortedMatches, sortedNonMatches);
    return merged;
};