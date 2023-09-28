// post-details.js
const postId = new URL(location.href).searchParams.get('postId');

const fetchPostAndComments = async () => {
    try {

        const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await postRes.json();
        console.log(post);


        const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const comments = await commentsRes.json();
        console.log(comments);


        const postInfoDiv = document.getElementById('post-info');
        postInfoDiv.innerHTML = `
             <p>${post.id}</p>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;


        const commentsDiv = document.getElementById('comments');
        if (comments.length > 0) {
            commentsDiv.innerHTML = '<h2>Комментарии:</h2>';
            comments.forEach(comment => {
                commentsDiv.innerHTML += `
                    <div>
                        <strong>${comment.name}</strong>
                        <p>${comment.body}</p>
                    </div>
                `;
            });
        } else {
            commentsDiv.innerHTML = '<p>Нет комментариев для этого поста.</p>';
        }
    } catch (error) {
        console.error(error);
    }
};

void fetchPostAndComments();

