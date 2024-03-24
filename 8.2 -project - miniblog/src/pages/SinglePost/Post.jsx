import { useParams } from "react-router-dom";
import { useFetchSingleDocument } from "../../hooks/useFetchSingleDocument";
import styles from "./Post.module.css";

const Post = () => {
  const { id } = useParams();

  const { singlePost,loading } = useFetchSingleDocument("posts", id);

  return (
    <div className={styles.post_container}>
      {loading && <p>Loading...</p>}
      {singlePost && (
        <>
          <h1>{singlePost.title}</h1>
          <img src={singlePost.image} alt={singlePost.title} />
          <p>{singlePost.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className={styles.tags}>
            {singlePost.tags.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
