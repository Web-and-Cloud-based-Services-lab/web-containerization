db = new Mongo().getDB("admin");

db.createUser(
  {
    user: "user_auth",
    pwd: "user_auth_password",
    roles: [ { role: "readWrite", db: "user_auth" } ]
  }
);

db.createUser(
  {
    user: "url_shortener",
    pwd: "url_shortener_password",
    roles: [ { role: "readWrite", db: "url_shortener" } ]
  }
);