// we can furst sort the array of event basis on the preferredStartTime
//then loop over it and update that object with duration key  (here we have to also check the preferend time again)

// import { tc3 } from "./test-cases";
// const testCases = require('./test-cases')
const events = [
    {
        eventName: 'event1',
        preferredStartTime: 80,
        duration: 30
    },
    {
        eventName: 'evnt 2',
        preferredStartTime: 100,
        duration: 30
    },
    {
        eventName: 'evnt 3',
        preferredStartTime: 110,
        duration: 20
    },
    {
        eventName: 'evnt 4',
        preferredStartTime: 100,
        duration: 10
    },
    {
        eventName: 'evnt 5',
        preferredStartTime: 120,
        duration: 5
    },
]

// ev1 80, 110
// ev4 110, 120
// ev5 120, 125
// ev3 125, 145
// ev2 145, 175

// somehow we need to compare current time with prefered time and then basis on duration
const sortedEvents = events.sort((a, b) => {
    if(a.duration !== b.duration){
      return a.duration - b.duration ;// to sort events based on duration
    }else{
        return a.preferredStartTime - b.preferredStartTime ;// to handle same preferred time 
    }
})
//need to tackle case if both event has same preferredStartTime 

// const rearrangeEvents = sortedEvents.forEach()
let lastEndTime = 0
const eventsWithRightOrderToShedule = sortedEvents.map((props) => {
    const { eventName, duration, preferredStartTime } = props;
    let actualStartTime = Math.max(preferredStartTime , lastEndTime);

    let endTime = actualStartTime + duration

    lastEndTime = endTime
    
    return {
        eventName ,
        preferredStartTime,
        duration,
        actualStartTime
    }

})
eventsWithRightOrderToShedule.forEach(e  =>{
    console.log(e.eventName, e.preferredStartTime, ":", e.actualStartTime, (e.actualStartTime + e.duration));
})
// console.log(eventsWithRightOrderToShedule, 'events')

//get current time
//go over the events array and get all possible events which can be shedule in this time then pick lease one and then remove that one


let currentTime  = 0;
let schduledEvents = [];

while(events.length > 0 )
    {      
    let nextEventIndex = -1;
    let earliestEndTime = 100000000000000;

    //finding the next event with smallest duration and valid start time
        for(let i = 0 ; i < events.length ; i++){
            let event = events[i];
            let actualStartTime = Math.max(event.preferredStartTime , currentTime);
            let endTime = actualStartTime + event.duration;


            //check if this event has the smallest duration and can be scheduled
            if(event.duration < earliestEndTime && endTime >= currentTime){
               nextEventIndex = i;
               earliestEndTime = endTime;
            }
        }

        //now if nextEventIndex is not set then schdule event
        if(nextEventIndex !== -1){
            let eventToSchdule = events[nextEventIndex];
            let actualStartTime = Math.max(eventToSchdule.preferredStartTime , currentTime);


            //push into result array
            schduledEvents.push({
                eventName :eventToSchdule.eventName,
                actualStartTime : actualStartTime
            })
        }
    }
events.forEach(event => {
    //find event whose sum of duration time 
});
// console.log(eventsWithRightOrderToShedule, 'events')