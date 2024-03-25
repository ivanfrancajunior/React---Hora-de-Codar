import styles from "./EditPost.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useFetchSingleDocument } from "../../hooks/useFetchSingleDocument";

const EditPost = () => {
  const { id } = useParams();
  const { singlePost: post } = useFetchSingleDocument("posts", id);
  const { response, updateDocument } = useUpdateDocument("posts");
  const { user } = useAuthValue();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);

      const textTags = post.tags.split(",").join(", ");
      console.log(typeof textTags);
      setTags(textTags);
    }
  }, [post]);
  console.log(typeof tags);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim());

    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if (formError) return;

    const data = {
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    };
    updateDocument(id, data);

    navigate("/dashboard");
  };
  return (
    <div className={styles.create_post}>
      <h2>
        Editar Postagem:
        <span style={{ color: "orange" }}> "{post && post.title}"</span>
      </h2>

      {post && (
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título:</span>
            <input
              type="text"
              name="text"
              required
              placeholder="Pense num bom título..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label>
            <span>URL da imagem:</span>
            <input
              type="text"
              name="image"
              required
              placeholder="Insira uma imagem que representa seu post"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </label>
          <label>
            <span>Conteúdo:</span>
            <textarea
              name="body"
              required
              placeholder="Insira o conteúdo do post"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            ></textarea>
          </label>
          <label>
            <span>Tags:</span>
            <input
              type="text"
              name="tags"
              required
              placeholder="Insira as tags separadas por vírgula"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
            />
          </label>

          <button disabled={response.loading ? true : false} className="btn">
            {response.loading ? "Aguarde..." : "Alterar"}
          </button>

          {(response.error || formError) && (
            <p className="error">{response.error || formError}</p>
          )}
        </form>
      )}
      <div>
        <h2>Preview</h2>
        <img src={post && post.image} alt={post && post.title} />
      </div>
    </div>
  );
};

export default EditPost;
