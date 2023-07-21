import axios from "../axios";
const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
  //return axios.post("/api/login");
};
const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-user?id=${inputId}`);
};
const createNewUserService = (data) => {
  return axios.post(`/api/create-new-user`, data);
};
const deleteUserService = (userId) => {
  return axios.delete(`/api/delete-user`, {
    data: {
      id: userId,
    },
  });
};
const editUserService = (inputData) => {
  return axios.put(`/api/edit-user`, inputData);
};
const getAllCodeService = (inputType) => {
  return axios.get(`/api/allcode?type=${inputType}`);
};
const getDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`);
};
const getAllDoctor = () => {
  return axios.get(`/api/get-all-doctor`);
};
const saveDetailDoctorService = (data) => {
  return axios.post(`/api/save-infor-doctor`, data);
};
const getDetaiInforDoctor = (inputId) => {
  return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`);
};
export {
  handleLoginApi,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
  getAllCodeService,
  getDoctorHomeService,
  getAllDoctor,
  saveDetailDoctorService,
  getDetaiInforDoctor,
};
