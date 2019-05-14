# skoda_zasedacky
PWA app for Škoda auto

##Database API
- /api/roomData
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
- /api/roomSchedule
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
- /api/getUserDescription
    example request:
    ```
    {
        "userName":<string>
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
- /api/registred
