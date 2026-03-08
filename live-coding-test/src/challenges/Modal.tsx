// 8. Create a Modal Component
// Create a reusable modal component that can be opened and closed and display any content passed to it.

import { Profiler, useState } from 'react';
import Layout from '../shared/Layout';
import { createPortal } from 'react-dom';

const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return <div className="modal-overlay">{children}</div>;
};

const Header = ({ title }: { title: string }) => {
  return <div className="modal-header">{title}</div>;
};

const Body = ({ content }: { content: string }) => {
  return <div className="modal-body">{content}</div>;
};

const Footer = ({ name, onClose }: { name: string; onClose: () => void }) => {
  return (
    <div className="modal-footer">
      <button className="modal-button" type="button" onClick={onClose}>
        {name}
      </button>
    </div>
  );
};

const ModalContent = ({
  onClose,
  title,
  content,
}: {
  onClose: () => void;
  title: string;
  content: string;
}) => {
  return (
    <div className="modal-content">
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
    <ModalOverlay>
      <ModalContent
        title="Modal Title"
        content="Modal Content"
        onClose={onClose}
      />
    </ModalOverlay>,

    modalRoot,
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onRenderCallback = (
    id: string, // 방금 커밋된 Profiler 트리의 "id"
    phase: 'mount' | 'update' | 'nested-update', // "mount" (최초 렌더링) 또는 "update" (리렌더링)
    actualDuration: number, // 현재 업데이트를 렌더링하는 데 걸린 시간
    // baseDuration: number, // 메모이제이션 없이 전체 트리를 렌더링했을 때의 예상 시간
    // startTime: number, // 렌더링을 시작한 시각
    // commitTime: number, // 렌더링이 완료된 시각
  ) => {
    // 측정 데이터를 로그로 남기거나 서버로 전송할 수 있습니다.
    console.log(`${id} [${phase}]: ${actualDuration}ms`);
  };

  return (
    <Profiler id="Navigation" onRender={onRenderCallback}>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <Layout>
        <button className="btn-primary" onClick={openModal}>
          Open Modal
        </button>
      </Layout>
    </Profiler>
  );
};

export default App;
