const express = require('express');
const axios = require('axios');

const app = express();
// const PORT = 1000;

app.use(express.json()); // Parse JSON requests


const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'admin123',
    database:'aadhar_db',
})
db.connect(err =>{
    if(err) {
        throw err;
    }
    console.log('mysql connected');
})

// app.get('/createuser', (req, res) => {
//   //    res.send('Hello World');
//       let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, name VARCHAR(255), uid  VARCHAR(255),  mobile  VARCHAR(255), PRIMARY KEY(id))'
//       db.query(sql, err => {
//           if(err){
//               throw err;
//           }
//           res.send('Table created');
//       });
//   });



// Endpoint to receive inputs and initiate the verification process
// app.post('/verify-user', async (req, res) => {
//   try {
//     const userFormData = req.body;
//     console.log(userFormData);
//     var axios = require('axios');
//     var data = '{\r\n    "task_id": "74f4c926-250c-43ca-9c53-453e87ceacd1",\r\n    "group_id": "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",\r\n    "data": {\r\n    "aadhaar_number": "<AADHAAR NUMBER>"\r\n    }\r\n}';
    
//     var config = {
//       method: 'post',
//     maxBodyLength: Infinity,
//       url: 'https://eve.idfy.com/v3/tasks/async/verify_with_source/aadhaar_lite',
//       headers: { 
//         'api-key': '4e1fdcbc-3db0-46e3-90ce-56710ad6369a', 
//         'account-id': '2f5a4b45ffbc/fb8e3c3a-9067-425b-87bb-f37a05208f55'
//       },
//       data : data
//     };
    
//     res.json({ userFormData});
//     // res.json({ taskId: verificationResponse.data.task_id });
    
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });



// app.post('/verify-user', async (req, res) => {
//   try {
//     // const userFormData = req.body;
//     // console.log(userFormData);
   
// var data = '{\r\n    "task_id": "74f4c926-250c-43ca-9c53-453e87ceacd1",\r\n    "group_id": "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",\r\n    "data": {\r\n    "aadhaar_number": "393122591722"\r\n    }\r\n}';

// console.log("userFormData:", data);
// var config = {
//   method: 'post',
// maxBodyLength: Infinity,
//   url: 'https://eve.idfy.com/v3/tasks/async/verify_with_source/aadhaar_lite',
//   headers: { 
//     'api-key': '4e1fdcbc-3db0-46e3-90ce-56710ad6369a', 
//     'account-id': '2f5a4b45ffbc/fb8e3c3a-9067-425b-87bb-f37a05208f55'
//   },
//   data : data
// };
// axios(config)
// .then(function (response) {
  
//   console.log(JSON.stringify(response.data));
// })
  
// res.json( response.data);
//     // res.json({ taskId: verificationResponse.data.task_id });
    
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// app.post('/verify-user', async (req, res) => {
//   try {
//     // Assuming req.body contains the user data
//     const userFormData = req.body;

//     const requestData = {
//       task_id: '74f4c926-250c-43ca-9c53-453e87ceacd1',
//       group_id: '8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e',
//       data: {
//         aadhaar_number: userFormData.aadhaar_number, // Assuming aadhaar_number is in the request body
//       },
//     };

//     const config = {
//       method: 'post',
//       maxBodyLength: Infinity,
//       url: 'https://eve.idfy.com/v3/tasks/async/verify_with_source/aadhaar_lite',
//       headers: {
//         'api-key': '4e1fdcbc-3db0-46e3-90ce-56710ad6369a',
//         'account-id': '2f5a4b45ffbc/fb8e3c3a-9067-425b-87bb-f37a05208f55',
//         'Content-Type': 'application/json', // Specify the content type
//       },
//       data: requestData, // Pass the object directly as the data property
//     };

//     // Make the POST request
//     const response = await axios(config);

//     // Handle the response
//     console.log(JSON.stringify(response.data));
//     res.json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });



// app.post('/verify-user/:id', async (req, res) => {
//   try {
//     // Assuming req.body contains the user data
//     const userFormData = req.body;

//     const requestData = {
//       task_id: '74f4c926-250c-43ca-9c53-453e87ceacd1',
//       group_id: '8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e',
//       data: {
//         aadhaar_number: userFormData.aadhaar_number, // Assuming aadhaar_number is in the request body
//       },
//     };

//     const config = {
//       method: 'post',
//       maxBodyLength: Infinity,
//       url: 'https://eve.idfy.com/v3/tasks/async/verify_with_source/aadhaar_lite',
//       headers: {
//         'api-key': '4e1fdcbc-3db0-46e3-90ce-56710ad6369a',
//         'account-id': '2f5a4b45ffbc/fb8e3c3a-9067-425b-87bb-f37a05208f55',
//         'Content-Type': 'application/json', // Specify the content type
//       },
//       data: requestData, // Pass the object directly as the data property
//     };

