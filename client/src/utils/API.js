import axios from "axios";

export default {

    // /*send a contact email*/
    // postEmail: function(emailData) {
    //     return axios.post("http://localhost:3002/send", emailData);
    // }

    //get a list of 3 classes after today
    getClasses: function() {
        return axios.get("/api/classes");
    },

    updateClassAttendance: function(id, contactInfo) {        
        return axios.put("/api/classes/" + id, contactInfo);
    }
};
