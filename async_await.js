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