//     // Make the POST request
//     const response = await axios(config);

//     // Handle the response
//     console.log(JSON.stringify(response.data));
//     res.json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// app.get('/verify-user/:id', async (req, res) => {
//   try {
//     const options = {
//       method: 'Post',
//     url: 'https://udyam-aadhaar-verification.p.rapidapi.com/v3/tasks',
//     params: {
//       request_id: Id
//     },
//     headers: {
//       'X-RapidAPI-Key': '87b05ecf7emsh9310949d7f2baf4p161ba5jsnce58d01a5394',
//       'X-RapidAPI-Host': 'udyam-aadhaar-verification.p.rapidapi.com'
//     }
//   };

//     const response = await axios.request(options);
//     res.json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

 


   
    app.post('/register-user', async (req, res) => {
      const userRegisterData = req.body;
      console.log("output1", userRegisterData);
    
      try {
        let results;
    
        let sqlSelect = `SELECT * FROM register_user`;
        // let sqlSelect = `SELECT * FROM register_user WHERE email = '${userRegisterData.email}'`;
        console.log("sqlSelect",sqlSelect);
        db.query(sqlSelect, (err, rows) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ status: false, message: "Error checking user email", rows });
          }

          if (rows && Array.isArray(rows)) {
            results = rows;
          const emails = results.map(row => row.email);

          console.log("Emails:", emails);

              // if (results && userRegisterData.email !== emails[3]) {
                if (emails.includes(userRegisterData.email)) {
                  return res.status(500).json({ status: false, message: "User email already exists" });
                } else {
             
                  let post = {
                    username: userRegisterData.username,
                    email: userRegisterData.email,
                    mobile: userRegisterData.mobile,
                    password: userRegisterData.password,
                  };
          
                  let sqlInsert = "INSERT INTO register_user SET ?";
                  db.query(sqlInsert, post, (err, result) => {
                    if (err) {
                      console.error(err);
                      return res.status(500).json({ status: false, message: "Failed to add user" });
                    }
          
                    return res.json({ status: true, message: "User registered successfully!" });
                  });
                } 
                // else {
                //   return res.status(500).json({ status: false, message: "User email already exists" });
                // }

          } else {
            console.error("Query result is not an array:", rows);
            return res.status(500).json({ status: false, message: "Internal Server Error" });
          }

         
         
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, message: "Internal Server Error" });
      }
    });
    
   
    app.post('/login-user', async (req, res) => {
      const userRegisterData = req.body;
      console.log("output1", userRegisterData);
    
      try {
        let results;
    
        let sqlSelect = `SELECT * FROM register_user`;
        // let sqlSelect = `SELECT * FROM register_user WHERE email = '${userRegisterData.email}'`;
        console.log("sqlSelect",sqlSelect);
        db.query(sqlSelect, (err, rows) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ status: false, message: "Error checking user email", rows });
          }

          if (rows && Array.isArray(rows)) {
            results = rows;
          const emails = results.map(row => row.email);
          const password = results.map(row => row.password);

          console.log("Emails:", emails);

              // if (results && userRegisterData.email !== emails[3]) {
                if (emails.includes(userRegisterData.email) && password.includes(userRegisterData.password)) {

                  
                  return res.status(200).json({ status: true, message: "User logged in" });
                } else {

                  return res.status(500).json({ status: false, message: "User does not exists or incorrect email or password" });
                } 
              

          } else {
            console.error("Query result is not an array:", rows);
            return res.status(500).json({ status: false, message: "Internal Server Error" });
          }

         
         
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, message: "Internal Server Error" });
      }
    });
    


  // const encodedParams = new URLSearchParams();
  // encodedParams.set('txn_id', '17c6fa41-778f-49c1-a80a-cfaf7fae2fb8');
  // encodedParams.set('consent', 'Y');
  // // encodedParams.set('uidnumber', '404279923196');
  // encodedParams.set('uidnumber', userFormData.uid);
  // encodedParams.set('clientid', '222');
  // encodedParams.set('method', 'uidvalidatev2');
  
  // const options = {
  //   method: 'POST',
  //   url: 'https://verifyaadhaarnumber.p.rapidapi.com/Uidverifywebsvcv1/VerifyAadhaarNumber',
  //   headers: {
  //     'content-type': 'application/x-www-form-urlencoded',
  //     'X-RapidAPI-Key': '87b05ecf7emsh9310949d7f2baf4p161ba5jsnce58d01a5394',
  //     'X-RapidAPI-Host': 'verifyaadhaarnumber.p.rapidapi.com'
  //   },
  //   data: encodedParams,
  // };
  
  
  //   const response = await axios.request(options);
  //   console.log("response.data.Verify_status", response.data.Verify_status);
  //   // if(response.data.Verify_status === "Uid is Valid" && response.data.transaction_status === 1 ){
  //     // console.log("success_data", response.data.Succeeded[4].Verify_status);
  //     console.log("success_data", response.data.Succeeded?.Verify_status);
  //     // console.log("success_data", response.data.Succeeded[4]);
  //       let post = {
  //         name: userFormData.name,
  //         uid: userFormData.uid,
  //         mobile: userFormData.mobile,
  //       }
  //       let sqlInsert = "INSERT INTO user SET ?";
  //       db.query(sqlInsert, post, (err, result) => {
  //         if (err) {
  //           console.error(err);
  //           return res.status(500).json({ status: false, message: "Failed to add user" });
  //         }
    
  //         let sqlSelect = `SELECT * FROM user WHERE uid = '${userFormData.uid}'`;
  //         db.query(sqlSelect, (err, results) => {
  //           if (err) {
  //             console.error(err);
  //             return res.status(500).json({ status: false, message: "Failed to retrieve user details" });
  //           }
    
  //           console.log(results);
  //           res.json({ status: true, message: "User added & verified successfully!", results });
  //         });
  //       });
     
  
  //   //  }
  //   //  else {
  //   //   console.log("wrong_data", response.data.Verify_status);
  //   //  }
  
  //   } catch (error) {
  //     console.error(error);
  //   }
  
  




