# Assignment 2

GitHub: https://github.com/Web-and-Cloud-based-Services-lab

## References

- JWT: 
https://jwt.io/introduction/, https://docs.python.org/3/library/hmac.html

- Timestamp:
https://kb.narrative.io/what-is-unix-time#:~:text=Unix%20time%20is%20a%20way,and%20use%20across%20different%20systems

- MongoDB - Role-based Access control:
https://www.mongodb.com/docs/manual/core/authorization/

## Prerequisites

1. `Docker`  installed
2. `Python >= 3.4`  installed

## Build



Root Folder:
```shell
cd web-containerization
```
```shell
docker-compose up -d  
```
Check if mongo is running in docker Container

```shell
cd ../web-authentication
pip3 install -r requirements.txt
```
```shell
cd src
python3 run.py
```
Authentication service should running at port 7777.

```shell
cd ../../web-URL-shortener
pip3 install -r requirements.txt
```
```shell
cd src
python3 run.py
```
URL service should running at port 5000.

Now you should be able to use both of the microservices.

## API

### Authentication

| API | Parameter | Method | Example| Description |
| :--- | :---- | :---: |:---|:---|
| / |/ |  GET   | 127.0.0.1:7777 | Server connected information|
/users |[?username=...&password=...] |POST|127.0.0.1:7777/users?username=test&password=test|create a user account|
/users|[?username=...&old-password=...&new-password=...]|PUT|127.0.0.1:7777/users?username=test&old-password=test&new-password=newtest| Update passowrd|
/users/login | [?username=...&password=...]| POST| 127.0.0.1:7777/users/login?username=test&password=test | Login and get JWT| 
/users/validation |[?jwt=...]| GET | 127.0.0.1:7777/users/validation?jwt=eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJuYW1lIjogIkNhaSJ9.MK_ds0u2DsMteRixl1SX1IdInRd73j1p3qNQFOW7yG4| Validate login status and get username|

### URL

| API | Parameter | Method | Example| Description |
| :--- | :---- | :---: |:---|:---|
| / |[?jwt=...] |  GET   | 127.0.0.1:5000/ | List Keys(short url id) owned by the user|
/:id |/ |GET|127.0.0.1:5000/cwt|Use short id to retrieve original URL|
/:id|[?url=...&jwt=...]|PUT|127.0.0.1:5000/?url=http://fuzz.com| Update existing URL by id|
/ | /| DELETE| 127.0.0.1:5000/ | Invalid Request| 
/:id |[?jwt=...]| DELETE | 127.0.0.1:5000/cwt| Delete existing URL by id|
/ |[?url=...&jwt=...] | POST  | 127.0.0.1:5000/?url=http://foo.com |Add a new outlet into the database|