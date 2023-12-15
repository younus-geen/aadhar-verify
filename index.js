const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 1000; 
const makeRequest = async () => {
  const options = {
    method: 'POST',
    url: 'https://udyam-aadhaar-verification.p.rapidapi.com/v3/tasks/async/verify_with_source/udyam_aadhaar',
    headers: {
      'content-type': 'text/plain',
      'X-RapidAPI-Key': '87b05ecf7emsh9310949d7f2baf4p161ba5jsnce58d01a5394',
      'X-RapidAPI-Host': 'udyam-aadhaar-verification.p.rapidapi.com'
    },
    data: ''
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

app.get('/', async (req, res) => {
  try {
    const options = {
      method: 'GET',
    url: 'https://udyam-aadhaar-verification.p.rapidapi.com/v3/tasks',
    params: {
      request_id: '68bbb910-da9b-4d8a-9a1d-4bd878b19846'
    },
    headers: {
      'X-RapidAPI-Key': '87b05ecf7emsh9310949d7f2baf4p161ba5jsnce58d01a5394',
      'X-RapidAPI-Host': 'udyam-aadhaar-verification.p.rapidapi.com'
    }
  };

    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Call the async function
makeRequest();
