// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let posts_box = document.getElementById('posts-box');
        for (const post of posts) {
            let p_post = document.createElement('p');
            p_post.innerText = `${post.id} - ${post.title} `;
            posts_box.appendChild(p_post);

            let comm_btn = document.createElement('button');
            comm_btn.innerText = 'details';
            p_post.append(comm_btn);
            comm_btn.onclick = function (){
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                        let commentsBox = document.getElementById('comm-box');
                        commentsBox.innerText='';
                        for (const comm of comments) {
                            let p_comm = document.createElement('p');
                            p_comm.innerText = `${comm.id} - ${comm.body}`;
                            commentsBox.appendChild(p_comm);
                        }
                    });
            }
        }
    })