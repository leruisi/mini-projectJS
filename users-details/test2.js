

const userId = new URL(location.href).searchParams.get('userId');

const foo = async () => {
    try {
        const res = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await res.json();
        console.log(user)
        const wrap = document.getElementById('wrap');
        const ul = document.createElement('ul');
        recursiveBuild(user, ul);
        wrap.appendChild(ul);
        addPostButton(wrap)


    } catch (error) {
        console.error(error);
    }
};
void foo();




function liCreator(key, value, parent) {
    const li = document.createElement('li');
    li.innerHTML = `<b>${key}:</b> ${value}`;
    parent.appendChild(li);
}

function ulBuilder(key, object, parent) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    li.innerHTML = `<b>${key}:</b>`;
    parent.appendChild(li);
    li.appendChild(ul);
    recursiveBuild(object, ul);
}

function recursiveBuild(object, parent) {
    for (const key in object) {
        typeof object[key] === 'object'
            ? ulBuilder(key, object[key], parent)
            : liCreator(key, object[key], parent)
    }
}

function addPostButton(parent) {
    const btnC = document.createElement('button');
    btnC.innerText = 'Show Titles';

    let showTitles = true;

    btnC.onclick = async () => {
        const postDetailsDiv = document.getElementById('user-posts-details');
        postDetailsDiv.innerHTML = '';

        if (showTitles) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
            const posts = await res.json();

            if (posts.length > 0) {
                for (const post of posts) {
                    const createDivPost = document.createElement('div');
                    createDivPost.innerHTML = `<b>Title:</b> ${post.title} <button onclick="redirectToPostDetails(${post.id})">Show Details</button>`;
                    postDetailsDiv.appendChild(createDivPost);
                }
            } else {
                const noPostsMessage = document.createElement('div');
                noPostsMessage.innerText = 'No posts for this user.';
                postDetailsDiv.appendChild(noPostsMessage);
            }

            btnC.innerText = 'Hide Titles';
        } else {
            btnC.innerText = 'Show Titles';
        }

        showTitles = !showTitles;
    };

    parent.appendChild(btnC);
}



// function redirectToPostDetails(postId) {
//     window.location.href = `../post-details/post-details.html`;
// }


