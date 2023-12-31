# Hire Quotient Backend

Documentation Link : https://documenter.getpostman.com/view/19171310/2s9Ykkg3xF

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
  - [Post By User](#Post By User)
  - [Get All Posts](#Get All Posts)
  - [Comment on any post by user](#Comment on any post by user)
  - [Get all comments on particular post](#Get all comments on particular post)

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
Header
{
"Authorization" : jwt token in Bearer format
}
Request Body
{
  "oldPassword":"abc@1234",
  "newPassword":"abcd@12345"
}

Response :
{
"message":"password updated successfully"
}
```

### Get All Users

```http
GET /api/v1/user/all
Header
{
"Authorization" : jwt token in Bearer format
}
Response :
{
  "users": [
    {
      "_id": "657bf1df2cca85a67330fa48",
      "name": "Parkhi",
      "email": "parkhi89@gmail.com",
      "phone": 7668011605,
      "password": "$2b$10$Yqlpi92d8IIV2q151vGBd.2ZbBpSuJS66vAwhkC4Esb3TAFUXYzee",
      "__v": 0,
      "refreshToken": null
    }
  ]
}
```

### Get User by ID

```http
GET /api/v1/user/:id
Header
{
"Authorization" : jwt token in Bearer format
}
Response :
{
  "user": {
    "_id": "657ca8788c6a008ce3ab2ba2",
    "name": "Parkhi",
    "email": "parkhi@gmail.com",
    "phone": 7668011905,
    "password": "$2b$10$fQwZMCoIfhe7To/kXopGgOLbumHiOMz.pk13becrNnpJVRSBTmCZ2",
    "__v": 0,
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTdjYTg3ODhjNmEwMDhjZTNhYjJiYTIiLCJpYXQiOjE3MDI2Njg0Njd9.EMsxJHTpzjXIcNbJEej8tzxAmem-efveVi1Vl6vv9uE"
  }
}
```

### Update User By Id

```http
PUT /api/v1/user/:id
Header
{
"Authorization" : jwt token in Bearer format
}
Response :
{
  "message": "User updated successfully",
  "user": {
    "_id": "657bf1df2cca85a67330fa48",
    "name": "Parkhi",
    "email": "parkhig@gmail.com",
    "phone": 7668011605,
    "password": "$2b$10$Yqlpi92d8IIV2q151vGBd.2ZbBpSuJS66vAwhkC4Esb3TAFUXYzee",
    "__v": 0,
    "refreshToken": null
  }
}
```

### Delete User By Id

```http
DELETE /api/v1/user/:id
Header
{
"Authorization" : jwt token in Bearer format
}
Response :
{
  "message": "User deleted successfully",
  "user": {
    "_id": "657ca8788c6a008ce3ab2ba2",
    "name": "Parkhi",
    "email": "parkhi@gmail.com",
    "phone": 7668011905,
    "password": "$2b$10$fQwZMCoIfhe7To/kXopGgOLbumHiOMz.pk13becrNnpJVRSBTmCZ2",
    "__v": 0,
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTdjYTg3ODhjNmEwMDhjZTNhYjJiYTIiLCJpYXQiOjE3MDI2Njg0Njd9.EMsxJHTpzjXIcNbJEej8tzxAmem-efveVi1Vl6vv9uE"
  }
}
```

### Logout User

```http
POST /api/v1/user/logout
Header
{
"Authorization" : jwt token in Bearer format
}
Request Body
{
  "refreshToken":"etertyuiopyrutiyouprytuiodytfaughfuuyaoutaiyoupoi"
}

{
  "message": "Logout successful"
}
```

### Post By User

```http
POST /api/v1/post

Header
{
  "Authorization" : jwt token in Bearer format
}
Request Body
{
  "content":"test post"
}
Response:
{
  "user_id": "657d205b4d241d1aa3f1d751",
  "content": "test",
  "_id": "657d2192242196f01b93046b",
  "timestamp": "2023-12-16T04:03:30.102Z",
  "__v": 0
}
```

### Get All Posts

```http
GET /api/v1/post
Response:
[
  {
    "_id": "657d2192242196f01b93046b",
    "user_id": "657d205b4d241d1aa3f1d751",
    "content": "test",
    "timestamp": "2023-12-16T04:03:30.102Z",
    "__v": 0
  },
  {
    "_id": "657d2192242196f01b93046b",
    "user_id": "657d205b4d241d1aa3f1d751",
    "content": "test",
    "timestamp": "2023-12-16T04:03:30.102Z",
    "__v": 0
  },
  {
    "_id": "657d2192242196f01b93046b",
    "user_id": "657d205b4d241d1aa3f1d751",
    "content": "test",
    "timestamp": "2023-12-16T04:03:30.102Z",
    "__v": 0
  }
]
```

### Comment on any post by user

```http
POST /api/v1/comment

Header
{
  "Authorization" : jwt token in Bearer format
}
Query
{
  post_id
}
Request Body
{
  "content":"test comment"
}
Response:
{
  "post_id": "657d2192242196f01b93046b",
  "user_id": "657d205b4d241d1aa3f1d751",
  "content": "good",
  "_id": "657d23a3dc08cfaedc7694e6",
  "timestamp": "2023-12-16T04:12:19.845Z",
  "__v": 0
}
```

### Get all comments on particular post

```http
GET /api/v1/comment/posts/:post_id
params - post_id
Response:
[
  {
    "_id": "657d2192242196f01b93046b",
    "user_id": "657d205b4d241d1aa3f1d751",
    "content": "test",
    "timestamp": "2023-12-16T04:03:30.102Z",
    "__v": 0
  },
  {
    "_id": "657d2192242196f01b93046b",
    "user_id": "657d205b4d241d1aa3f1d751",
    "content": "test",
    "timestamp": "2023-12-16T04:03:30.102Z",
    "__v": 0
  }
]
```
