import React from 'react';
import Enviar from '../../Assets/enviar.svg';
import useFetch from '../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../Helper/Error';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    console.log(id, { comment });
    const { response, json } = await request(url, options);
    console.log(json);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
    await request(url, options);
  }
  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <img src={Enviar}></img>
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
