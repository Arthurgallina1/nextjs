const Post = ({ posts }) => {
  return posts.map((post) => <p>{post.title}</p>);
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Post;
