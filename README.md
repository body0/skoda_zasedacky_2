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
    
    //Datup posílej ve formátu YYYY-MM-DD hh-mm-ss.sss  např.: 2019-05-14 00:00:00.000
    //Zkontroluj zda je platný
    
    //Obsazení zasedačky
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
    
    
    
    //List kde se uživatel účastní
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
    
    
    //Přihlášení
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
