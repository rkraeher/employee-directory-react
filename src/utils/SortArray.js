export default {
    sortArray: function (array, criteria) {
        const sorted = [].concat(array)
            .sort((a, b) => a[criteria] > b[criteria] ? 1 : -1);
        return sorted;
    }
};