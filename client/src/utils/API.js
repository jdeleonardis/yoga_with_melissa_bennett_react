import axios from "axios";

export default {

    /*send a contact email*/
    postEmail: function(emailData) {
        return axios.post("http://localhost:3002/send", emailData);
    },

    //get geocoding location
    getGeoLocation: function(address) {        
        let addrString = address.location[0].name +" "+ address.location[0].addr1 +" "+ address.location[0].city +", "+ address.location[0].state +" "+ address.location[0].zip
        addrString = addrString.replace(/\s/g, '%20')        
    },

    //get a list of 3 classes after today
    getClasses: function() {
        return axios.get("/api/classes");
    },

    //update a class with a registrant's info
    updateClassAttendance: function(id, contactInfo) {        
        return axios.put("/api/classes/" + id, contactInfo);
    }
};