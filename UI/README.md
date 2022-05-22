Please install it following: https://docs.docker.com/compose/install/

To make everything start just run: `docker-compose -f docker-compose.yml up --build`

There you go! Just open a browser and go to `http://127.0.0.1:3000`

Will created:
- The UI on port 3000

--- 

If you have trouble with docker-compose, you can start the services separated:

1. Install dependencies: `npm install`
2. Start the ui server: `npm start`

## Running the tests
`npm test`


