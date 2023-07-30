import actionTypes from "./actionTypes";
import {
  getAllCodeService,
  createNewUserService,
  getAllUsers,
  deleteUserService,
  editUserService,
  getDoctorHomeService,
  getAllDoctor,
  saveDetailDoctorService,
} from "../../services/userService";
import { toast } from "react-toastify";

// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_GENDER_START });
      let res = await getAllCodeService("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFail());
      }
    } catch (e) {
      dispatch(fetchGenderFail());
      console.log("fetch gender start error ", e);
    }
  };
};
export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});
export const fetchGenderFail = () => ({
  type: actionTypes.FETCH_GENDER_FAIL,
});

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFail());
      }
    } catch (e) {
      dispatch(fetchPositionFail());
      console.log("fetch Position start error ", e);
    }
  };
};
export const fetchPositionSuccess = (postionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: postionData,
});
export const fetchPositionFail = () => ({
  type: actionTypes.FETCH_POSITION_FAIL,
});

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("ROLE");
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFail());
      }
    } catch (e) {
      dispatch(fetchRoleFail());
      console.log("fetch Role start error ", e);
    }
  };
};
export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      console.log("check create user redux", res);
      if (res && res.errCode === 0) {
        toast.success("Create a New User success!");
        dispatch(createUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.error("Create a New User error!");
        dispatch(createUserFail());
      }
    } catch (e) {
      dispatch(createUserFail());
      console.log("fetch Role start error ", e);
    }
  };
};
export const createUserSuccess = () => ({
  type: "CREATE_USER_SUCCESS",
});

export const createUserFail = () => ({
  type: "CREATE_USER_FAIL",
});

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});
export const fetchRoleFail = () => ({
  type: actionTypes.FETCH_ROLE_FAIL,
});

export const fetchAllUsersStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("ALL");
      if (res && res.errCode === 0) {
        dispatch(fetchAllUsersSuccess(res.users.reverse()));
      } else {
        toast.error("fetch All Users start error!");
        dispatch(fetchAllUsersFail());
      }
    } catch (e) {
      toast.error("fetch All Users start error!");
      dispatch(fetchAllUsersFail());
      console.log("fetchAllUsers start error ", e);
    }
  };
};

export const fetchAllUsersSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: data,
});
export const fetchAllUsersFail = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAIL,
});

export const editUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUserService(data);
      console.log("check create user redux", res);
      if (res && res.errCode === 0) {
        toast.success("Update User success!");
        dispatch(editUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.error("edit User error!");
        dispatch(editUserFail());
      }
    } catch (e) {
      dispatch(editUserFail());
      toast.error("edit User error!");
      console.log("fetch Role start error ", e);
    }
  };
};
export const editUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});
export const editUserFail = () => ({
  type: actionTypes.EDIT_USER_FAIL,
});

export const deleteAUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);
      console.log("check create user redux", res);
      if (res && res.errCode === 0) {
        toast.success("Delete User success!");
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.error("Delete User error!");
        dispatch(deleteUserFail());
      }
    } catch (e) {
      dispatch(deleteUserFail());
      toast.error("Delete User error!");
      console.log("fetch Role start error ", e);
    }
  };
};
export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});
export const deleteUserFail = () => ({
  type: actionTypes.DELETE_USER_FAIL,
});
//let res1 = await getDoctorHomeService(3);
export const fetchTopDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getDoctorHomeService("10");
      console.log(res);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
          dataDoctors: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_TOP_DOCTORS_FAIL ", e);
      dispatch({
        type: actionTypes.FETCH_TOP_DOCTORS_FAIL,
      });
    }
  };
};

export const fetchAllDoctors = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllDoctor();
      console.log(res);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
          dataDr: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_ALL_DOCTORS_FAIL ", e);
      dispatch({
        type: actionTypes.FETCH_ALL_DOCTORS_FAIL,
      });
    }
  };
};

export const saveDetailDoctor = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await saveDetailDoctorService(data);
      console.log(res);
      if (res && res.errCode === 0) {
        toast.success("Save Infor Detail Doctor success!");
        dispatch({
          type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
        });
      } else {
        toast.error("Save Infor Detail Doctor error!");
        dispatch({
          type: actionTypes.SAVE_DETAIL_DOCTOR_FAIL,
        });
      }
    } catch (e) {
      toast.error("Save Infor Detail Doctor error!");

      console.log("SAVE_DETAIL_DOCTOR_FAIL ", e);
      dispatch({
        type: actionTypes.SAVE_DETAIL_DOCTOR_FAIL,
      });
    }
  };
};

export const fetchAllScheduleTime = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("TIME");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
          dataTime: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_ALL_DOCTORS_FAIL ", e);
      dispatch({
        type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAIL,
      });
    }
  };
};
