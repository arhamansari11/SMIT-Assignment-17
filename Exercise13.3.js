let counter = 0;
let myfunc = (a) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      counter++;
      resolve(`a value ${a} counter:${counter}`);
    }, 1000);
  });
};

async function myFunc2(a) {
  console.log(`ready ${a} counter:${counter}`);
  let capture = await myfunc(a);
  console.log(capture);
}

for (let i = 1; i <= 10; i++) {
  myFunc2(i);
}