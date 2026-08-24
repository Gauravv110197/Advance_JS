// // Promise((resolve, reject) => {  })
// // const promise = new Promise((resolve, reject) => { } 
// // ) = > {
// //     success = true ;
// //     if(success) {
// //     resolve();
// //     }
// //     else {
// //         reject();
// //     }

// // }
const promise1 = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve({
      id: 1111,
      username: "Gaurav"
    });
  } else {
    reject(new Error("Data not fetched"));
  }
});

// promise1
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


const promise2 = new Promise((resolve, reject) => {
  const success = true;

 if (success) {
    resolve({
      id: 2222,
      username: "Singh"
    });
  } else {
    reject(new Error("Data not fetched"));
  }
});

// // promise2
// //   .then((message) => {
// //     console.log(message);
// //   })
// //   .catch((error) => {
// //     console.log(error.message);
// //     });



// Promise.all([promise1, promise2])
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     });    


// Promise.allSettled([promise1, promise2])
//     .then((response) => {
//         console.log(response);      
//     })
//     .catch((error) => {
//         console.log(error);
//     });

promise1
.then((response) => {
return response
})
.then((response) => {
    console.log(response.username);
})
.catch((error) => {
    console.log(error.message);
});



Promise.any([promise1, promise2])
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error.message);
});

function fetchUserData() {
    return new Promise((resolve, reject) => {
        let success = true;
        if (success) {
            resolve({   
                id: 123,
                username: "Gaurav"
            });
        } else {
            reject(new Error("Failed to fetch user data"));
        }
    });
}



async function getUser() {
    const user = await fetchUserData();
    console.log(user);
}

getUser()