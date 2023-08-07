let greet = (fullName) => {
    for (const i in fullName) {
      console.log(fullName[i]);
    }
  };
  let name = "Arham Nadeem";
  let secondFunc = (name, callback) => {
    let spliting = name.split(" ");
    callback(spliting);
  };
  console.log(secondFunc(name, greet));