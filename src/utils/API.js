/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

//Random User Generator
export default {
    fullDirectory: function () {
        return new Promise((resolve, reject) => {
            axios.get("https://randomuser.me/api/?results=50")
                .then(res => {
                    const employees = res.data.results;
                    const results = employees.map(employee => {
                        return {
                            first: employee.name.first,
                            last: employee.name.last,
                            email: employee.email,
                            phone: employee.cell
                        };
                    });
                    resolve(results);
                })
                .catch(err => reject(err));
        });
    }
};