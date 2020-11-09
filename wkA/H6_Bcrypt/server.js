const bcryptjs = require("bcryptjs")
// const salt = bcryptjs.genSaltSync(8);
// console.log(`salt = ${salt}`);

const password = "1234";
const hashPassword = bcryptjs.hashSync(password, 8);
console.log(`hashed password = ${hashPassword}`);

const check = bcryptjs.compareSync(password, hashPassword);
console.log(`The check result = ${check}`);
