// const formidable = require('formidable');
// const _ = require('lodash');
// const fs = require('fs');
// const AWS = require('aws-sdk')


// exports.addResumeToS3 =  async (req:any,res:any) => {
//     try {
    
//     let form = new formidable.IncomingForm();
    
//     form.keepExtensions = true;
//     form.multiples = true
//     form.parse(req, async (err:any, fields:any, files:any) => {
//         if (err) {
//             return res.status(400).json({
//                 error: 'Image could not be uploaded'
//             });
//         }
//         else{
         
//             console.log(files.resume)
//             let fileName = files.resume.path
       
//             // Read content from the file
//             const fileContent = fs.readFileSync(fileName);
        
//             // Setting up S3 upload parameters
//             const params = {
//                 Bucket: 'swiftimages',
//                 Key: files.resume.name, // File name you want to save as in S3
//                 Body: fileContent
//             };
              
                      
                  
//             // Uploading files to the bucket
//             s3.upload(params, async function(err:any, data:any) {
//             try{
//                 if (err) {
//                     throw err;
//                 }
    
//                 console.log(`File uploaded successfully. ${data.Location}`);
//                 return data.location
                
            

                        
            
//                 }
//                 catch (err:any) {
//                     console.error(err.message);
//                     return;
//                     } 
//             });
            
            
            

        
        
       
 
  
            
//         }
      

//     })
// }
// catch (err:any) {
//        console.error(err.message);
//       }


    
    


// };