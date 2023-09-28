//
// const foo = async () =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const users = await res.json()
//
//     const wrapper = document.getElementById('wrapper')
//
//     for (const user of users) {
//         const createDiv = document.createElement('div')
//         createDiv.innerText = ` ID: ${user.id} Name: ${user.name} `
//         const btnCreate = document.createElement('button')
//         btnCreate.innerText='Click'
//         createDiv.appendChild(btnCreate)
//         wrapper.appendChild(createDiv)
//
//         btnCreate.onclick = ()=> {
//             location.href = `../users-details/test2.html?userId=${user.id}`
//         }
//
//
//
//
//     }
//
//
// }
// void foo()


const foo = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();

        const wrapper = document.getElementById('wrapper');

        for (const user of users) {
            const createDiv = document.createElement('div');
            createDiv.classList.add('user-info'); // Добавляем класс 'user-info' к созданному div

            // Добавляем информацию о пользователе в созданный div
            createDiv.innerHTML = `
                <p class="user-id">ID: ${user.id}</p>
                <p class="user-name">Name: ${user.name}</p>
            `;

            const btnCreate = document.createElement('button');
            btnCreate.innerText = 'Click';
            btnCreate.classList.add('user-button'); // Добавляем класс 'user-button' к созданной кнопке
            createDiv.appendChild(btnCreate);

            // Добавляем созданный div в контейнер wrapper
            wrapper.appendChild(createDiv);

            btnCreate.onclick = () => {
                location.href = `../users-details/test2.html?userId=${user.id}`;
            };
        }
    } catch (error) {
        console.error(error);
    }
};

void foo();

