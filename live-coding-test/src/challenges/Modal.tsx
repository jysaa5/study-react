// 8. Create a Modal Component
// Create a reusable modal component that can be opened and closed and display any content passed to it.

const ModalOverlay = () => {
  return <div></div>;
};

const Header = () => {
  return <div></div>;
};

const Body = () => {
  return <div></div>;
};

const Actions = ({ name, onClose }: { name: string; onClose: () => void }) => {
  return (
    <div>
      <button className="btn-primary" onClick={onClose}>
        {name}
      </button>
    </div>
  );
};

const ModalContent = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <Header />
      <Body />
      <Actions name="Close" onClose={onClose} />
    </>
  );
};

const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    isOpen && (
      <>
        <ModalOverlay />
        <ModalContent onClose={onClose} />
      </>
    )
  );
};

export default Modal;
