import React from 'react';
import globalHook from 'use-global-hook';
 import axios from 'axios';
 import API_KEY from "../Api/api"

const initialState = {
    adminData: localStorage.getItem("admin" || "user" || "doctor"),
};
 
const actions = {
  loginAdmin: async (store, data) => {
    const adminData = await axios.post(`${API_KEY.URL.baseurl}/${API_KEY.path.adminLogin}`,data)
    store.setState({ adminData: adminData });
  }
};
 





export default globalHook(React, initialState, actions);