# News API
This is an application for recording and viewing news articles.

# Table of Contents

- [Technology Stack](#technology-stack)
- [API documentation](#api-documentation)
- [Installation](#installation)
- [Application Features](#application-features)
- [Testing](#testing)

## Technology Stack

- Typescript
- NodeJS
- Babel
- Express
- Morgan:
 is another HTTP request logger middleware for Node.js. It simplifies the process of logging requests to your application.
  You might think of Morgan as a helper that collects logs from your server, such as your request logs. 
  It saves developers time because they don’t have to manually create common logs. It standardizes and automatically creates request logs.

### API Documentation

Find the link to the API documentation here.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com)

## Installation

1. Install [`Node JS`](https://nodejs.org/en/).
2. To clone, run `git clone https://github.com/rethes/news-api.git`.
3. `cd` into the root of the **project directory**.
4. Install [`yarn`](https://yarnpkg.com/en/docs/install#mac-stable) or npm.
5. Run `yarn install` or `npm install` on the terminal to install dependencies.
6. Create a `.env` file in the root directory of the application. Example of the content of a `.env` file is shown in the `.env.example`
7. To start the application run `yarn start` or `npm run start`

## Application Features

1. CRUD Categories
2. CRUD Articles

## Testing

**Unit tests** - Run `test:unit` on the terminal while within the **project root directory**. Unit testing is achieved through the use of `jest` package. `jest` is used to test javascript code in React applications.


### Support or Contribution

For any suggestions or contributions please do not hesitate to contact the owners of this repository.

Contributions to this project are welcomed by all, If you need to contribute, follow the steps below

- **Fork** the repository
- Follow [Installation and Setup](#installation) as explained earlier
- Create a branch off `develop` for the feature you wish to add
- Make necessary changes, commit and raise a pull request against develop.
  **Note** when making contributions, please endeavour to follow the [Airbnb](https://github.com/airbnb/javascript) javascript style guide.
