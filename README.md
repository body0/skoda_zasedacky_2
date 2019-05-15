# skoda_zasedacky
PWA app for Škoda auto

##Technology:<br/>
##Database API
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
- /api/getUserDescription<br/>
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
- /api/newUser<br/>
    example request:
    ```
    {
        "userName":<string>
        "password":<string>
    }
    ```
    example response:<br/>
        -if user allready exist, return 403(forbiden)<br/>
        -return sesion cookie
    ```
    {   
        "userId": <room id>
        "email": <string>
    }
    ```
- /api/getuserSession<br/>
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
