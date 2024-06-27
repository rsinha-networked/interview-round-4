# Interview Round 4

- There should be no overlapping of events
- Event should only start after the preferredStartTime
- Event runs for the duration mentioned

```{json}
[
    {
        eventName: <ev-id-1>
        preferredStartTime: number, // UNIX time in second
        duration: number //Duration is in minutes
    },
    {
        eventName: <ev-id-2>
        preferredStartTime: number, // UNIX time in secomd
        duration: number //Duration is in minutes
    },
    
]
```





Output -

[
    {
        eventName: <ev-id>
        actualStartTime: number
    }
]