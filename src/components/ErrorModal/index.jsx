import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

const ErrorModal = ({ isOpen, onClose, message }) => {
  
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
        <ModalContent>
          <ModalHeader>{message.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>{message.text}</h1>
          </ModalBody>
          <ModalFooter>
            <Button
              variant={""}
              className={"bg-red-500 text-white"}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ErrorModal;
