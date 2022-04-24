const somePromise = fetch('https://reqres.in/api/users?page=2')

somePromise
    .then(data => data.json())
    .then(result => {
        // console.log(result)
        const userArr = result.data
        console.log(userArr);
        const h1 = document.querySelector('h1')

        for (let i = 0; i < userArr.length; i++) {

            const htmlContent = `
                <p>Name  : ${userArr[i].first_name} ${userArr[i].last_name}</p>
                <img src=${userArr[i].avatar} />
                <p>Email : ${userArr[i].email}</p>
            `
            h1.innerHTML += htmlContent

        }
    })
    .catch(error => console.log("got some error - ", error))