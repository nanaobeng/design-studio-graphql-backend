const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(user_id:number,email:string) {
  const payload = {
    user: {
      id: user_id,
      email :  email ,
    }
  };
  


  return jwt.sign(payload, 'temptestjwt', { expiresIn: "1h" });
}

module.exports = jwtGenerator;