import apiClient from "./api-client";

interface User {
  id: number;
  name: string;
  email: string;
}

const getUser = () => {
  return apiClient.get<User>("/user");
};
const registerUser = (
  name: string,
  email: string,
  password: string,
  password_confirmation: string
) => {
  return apiClient.post("/register/", {
    name,
    email,
    password,
    password_confirmation,
  });
};

export default { getUser, registerUser };
