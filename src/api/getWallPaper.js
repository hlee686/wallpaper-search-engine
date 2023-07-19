import request from "./request";

const defaultParam = {
  key: "38317741-34d80a3c208eeb60cb859abb3"
};

export const getWallPaper = async (paramObj) => {
  const params = new URLSearchParams({ ...defaultParam, ...paramObj }).toString();

  try {
    const response = await fetch(`https://pixabay.com/api/?${params}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log(`Request failed with status ${response.status}`);
      return null;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};
