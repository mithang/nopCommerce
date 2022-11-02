
import axios from "axios";
import _ from "lodash";
var instance = axios.create({
  baseURL: "http://localhost:5000"
});





class AxiosBase {
  


  getInstance(token="", timeout=25000){
    if(!_.isEmpty(token)){//eslint-disable-line
     
      //axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      instance.interceptors.request.use(function (config) {
        
        config.headers.Authorization =  token ? `Bearer ${token}` : '';
        return config;
      });
    
    }
    
    //instance.defaults.baseURL = UrlPublish;
    instance.defaults.timeout = timeout;
    //axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    return instance;
  }
}
export default new AxiosBase();