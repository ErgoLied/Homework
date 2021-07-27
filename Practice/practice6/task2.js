// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let users_b = document.getElementById('users_b');
        for (const user of users) {
            let user_p = document.createElement('p');
            user_p.innerText = `${user.id}. ${user.name} `;
            users_b.append(user_p);

            let btn_posts = document.createElement('button');
            btn_posts.innerText='show posts';
            user_p.append(btn_posts);

            btn_posts.onclick = function (){
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        let posts_b = document.getElementById('posts_b');
                        posts_b.innerText='';
                        for (const post of posts) {
                            let post_p = document.createElement('p');
                            post_p.innerText = `${post.id}. ${post.title}\n${post.body}`;
                            posts_b.append(post_p);

                            let btn_comms = document.createElement('button');
                            btn_comms.innerText='show comments';
                            post_p.append(btn_comms);

                            btn_comms.onclick = function (){
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(response => response.json())
                                    .then(comments => {
                                        let comments_b = document.getElementById('comments_b');
                                        comments_b.innerText='';
                                        for (const comment of comments) {
                                            let comm_p = document.createElement('p');
                                            comm_p.innerText = `${comment.id}. ${comment.name}\n${comment.body}`;
                                            comments_b.append(comm_p);
                                        }
                                    })
                            }
                        }
                    })
            }
    }
})