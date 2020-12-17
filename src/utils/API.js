/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// Export an object containing methods we'll use for accessing the Random User Generator

export default {
    fullDirectory: function () {
        return axios.get("https://randomuser.me/api/?results=20");
    },
    sortDirectory: function (sort) {
        return axios.get("");
    },
    filterDirectory: function (filter) {
        return axios.get("");
    }
};
