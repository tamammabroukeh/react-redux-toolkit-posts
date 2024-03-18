import { useSelector, useDispatch } from "react-redux";
import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "../../app/posts/postsSlice";
import { IPost } from "../../interfaces/interfaces";
import { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";

const Posts = () => {
  const posts = useSelector(selectAllPosts);

  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsStatus]);
  console.log(posts);
  // To order posts by date
  let content;
  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    const orderPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderPosts.map((post: IPost) => {
      return <PostExcerpt key={post.id} post={post} />;
    });
  } else {
    content = <p>{postsError}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default Posts;
