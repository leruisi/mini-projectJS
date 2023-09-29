// // post-details.js
// const postId = new URL(location.href).searchParams.get('postId');
//
// const fetchPostAndComments = async () => {
//     try {
//
//         const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//         const post = await postRes.json();
//         console.log(post);
//
//
//         const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
//         const comments = await commentsRes.json();
//         console.log(comments);
//
//
//         const postInfoDiv = document.getElementsByClassName('post-info');
//         postInfoDiv.innerHTML = `
//              <p>Post id: ${post.id}</p>
//             <h3>Title:  ${post.title}</h3>
//             <p>Post Body: ${post.body}</p>
//         `;
//
//
//         const commentsDiv = document.getElementsByClassName('comments');
//         if (comments.length > 0) {
//             commentsDiv.innerHTML = '<h2>Comments:</h2>';
//             comments.forEach(comment => {
//                 commentsDiv.innerHTML += `
//                     <div>
//                         <strong>${comment.name}</strong>
//                         <p>${comment.body}</p>
//                     </div>
//                 `;
//             });
//         } else {
//             commentsDiv.innerHTML = '<p>Нет комментариев для этого поста.</p>';
//         }
//     } catch (error) {
//         console.error(error);
//     }
// };
//
// void fetchPostAndComments();










document.addEventListener('DOMContentLoaded', () => {
    const postId = new URL(location.href).searchParams.get('postId');

    const fetchPostAndComments = async () => {
        try {
            const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            const post = await postRes.json();
            console.log(post);

            const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            const comments = await commentsRes.json();
            console.log(comments);

            const postInfoDiv = document.getElementsByClassName('post-info')[0];
            postInfoDiv.innerHTML = `
                <p>Post id: ${post.id}</p>
                <h3>Title: ${post.title}</h3>
                <p>Post Body: ${post.body}</p>
            `;

            const commentsDiv = document.getElementsByClassName('comments')[0];
            if (comments.length > 0) {
                commentsDiv.innerHTML = '<h2>Comments:</h2>';
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

        const btn = document.createElement('btn')
        btn.innerText= 'Back'

        btn.onclick = () => {
            location.href = `../index/tes1.html`;
        };

        const container = document.getElementById('container')
        container.appendChild(btn)
    };


    void fetchPostAndComments();
});


