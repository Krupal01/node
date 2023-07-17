
const endPoint = "/login"

body = {
    "email": "abc@mail.com",
    "password": "abcABC@12",
}

data = {
    "success": true,
    "user": {
        "_id": "64ad86dc32b7127da530acbf",
        "name": "hiiii",
        "email": "hii@email.com",
        "phone": "7894561235",
        "password": "de0cb9bc526347658f086ab536750ea6",
        "image": "",
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGFkODZkYzMyYjcxMjdkYTUzMGFjYmYiLCJ0b2tlbiI6InFZWm9rRHZFclBRQzI4eDd3YXp0NVd4eUFNTkFLSUlmIiwiaWF0IjoxNjg5MDk0MDQwfQ.KtOxOJ7WlXXO1HBLBnVG0z6AxUsmmbPq6t29wLFxz1o",
        "token": "qYZokDvErPQC28x7wazt5WxyAMNAKIIf",
        "referral_code": "CImGz3E",
        "referred_by": null,
        "referred_credit": 0,
        "userSave_id": [],
        "createdAt": "2023-07-11T16:44:12.289Z",
        "updatedAt": "2023-07-11T16:49:03.927Z",
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

module.exports = {data_module,endPoint}