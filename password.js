let passwords = ["arhamnadeem", "barood3310", "clashking"];
let login = (pass) => {
  return passwords.includes(pass);
};
let returnPromise = (pass) => {
  return new Promise((resolve, reject) => {
    if (login(pass)) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

let checkingPass = (pass) => {
  returnPromise(pass)
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    });
};

checkingPass("arhamnadeem");
checkingPass("124412");