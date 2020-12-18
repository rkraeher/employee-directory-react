// import React from "react";

// //function Sort({ directory, criteria }) {

// // Compare function needed by the Sort component
// const compare = (a, b) => {
//     // you can access the relevant property like this a.props[by]
//     // depending whether you are sorting by tilte or year, you can write a compare function here, 
//     let la = a.last.toLowerCase(),
//         lb = b.last.toLowerCase();

//     if (la < lb) {
//         return -1;
//     }
//     if (la > lb) {
//         return 1;
//     }
//     return 0;
// }

// const Sort = ({ directory, criteria }) => {
//     if (!criteria) {
//         // If no 'sort by property' provided, return original list
//         return directory;
//     }
//     return React.Children.toArray(directory).sort(compare);
// }
// // if (!criteria) {
// //     return directory;
// // }
// // return directory.sort((a, b) => {
// //     let la = a.last.toLowerCase(),
// //         lb = b.last.toLowerCase();
// //     if (la < lb) {
// //         return -1;
// //     }
// //     if (la > lb) {
// //         return 1;
// //     }
// //     return 0;
// // });
// //}


// //const [sortType, setSortType] = useState('last');
// const sortArray = type => {
//     const types = {
//         last: 'last',
//         first: 'first',
//     };
//     const sortProperty = types[type];
//     const sorted = [...directory].sort((a, b) => b[sortProperty] - a[sortProperty]);
//     setDirectory(sorted);
// };
// sortArray('last');
// export default Sort;