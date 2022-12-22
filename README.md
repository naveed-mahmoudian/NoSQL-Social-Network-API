# NoSQL-Social-Network-API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This repo is an API for a social network application to get/create/delete/update users, get/create/delete/update thoughts, get/create/update/delete reactions to friend's thoughts, and create a friends list with the ability to add/remove friends. Built with MongoDB, Mongoose, and Express.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Questions](#questions)

## Installation

To install, please ensure you have `node.js` installed on your computer. Then clone the git repo and run `npm i` to install all dependencies.

[Click Here for GitHub Repo](https://github.com/naveed-mahmoudian/NoSQL-Social-Network-API)

## Usage

To use this application you can run `npn run watch` to start the server. The default port is set to `3001`. To change the port, adjust the `PORT` variable at the top of the `server.js` file.

Now that the server is live, use an API Client (Insomnia, Postman, etc.) to test your requests.

[Click Here for Walkthrough Video]()

- Default Endpoint: `http://localhost:3001`

- USERS

  - `GET` Get All Users: `/api/users/`

  - `GET` Get 1 User: `/api/users/:userId`

  - `POST` Create User: `/api/users`

  ```
  {
      "username": "User1",
      "email": "name@example.com"
  }
  ```

  - `PUT` Update a User: `/api/users/:userId`

  ```
  {
      "username": "newUsername",
      "email": "newEmail@example.com"
  }
  ```

  - `DELETE` Delete a User: `/api/users/:userId`

- FRIENDS

  - `POST` Add a Friend: `/api/users/:userId/friends/:friendId`

  - `DELETE` Remove a Friend: `/api/users/:userId/friends/:friendId`

- THOUGHTS

  - `GET` Get All Thoughts: `/api/thoughts`

  - `GET` Get 1 Thought: `/api/thoughts/:thoughtId`

  - `POST` Create a Thought: `/api/thoughts`

  ```
  {
      "thoughtText": "This is an example thought",
      "username": "User1",
      "userId": "63a3ac4b64684d72341c01e7"
  }
  ```

  - `PUT` Update a Thought: `/api/thoughts/:thoughtId`

  ```
  {
      "thoughtText": "This is an updated thought"
  }
  ```

  - `DELETE` Delete a Thought: `/api/thoughts/:thoughtId`

- REACTIONS

  - `POST` Create a Reaction: `/api/thoughts/:thoughtId/reactions`

  ```
  {
      "reactionBody": "This is an example reaction",
      "username": "User1"
  }
  ```

  - `DELETE` Delete a Reaction: `/api/thoughts/:thoughtId/reactions/:reactionId`

## License

MIT License

      Copyright (c) 2022 Naveed Mahmoudian

      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.

## Credits

This application was created by Naveed Mahmoudian.

## Questions

GitHub: [naveed-mahmoudian](https://www.github.com/naveed-mahmoudian/)

Email: nmahmoudian@gmail.com
