const request = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    console.log(`Request failed with status ${response.status}`);
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default request;
