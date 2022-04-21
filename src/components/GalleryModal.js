import Modal from "./Modal";

const GalleryModal = (props) => {
  //{ isOpen, closeModal, title }
  return (
    <Modal {...props} title="Gallery">
      {" "}
      {/*isOpen={isOpen} closeModal={closeModal} title={title}*/}
      <h1>Photo</h1>
    </Modal>
  );
};

export default GalleryModal;
