const axios = require("axios");
const sendUpdate = async (...args) => {
  console.log("Received params:", args);
  const [url] = args
  const response = await axios.get(url)
  return response.data || null
  // Thực hiện các xử lý khác với params
};
