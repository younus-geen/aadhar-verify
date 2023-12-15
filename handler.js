// handler/verifyDoctor.js
const axios = require('axios');

module.exports.verifyDoctor = async (event) => {
  try {
    const userFormData = JSON.parse(event.body);

    const verificationOptions = {
      method: 'POST',
      url: 'https://mci-nmc-doctor-verification.p.rapidapi.com/v3/tasks/async/verify_with_source/nmc_doctor',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '87b05ecf7emsh9310949d7f2baf4p161ba5jsnce58d01a5394',
        'X-RapidAPI-Host': 'mci-nmc-doctor-verification.p.rapidapi.com',
      },
      data: {
        task_id: '74f4c926-250c-43ca-9c53-453e87ceacd1',
        group_id: '8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e',
        data: userFormData,
      },
    };

    const verificationResponse = await axios.request(verificationOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ taskId: verificationResponse.data }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

// handler/checkStatus.js
const axios = require('axios');

module.exports.checkStatus = async (event) => {
  try {
    const { taskId } = event.pathParameters;

    const checkStatusOptions = {
      method: 'GET',
      url: `https://mci-nmc-doctor-verification.p.rapidapi.com/v3/tasks`,
      params: {
        request_id: taskId,
        registration_number: '26986', // Replace with the actual doctor ID you want to verify
      },
      headers: {
        'X-RapidAPI-Key': '87b05ecf7emsh9310949d7f2baf4p161ba5jsnce58d01a5394',
        'X-RapidAPI-Host': 'mci-nmc-doctor-verification.p.rapidapi.com',
      },
    };

    const statusResponse = await axios.request(checkStatusOptions);

    return {
      statusCode: 200,
      body: JSON.stringify(statusResponse.data),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

