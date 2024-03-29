import axios from 'axios'

const commonApi=async(reqMethod,reqUrl,reqData)=>{
    const reqConfig={
        method:reqMethod,
        url:reqUrl,
        data:reqData
    }
    return await axios(reqConfig).then(res=>{ return res}).catch(err=>{return err})
}

export default commonApi