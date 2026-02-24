import axios from "axios";

export const loginApi = async ({ email, password }) => {

  console.log("Sending login request:", { email, password });


  const response = await axios.post("http://localhost:4000/api/auth/login", {
    email,
    password
  });
  return response.data;
};
