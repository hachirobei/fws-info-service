db = db.getSiblingDB('fws-info');  // Sets the new database context
db.createUser({
    user: 'user',
    pwd: 'password',
    roles: [{ role: 'readWrite', db: 'fws-info' }],
});