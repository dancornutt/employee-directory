import axios from "axios";

export default {
  search: function(num) {
    return axios.get(`https://randomuser.me/api/?results=${num}`);
  }
};