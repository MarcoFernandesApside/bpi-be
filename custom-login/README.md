# Project: BPI Custom Login

## Description

To run the custom login backend in your machine:

- First you must run **npm install** in the root of this directory
- Second you must run **npm run dev** to run the backend in the background, the default port is **3030**.
- Third and last one, if you want to manage the users and create new ones you can use the manager, to use it just run **npm run manage**, the default port for the manager is **3000**.

Down below you will find the routes to use in your angular application for log in, check token, log out and sign up.

---

## Variables

| Variable | Value                                             |
| -------- | ------------------------------------------------- |
| URL      | http://localhost:3030/api                         |
| Token    | JWT token generated when logging in or signing up |

---

## End-point: Sign up

### Method: POST

> ```
> {{URL}}/signup
> ```

### Body (**raw**)

```json
{
  "email": "test@test.com",
  "password": "123456",
  "role": "Admin"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login

### Method: POST

> ```
> {{URL}}/login
> ```

### Body (**raw**)

```json
{
  "email": "florian@apside.pt",
  "password": "123456"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Check Token

### Method: GET

> ```
> {{URL}}/
> ```

### 🔑 Authentication bearer

| Param | value     | Type   |
| ----- | --------- | ------ |
| token | {{Token}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get user info

### Method: GET

> ```
> {{URL}}/user
> ```

### 🔑 Authentication bearer

| Param | value     | Type   |
| ----- | --------- | ------ |
| token | {{Token}} | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Logout

### Method: GET

> ```
> {{URL}}/logout
> ```

### 🔑 Authentication bearer

| Param | value     | Type   |
| ----- | --------- | ------ |
| token | {{Token}} | string |

---

iguinho ©
