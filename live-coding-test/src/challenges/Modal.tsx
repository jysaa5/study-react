// 8. Create a Modal Component
// Create a reusable modal component that can be opened and closed and display any content passed to it.

import { useState } from 'react';
import Layout from '../shared/Layout';
import { createPortal } from 'react-dom';

const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return <div className='modal-overlay'>{children}</div>;
};

const Header = ({ title }:{title: string}) => {
  return <div className='modal-header'>{title}</div>;
};

const Body = ({content}: {content: string}) => {
  return <div className='modal-body'>{content}</div>;
};

const Footer = ({ name, onClose }: { name: string; onClose: () => void }) => {
  return (
    <div className='modal-footer'>
      <button className="modal-button" type="button" onClick={onClose}>
        {name}
      </button>
    </div>
  );
};

const ModalContent = ({ onClose, title,content }: { onClose: () => void; title: string, content: string }) => {
  return (
    <div className='modal-content'>
      <Header title={title} />
      <Body content={content} />
      <Footer name="Close" onClose={onClose} />
    </div>
  );
};

const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  }) => {
  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(
    
      <ModalOverlay >
      <ModalContent
          title="Modal Title"
          content="Modal Content"
          onClose={onClose}
        />
        </ModalOverlay>
      
    , modalRoot)
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <Layout>
        <button className="btn-primary" onClick={openModal}>
          Open Modal
        </button>
      </Layout>
    </>
  );
}

export default App;
