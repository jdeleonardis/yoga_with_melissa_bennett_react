import axios from "axios";

export default {

    //get the key for retrieving a map
    getMapKey: function() {
        return axios.get("/api/keys/map");
    },  
    
    //get the emailjs userid
    getEmailJSUser: function() {
        return axios.get("/api/keys/emailjsuser");
    },      

    //create a token that allows a user access to behind the scenes keys to sensitive info
    createKeyToken: function(tokenData) {
        return axios.post("/api/createkeytoken", tokenData);
    }, 

    //get geocoding location
    getGeoLocation: function(address, mapKey) {    
        let addrString = address.location[0].name +" "+ address.location[0].addr1 +" "+ address.location[0].city +", "+ address.location[0].state +" "+ address.location[0].zip
        addrString = addrString.replace(/\s/g, '%20')           
        return axios.get("http://api.positionstack.com/v1/forward?access_key=" + mapKey + "&query=" + addrString)
    },

    //get a list of 3 classes after today
    getNextClasses: function() {
        return axios.get("/api/classes/nextclasses");
    },

    //get all of the classes
    getAllClasses: function() {
        return axios.get("/api/classes");
    },

    //update the information about a class
    updateClassInfo: function(id, classInfo) {        
        return axios.put("/api/classes/update/" + id, classInfo);
    },    

    //update a class with a registrant's info
    updateClassAttendance: function(id, contactInfo) {        
        return axios.put("/api/classes/" + id, contactInfo);
    },

    //update number of participants
    updateClassParticipants: function(id, participants) {        
        return axios.put("/api/classes/participants/" + id, participants);
    },

    //insert a new class
    insertClass: function(classData) {
        return axios.post("/api/classes", classData);
    },

    //insert a new location
    insertLocation: function(locationData) {
        return axios.post("/api/updatelocations", locationData);
    },   
    
    //update a location
    updateLocation: function(id, locationInfo) {        
        return axios.put("/api/updatelocations/" + id, locationInfo);
    },

    //get all of the active locations
    getActiveLocations: function() {
        return axios.get("/api/locations/active");
    },

    //get all locations, regardless of status
    getAllLocations: function() {
        return axios.get("/api/locations");
    },    
};
