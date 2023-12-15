# Hire Quotient Backend

Deployed on Cyclic : https://nice-jade-bear-hose.cyclic.app/

## Table of Contents

- [User API](#user-api)
  - [Register User](#register-user)
  - [Login User](#login-user)
  - [Refresh Token](#refresh-token)
  - [Reset Password](#reset-password)
  - [Get All Users](#get-all-users)
  - [Get User by ID](#get-user-by-id)
  - [Update User by ID](#update-user-by-id)
  - [Delete User by ID](#delete-user-by-id)
  - [Logout User](#logout-user)

## User API

### Register User

```http
POST /api/v1/user/register

Request Body

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": 1234567890,
  "password": "your_password"
}

Response :

{
"message": "User created successfully"
}



```

### Login User

```http
POST /api/v1/user/login

Request Body
{
   "email": "john@example.com",
  "password": "your_password"
}

Response :

{
"message": "logged in successfully"
}
```

### Refresh Token

```http
GET /api/v1/user/refresh-token

Request Body
{
  "refreshToken":"bhwKJNsedtryfuiopwertyuiopsertyuiopertyuiop"
}

Response :

{
"accessToken":"gfdgfhfgdsdsaadfghfdsdfgvhfdsaasdfghgfdsaASDFG"
}
```

### Reset Password

```http
GET /api/v1/user/reset-password/:id

Params - id(user id)
Request Body
{
  "oldPassword":"abc@1234",
  "newPassword":"abcd@12345
}

Response :
{
"message":"password updated successfully"
}
```

### Get All Users

```http
GET /api/v1/user/all
Response :
{

}
```

### Get User by ID

```http
GET /api/v1/user/:id
Response :
{

}
```

### Update User By Id

```http
PUT /api/v1/user/:id
Response :
{

}
```

### Delete User By Id

```http
DELETE /api/v1/user/:id
Response :
{

}
```

### Logout User

```http
POST /api/v1/user/logout

Request Body
{
  "refreshToken":"etertyuiopyrutiyouprytuiodytfaughfuuyaoutaiyoupoi"
}

Response :
{

}
```
