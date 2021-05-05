# Polling-RT

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-red.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity "Repo Maintained")
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/akashchouhan16/ "github.com/akashchouhan16")
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/ "VSCODE")
[![GitHub issues](https://img.shields.io/github/issues/akashchouhan16/Polling-RT.svg)](https://github.com/akashchouhan16/Polling-RT/issues)
[![GitHub stars](https://img.shields.io/github/stars/akashchouhan16/Polling-RT.svg?style=social)](https://github.com/akashchouhan16/Polling-RT/stargazers) ![GitHub last commit](https://img.shields.io/github/last-commit/akashchouhan16/Polling-RT.svg)

A real-time Polling application using Express, MongoDb, CanvasJS, PusherJS & MaterializeCSS.

## How to run the application?

**Install Dependencies**

```bash
    -> npm install
    OR
    -> npm i
```

**To Start the Development server :**

```bash
 npm run dev
```

**To Start the Production server :**

```bash
npm run start
```

---

## Connecting to the DataBase Using MongoDB

- Make sure latest version of **dotenv** Module is installed.
- Create a **.env** file.
- For setting up a local MongoDb DataBase
  - Mongo must be locally installed on your system.
  - Add to **.env**,
    - **localDBURL**='`mongodb://localhost:27017/Polling-RT`'
- For setting up a Cloud Database Using Atlas, Add to **.env**
  - **cloudDBURL**='`mongodb+srv://<EnterMongoDBAtlas_UserName>:<EnterMongoDBAtlas_Password>@cluster0.c1tnc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`'

---

## Preview :

<img src="./previews/main_preview.png" width="65%">

---

## [Application Info](https://github.com/akashchouhan16/Polling-RT "Polling RT")

### Note:

> Front-End is mostly hardcoded for OS Polling, will make it more dynamic when I feel like it **:v**

### Version

**[1.0.0](https://github.com/akashchouhan16/Polling-RT "Version")**

### License

**[MIT](https://github.com/akashchouhan16/Polling-RT/blob/master/LICENSE "License")**
