# Postman Testing API for [Trello](https://trello.com/)

## About the Tool

This project is a test automation suite developed using [Postman](https://www.postman.com/) for the [Trello](https://trello.com/) website. The tool is designed to automate the testing of various functionalities on the Trello platform, ensuring a smooth and error-free user experience.

Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.

## Test description

These 4 test scenarios are created with Postman API tool. According to the [Trello API](https://developer.atlassian.com/cloud/trello/rest) implemented the following test scenarios:
1. Create a board
2. Get a board
3. Update the board's description
4. Delete the board
   
Also, added assertions for headers, status code and body of response. Added script into package.json to run API tests through the CLI (using Newman tool).

## How to Setup

To set up the Cypress testing environment for this project, follow these steps:

1. **Clone the Repository**

    Clone the project repository to your local machine using the following command:

    `git clone https://github.com/Maryna-Mala/postman_hw`

2. **Navigate to the Project Directory**

    Change your current directory to the project folder

3. **Install Dependencies**

    Ensure you have Node.js installed on your system. Then, install the necessary dependencies by running:

    `npm install`

4. **Set Up your environment**

    1. Open Trello and copy your own [API key and token](https://www.merge.dev/blog/trello-api-key) 
    2. Add your API key and token values in the `tests/postman/environment.json`

## How to run

To execute the test cases in the Postman project, follow these instructions:

1. **Run Tests**

    To run the tests local on your machine, use:

    `npm run local`

## Contributors

    This project is developed and maintained by the following contributor:

    https://github.com/Maryna-Mala
