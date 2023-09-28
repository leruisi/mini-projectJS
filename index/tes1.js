
const foo = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    const wrapper = document.getElementById('wrapper')

    for (const user of users) {
        const createDiv = document.createElement('div')
        createDiv.innerText = ` ID: ${user.id} Name: ${user.name} `
        const btnCreate = document.createElement('button')
        btnCreate.innerText='Click'
        createDiv.appendChild(btnCreate)
        wrapper.appendChild(createDiv)

        btnCreate.onclick = ()=> {
            location.href = `../users-details/test2.html?userId=${user.id}`
        }




    }


}
void foo()
