const eventModel = function(){

    const createEvent = function(params){
        let data = {
            ...params,
            peopleInterestedIn: 0,
            organizer: JSON.parse(storage.getData('userInfo')).username
        }

        let url = `/appdata/${storage.appKey}/events`;
        
        let header = {
            body: JSON.stringify(data),
            headers: {}
        }
        return requester.post(url,header);
    };
    const getAllEvents = function(){

        let url = `/appdata/${storage.appKey}/events`;
        
        let header = {
            headers: {}
        }
        return requester.get(url,header);
    };

    const getEvent = function(id){

        let url = `/appdata/${storage.appKey}/events/${id}`;
        
        let header = {
            headers: {}
        }
        return requester.get(url,header);
    
    };

    const editEvent = function(params){
        let url = `/appdata/${storage.appKey}/events/${params.eventId}`;
        
        delete params.eventId;
       
        
        let header = {
            body: JSON.stringify({...params}),
            headers: {}
        }
        return requester.put(url,header);
    };

    const deleteEvent = function(id){

        let url = `/appdata/${storage.appKey}/events/${id}`;
        let header = {
            headers: {}
        };
        return requester.del(url,header);
    };
    return {
        createEvent,
        getAllEvents,
        getEvent,
        editEvent,
        deleteEvent
    }
}();