app.post('/verify-user', async (req, res) => {
// const axios = require('axios');
const userFormData = req.body;
console.log("output1",userFormData);
try {
const encodedParams = new URLSearchParams();
encodedParams.set('txn_id', '17c6fa41-778f-49c1-a80a-cfaf7fae2fb8');
encodedParams.set('consent', 'Y');
// encodedParams.set('uidnumber', '404279923196');
encodedParams.set('uidnumber', userFormData.uid);
encodedParams.set('clientid', '222');
encodedParams.set('method', 'uidvalidatev2');

const options = {
  method: 'POST',
  url: 'https://verifyaadhaarnumber.p.rapidapi.com/Uidverifywebsvcv1/VerifyAadhaarNumber',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '87b05ecf7emsh9310949d7f2baf4p161ba5jsnce58d01a5394',
    'X-RapidAPI-Host': 'verifyaadhaarnumber.p.rapidapi.com'
  },
  data: encodedParams,
};


	const response = await axios.request(options);
	console.log("response.data.Verify_status", response.data.Verify_status);
  // if(response.data.Verify_status === "Uid is Valid" && response.data.transaction_status === 1 ){
    // console.log("success_data", response.data.Succeeded[4].Verify_status);
    console.log("success_data", response.data.Succeeded?.Verify_status);
    // console.log("success_data", response.data.Succeeded[4]);
      let post = {
        name: userFormData.name,
        uid: userFormData.uid,
        mobile: userFormData.mobile,
        gender: userFormData.gender,  
        yob : userFormData.yob,
				co : userFormData.co,
        house: userFormData.house,
        street: userFormData.street,
        loc : userFormData.loc,               
        vtc: userFormData.vtc,
        po : userFormData.po,                
        dist: userFormData.dist,
        subdist: userFormData.subdist,
        state : userFormData.state,                
        pc : userFormData.pc,
        dob : userFormData.dob,  
      }

      let sqlInsert = "INSERT INTO user SET ?";
      db.query(sqlInsert, post, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ status: false, message: "Failed to add user" });
        }
  
        let sqlSelect = `SELECT * FROM user WHERE uid = '${userFormData.uid}'`;
        db.query(sqlSelect, (err, results) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ status: false, message: "Failed to retrieve user details" });
            }
  
          console.log(results);
          res.json({ status: true, message: "User added & verified successfully!", results });
          });
      });
   

  //  }
  //  else {
  //   console.log("wrong_data", response.data.Verify_status);
  //  }

  } catch (error) {
    console.error(error);
  }
});




   
app.get('/user-data', async (req, res) => {
  const userRegisterData = req.body;
  // console.log("output1", userRegisterData);

  try {
    let results;

    let sqlSelect = `SELECT * FROM user`;
    // let sqlSelect = `SELECT * FROM register_user WHERE email = '${userRegisterData.email}'`;
    console.log("sqlSelect",sqlSelect);
    db.query(sqlSelect, (err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ status: false, message: "Error checking user email", rows });
      }
      return res.status(200).json({ status: true, message: "All users data", rows });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: "Internal Server Error" });
  }
});

app.listen(3000, '0.0.0.0' , () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
