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

## Request Body :

### Request Body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": 1234567890,
  "password": "your_password"
}

## Response :

{
"message": "User created successfully"
}



```
