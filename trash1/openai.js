const axios = require("axios");
const sendUpdate = async (...args) => {
  try {
  const [url] = args
  console.log("Received params:", url);
  const response = await axios.get(url)
  return response.data || null
  }
  catch (e) {
    console.log(e)
    return null
  }
  // Thực hiện các xử lý khác với params
};
