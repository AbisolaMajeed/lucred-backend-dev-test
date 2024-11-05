# lucred-backend-dev-test
### Dependencies
- Node.js (version 12 or above)
- Express
- Jest
- Supertest

### Setup Instructions

#### 1. Clone the repository

Clone the repository to your local machine using Git.

```sh
git clone https://github.com/your-username/[app-name].git
cd [app-name]
```

#### 2. Install dependencies
Navigate to the project directory and install the required dependencies.

```sh
npm install
```

#### 3. Start the server
To start the server locally, run the following command:

```sh
node start.js
```
The server will run on ``` http://localhost:3000 ```

#### 4. Testing the API Endpoints Locally on Postman

1. Open Postman.

2. Add a New Request:
  - Set the request type to GET or POST depending on the endpoint.
  - Use ``` http://localhost:3000/api/products ``` for both GET and POST requests.

#### 5. Running Tests
Run the following command to execute the tests:

```sh
npm test
```
