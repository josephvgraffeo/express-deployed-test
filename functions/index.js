import functions from "firebase-functions";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// setup routes
app.get("/test", (req, res) => {res.send("We made a cloud function!")});

app.get("/test2", (req, res) => {res.send("This other route also works")});


export const api = functions.https.onRequest(app);

