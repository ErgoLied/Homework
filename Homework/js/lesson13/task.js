fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {

        let postsBox = document.getElementsByClassName('posts-box')[0];
        for (const post of posts) {
            let p_post = document.createElement('p');
            p_post.innerText = `${post.id} - ${post.title}\n${post.body}`;
            postsBox.appendChild(p_post);
        }
    });

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {

        let commentsBox = document.getElementsByClassName('comments-box')[0];
        for (const comm of comments) {
            let p_comm = document.createElement('p');
            p_comm.innerText = `${comm.postId} (${comm.id}) - ${comm.body}`;
            commentsBox.appendChild(p_comm);
        }
    });