import { Link } from "react-router-dom";
import styles from './PostDetails.module.css'
const PostDetail = ({ post }) => {
  const { image, title, createdBy, id, tags } = post;

  return (
    <div className={styles.post_detail}>
      <img src={image} alt={title} />
      <h2 className="mb-2 text-2xl ">{title}</h2>
      <p className={styles.createdby}>
        Criado por: {createdBy}
      </p>
      <div className="mb-3 flex">
        {tags.map((tag) => (
          <p key={tag} className="mr-2">
            <span className="font-bold">#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link
        to={`/posts/${id}`}
        className="btn btn-outline"
      >
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;
