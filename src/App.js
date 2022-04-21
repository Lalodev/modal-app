import { useState } from "react";
import GalleryModal from "./components/GalleryModal";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

function App() {
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
  const [isOpenChatModal, openChatModal, closeChatModal] = useModal();
  const [isOpenGalleryModal, openGalleryModal, closeGalleryModal] = useModal();

  return (
    <div className="App">
      <button onClick={openLoginModal}>Open Login Modal</button>
      <button onClick={openChatModal}>Open Chat Modal</button>
      <button onClick={openGalleryModal}>Open Gallery Modal</button>

      {/*isOpenModal && <Modal />*/}
      {/*<Modal isOpen={isOpenModal} closeModal={closeModal} />*/}

      <Modal
        isOpen={isOpenLoginModal}
        closeModal={closeLoginModal}
        title="Login"
      >
        <form>
          <input type="email" placeholder="Correo" />
          <input type="password" placeholder="Contraseña" />
        </form>
      </Modal>

      <Modal isOpen={isOpenChatModal} closeModal={closeChatModal} title="Chat">
        <p>
          Hola!! <b>- Luis</b>
        </p>
        <p>
          Que hace <b>- Luis</b>
        </p>
      </Modal>

      <GalleryModal
        isOpen={isOpenGalleryModal}
        closeModal={closeGalleryModal}
      />
    </div>
  );
}

export default App;
