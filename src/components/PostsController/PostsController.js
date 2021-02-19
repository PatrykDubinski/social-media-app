import React, { useState } from "react";
import "./PostsController.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import userImg from "../../assets/user.png";
import Modal from "../Modal/Modal";
import Button from "../UtilityComponents/Button/Button";

const PostsController = () => {
  const [postText, setPostText] = useState("");
  const [hideModal, setHideModal] = useState(true);

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal,
  };

  return (
    <div className="postsController">
      <Modal {...configModal}>
        <div className="modalTop">
          <h3>Create a post</h3>
          <p onClick={() => toggleModal()}>X</p>
        </div>
        <div className="modalBody">
          <CKEditor
            editor={ClassicEditor}
            config={{ placeholder: "What's on Your mind, User?" }}
            onChange={(evt, editor) => setPostText(editor.getData())}
          />
        </div>
        <Button>Post</Button>
      </Modal>
      <div className="wrapper">
        <div className="logo">
          <img src={userImg} alt="user" />
        </div>
        <div className="input" onClick={() => toggleModal()}>
          <span className="placeholder">What's on Your mind, User?</span>
        </div>
      </div>
      <div className="mediaWrapper">
        <div className="photo">
          <p>Photo/Movie</p>
        </div>
        <div className="emotions">
          <p>Emotions</p>
        </div>
      </div>
    </div>
  );
};

export default PostsController;
