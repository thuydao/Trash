
const sendUpdate = async (...args) => {
  try {
  const [url] = args
  console.log("Received params:", url, args);
  const response = await fetch(url);
  const data = await response.json();
  return data || null;
  }
  catch (e) {
    console.log(e)
    return null
  }
  // Thực hiện các xử lý khác với params
};
