// const getAnonName = (firstName, callback) => {
//     setTimeout(() => {
//       if (!firstName)
//         return callback(new Error("You didn't pass in a first name!"));
  
//       const fullName = `${firstName} Doe`;
  
//       return callback(fullName);
//     }, 2000);
//   };
  
//   getAnonName('John', console.log);

const getAnonName = (firstName) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!firstName)
            return reject(new Error("You didn't pass in a first name!"));

        const fullName = `${firstName} Doe`;

        return resolve(fullName);
        }, 2000);
})

getAnonName("Merve")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
        console.log(err)
    })

