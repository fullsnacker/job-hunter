const express = require("express");
const mysql = require("mysql");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
require("dotenv").config();
//console.log(process.env);
//console.log(process.env.DB_PASSWORD);
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/jobs", (req, res) => {
  const q = "SELECT * FROM Employment.job_list ORDER BY creation_date DESC;";
  db.query(q, (err, data) => {
    console.log(err, data);
    if (err) return res.json({ error: err.sqlMessage });
    else return res.json({ data });
  });
});

app.get("/sites", (req, res) => {
  const q = "SELECT * FROM Employment.site order by name;";
  db.query(q, (err, data) => {
    console.log(err, data);
    if (err) return res.json({ error: err.sqlMessage });
    else return res.json({ data });
  });
});

app.post("/jobs", (req, res) => {
  const q = `call create_job(?);`;
  const values = [...Object.values(req.body)];
  db.query(q, [values], (err, data) => {
    if (err) return res.json({ error: err.sqlMessage });
    else return res.json({ data });
  });
});

app.get("/jobs/:jobsId", (req, res) => {
  const id = req.params.productId;
  const q = "SELECT * FROM product where productId=?";
  db.query(q, [id], (err, data) => {
    console.log(err, data);
    if (err) return res.json({ error: err.sqlMessage });
    else return res.json({ data });
  });
});

app.put("/jobs/:jobsId", (req, res) => {
  const id = req.params.productId;
  const data = req.body;
  if (data.productPrice) data.productPrice = Number.parseInt(data.productPrice);
  if (data.availableQuantity)
    data.availableQuantity = Number.parseInt(data.availableQuantity);
  const q =
    "update product set " +
    Object.keys(data)
      .map((k) => `${k} = ?`)
      .join(",") +
    " where productId='" +
    id +
    "'";
  db.query(q, [...Object.values(data)], (err, out) => {
    if (err) return res.json({ error: err.message });
    else {
      return res.json({ data: out });
    }
  });
});

app.delete("/jobs/:jobs", (req, res) => {
  const id = req.params.productId;
  const q = `DELETE FROM product WHERE productId= ?`;
  db.query(q, [id], (err, data) => {
    if (err) return res.json({ error: err.sqlMessage });
    else res.json({ data });
  });
});

app.listen(8081, () => {
  console.log("Server started");
  console.log("Listening to port 8081...");
});
