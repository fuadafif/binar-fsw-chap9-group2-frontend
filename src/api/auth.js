import axios from "axios";

export const panggilAPI = async () => {
  const result = await axios.get("http://localhost:4000/");
  return result.data.message;
};
