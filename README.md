# Polling-RT

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
    - localDBURL='`mongodb://localhost:27017/Polling-RT`'
- For setting up a Cloud Database Using Atlas, Add to **.env**
  - cloudDBURL='`mongodb+srv://<EnterMongoDBAtlas_UserName>:<EnterMongoDBAtlas_Password>@cluster0.c1tnc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`'

---

## Preview :

<img src="./previews/main_preview.png" width="55%">
<!-- 
![mainframe](./previews/main_preview.png) -->

#### **Note** :

Front-End is mostly hardcoded for OS Polling, will make it more dynamic when I feel like it **:v**.
