# Škoda zasedačky
PWA app for Škoda auto

## Technology:<br/>
## Database API

**Information about room**
- /api/roomData<br/>
    example request:
    ```
    {
        "roomId":<integer>
    }
    ```
    example response:
    ```
    {   
        "roomId": <integer>
        "name": <string>
        "support_contact": <string>
        "seats": <integer>
        "utility":{
            "tv": <bool>
            "solid_door": <bool>
            "reproducor": <bool>
            "dataprojector": <bool>
        }
    }
    ```
    
    //Date in format: YYYY-MM-DD hh-mm-ss.sss  For example: 2019-05-14 00:00:00.000
    //Zkontroluj zda je platný
    
    **Room reservation schedule**
- /api/roomSchedule <br/>
    example request:
    ```
    {
        "roomId":<integer>
    }
    ```
    example response:
    ```
    {   
        "roomId": <room id>
        "schedule_list":[
            {
                "owner": <user id>
                "name": <string>
                "description": <string>
                "start" <>
                "end": <>
            }
        ]
    }
    ```
    **Add new room reservation schedule**
    - /api/addRoomReservation<br/>
    
    
    **List of rooms where users have meating**
- /api/getUserSchedule<br/>
    example request:
    ```
    {
        "userName":<string>
        ?"password":<string>
    }
    ```
    example response:
    ```
    {   
        "roomId": <room id>
        "schedule_list":[
            {
                "owner": <user id>
                "name": <string>
                "description": <string>
                "start" <>
                "end": <>
            }
        ]
    }
    ```
    
    
    **Log-in**
- /api/getUserSession<br/>
    example request:
    ```
    {
        "userName":<string>
        "password":<string>
    }
    ```
    example response:<br/>
        -return sesion cookie
    ```
    {   
        "userId": <room id>
        "email": <string>
    }
    ```
