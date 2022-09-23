const express = require("express");
const excelToJson = require('convert-excel-to-json');
const mongoose = require("mongoose");
const file_upload = require("express-fileupload");
const fs = require("fs");

try {
    fs.mkdirSync(__dirname + "/excel_uploads");
}
catch (error) { }
const app = express();
app.use(file_upload());

mongoose.connect('mongodb+srv://raunak:raunakbhagat@raunaktemp.cunc7hy.mongodb.net/?retryWrites=true&w=majority',
    {}
);

const schema = new mongoose.Schema({ Name: 'string', Type: 'string', Breed: 'string', Age: Number });
const Pet = mongoose.model('Pet-Table', schema);

app.post("/api/pet", (req, res, next) => {
    const excel_file = req.files.file;
    excel_file.mv(__dirname + "/excel_uploads/" + excel_file.name, function (err, result) {
        if (err)
            throw err;
        else {
            const result = excelToJson({
                sourceFile: __dirname + "/excel_uploads/" + excel_file.name,
                header: {
                    rows: 1
                },
                columnToKey: {
                    A: 'Name',
                    B: 'Type',
                    C: 'Breed',
                    D: 'Age'
                }
            });
            Pet.insertMany(result["Sheet1"])
                .then(function (docs) {
                    res.sendStatus(201);
                })
                .catch(function (err) {
                    res.status(500).send(err);
                });
        }
    });
})

app.get("/api/pet", async (req, res, next) => {
    const data = await Pet.find();
    res.json(data);
})

app.get("/api/pet/:petId", async (req, res, next) => {
    try {
        var id = req.params.petId;
        const data = await Pet.findById(id);
        res.json(data);
    }
    catch (error) {
        res.sendStatus(404);
    }
})

app.patch("/api/pet/:petId", async (req, res, next) => {
    try {
        var patch_id = req.params.petId;
        const new_data = req.body;
        const data = await Pet.findByIdAndUpdate(patch_id, new_data);
        const updated_data = await Pet.findById(patch_id);
        res.json(updated_data);
    }
    catch (error) {
        res.sendStatus(404);
    }
})

app.delete("/api/pet/:petId", async (req, res, next) => {
    try {
        var delete_id = req.params.petId;
        await Pet.findByIdAndDelete(delete_id);
        res.sendStatus(204);
    }
    catch (error) {
        res.sendStatus(404);
    }
})

app.listen(8080, () => {
    console.log("Started on Port 8080");
})