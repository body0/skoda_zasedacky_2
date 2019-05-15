# skoda_zasedacky
PWA app for Škoda auto

##
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
- /api/newUser
    example request:
    ```
    {
        "userName":<string>
        "password":<string>
    }
    ```
    example response:
        -if user allready exist, return 403(forbiden)
        -return sesion cookie
    ```
    {   
        "userId": <room id>
        "email": <string>
    }
    ```
- /api/getuserSession
    example request:
    ```
    {
        "userName":<string>
        "password":<string>
    }
    ```
    example response:
        -return sesion cookie
    ```
    {   
        "userId": <room id>
        "email": <string>
    }
    ```
