import { ConnectionIsNotSetError } from "typeorm";

const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const AWS = require('aws-sdk')
const s3 = new AWS.S3({
    accessKeyId:'AKIASYFW75HGVSAGEWEO',
        secretAccessKey:'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'

})

exports.addResumeToS3 =  async (req:any,res:any) => {
    try {

        console.log('here')

        
    
    let form = new formidable.IncomingForm();

    form.keepExtensions = true;
    form.multiples = true
    form.parse(req, async (err:any, fields:any, files:any) => {
        if (err) {
            console.log('error')
            return res.status(400).json({
                error: 'File could not be uploaded'
            });
        }
        else{

            


           
         
         
            let fileName = files.resume.filepath
       
            // Read content from the file
            const fileContent = fs.readFileSync(fileName);
        
            // Setting up S3 upload parameters
            const params = {
                Bucket: 'strngr-files',
                Key: files.resume.originalFilename, // File name you want to save as in S3
                Body: fileContent
            };
              
                      
                  
            // Uploading files to the bucket
            s3.upload(params, async function(err:any, data:any) {
            try{
                if (err) {
                    throw err;
                }
    
                // console.log(`File uploaded successfully. ${data.Location}`);
                     res.json(data.Location);
                
            

                        
            
                }
                catch (err:any) {
                    console.error(err.message);
                    return;
                    } 
            });
            
            
            

        
        
       
 
  
            
        }
      

    })
}
catch (err:any) {
       console.error(err.message);
      }


    
    


};


