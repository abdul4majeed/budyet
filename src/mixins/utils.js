import axios from 'axios';

export const utils =
{
    methods:{
        AjaxCall(method,url,data)
        {
        //     let axiosConfig = {
        //         headers: {
        // //             'Content-Type' : 'application/json; charset=UTF-8',
        // //             // 'Accept': 'Token',
        // //             // "Access-Control-Allow-Origin": "*",

        // //   'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
        //   'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        // //   'Access-Control-Allow-Credentials': true,     
        // // //   'Content-Type': 'text/html; charset=utf-8'   
              
        //         }
        //       };
           return axios({
                method: method,
                url: url,
                data : (data),
                // headers: axiosConfig,
              });
        },

        toastrAlter(value,msg,timeout=5000)
        {
            switch(value)
            {
                case 'success' :
                        this.$toaster.success(msg, {timeout: timeout});
                break;
                case 'info' :
                        this.$toaster.info(msg, {timeout: timeout});
                break;
                case 'error' :
                        this.$toaster.error(msg, {timeout: timeout});
                break;
                case 'warning' :
                        this.$toaster.warning(msg, {timeout: timeout});
                break;
            }
        },

        validationHumanReadableMsg(errorObject)
        {
            for (const key in errorObject) {
                if (errorObject.hasOwnProperty(key)) {

                    this.toastrAlter('error','Validation Error :' + errorObject[key][0]);
                }
             }
        },

        dbHumanReadableMsg(value)
        {
            if(value == "")
                return "No Error to Display";
                
            value = value.split(':')[2].split('(')[0];
            let space_index = value.indexOf(' ',1);
            return "Server Error :" + value.slice(space_index);
        }
                        //  ValidationState: General error : 00001 Field 'Something' is required (Budyet : 'Front End Field Error')
            // let msg = "SQLSTATE[HY000]: General error: 1364 Field 'msg' doesn't have a default value (SQL: insert into `contact_us` (`name`, `email`, `updated_at`, `created_at`) values (sdxc, esdxc@sdfxc.com, 2019-11-10 14:21:58, 2019-11-10 14:21:58))";
    }
}