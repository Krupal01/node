const endPoint = "/user_register"
const checkHeader = false

body = {
    "name":"hi",
}

data = {
    "success": true,
    "message": 20003,
    "user": {
        "name": "hiiii",
        "email": "hii@email.com",
        "phone": "7894561235",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "image": "",
        "jwt": "",
        "token": "",
        "referral_code": "CImGz3E",
        "referred_by": null,
        "referred_credit": 0,
        "userSave_id": [],
        "_id": "64ad86dc32b7127da530acbf",
        "createdAt": "2023-07-11T16:44:12.289Z",
        "updatedAt": "2023-07-11T16:44:12.289Z",
        "unique_id": 15,
        "__v": 0
    }
}

errormsg = { "success": false, "message": 20008 ,"user": null }


let data_module = {
    body: body,
    data: data,
    errormsg: errormsg
}

module.exports = {data_module, endPoint , checkHeader}
