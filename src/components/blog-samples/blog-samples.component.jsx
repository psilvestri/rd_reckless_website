const GhostContentAPI = require('@tryghost/content-api');

const api = new GhostContentAPI({
    host: 'https://demo.ghost.io',
    key: '22444f78447824223cefc48062',
    version: "v3"
  });
  
const BlogSamples = () => {
    // fetch 5 posts, including related tags and authors
    api.posts.browse({
        filter: 'tag:'
    })
    .then((posts) => {
        posts.forEach((post) => {
            console.log(post.title);
        });
    })
    .catch((err) => {
        console.error(err);
    })
}

export default BlogSamples