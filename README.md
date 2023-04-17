# unified-gateway-test
Unified gateway assessment 

## How to Run 

Clone/Zip Download this repository and go to each project do `yarn install`.
once installation is completed you are good to go.

### How to run Admin app
You need to start `admin-server` app then start `admin-client`, it has a dependency on server.

- Navigate to create request page from nav-bar 
- Fill the form and create a construction request
- Once request is created you can track request by navigating to request list
- When you send Patch/Update request to the API `/requests/:id` with Body like:
```
{
    "status":"REJECTED"
}
```
it will send notification using web socket to the client app.


### How to run `front-face-ui` app
There is no dependency for this project just `yarn install` and `yarn start` it will work