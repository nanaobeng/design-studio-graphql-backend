"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey: ''
});
exports.addResumeToS3 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('here');
        let form = new formidable.IncomingForm();
        form.keepExtensions = true;
        form.multiples = true;
        form.parse(req, (err, fields, files) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                console.log('error');
                return res.status(400).json({
                    error: 'File could not be uploaded'
                });
            }
            else {
                let fileName = files.resume.filepath;
                // Read content from the file
                const fileContent = fs.readFileSync(fileName);
                // Setting up S3 upload parameters
                const params = {
                    Bucket: 'strngr-files',
                    Key: files.resume.originalFilename,
                    Body: fileContent
                };
                // Uploading files to the bucket
                s3.upload(params, function (err, data) {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            if (err) {
                                throw err;
                            }
                            // console.log(`File uploaded successfully. ${data.Location}`);
                            res.json(data.Location);
                        }
                        catch (err) {
                            console.error(err.message);
                            return;
                        }
                    });
                });
            }
        }));
    }
    catch (err) {
        console.error(err.message);
    }
});
