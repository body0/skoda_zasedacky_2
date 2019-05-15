# skoda_zasedacky
PWA app for Škoda auto

##Technology
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
    
    //Datup posílej ve formátu YYYY-MM-DD hh-mm-ss.sss  např.: 2019-05-14 00:00:00.000
    //Zkontroluj zda je platný
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
