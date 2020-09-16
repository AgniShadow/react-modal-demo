import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MyModal = (props) => {  
  const {showModal,selectedDataObject,toggleModal}=props
  const {id,title,body}=selectedDataObject[0]===undefined?[]:selectedDataObject[0]
  return (
    <div align="center" > 
      <Modal isOpen={showModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>UserData</ModalHeader>
        <ModalBody>
          <table >
            <tr>
              <td>Id :</td>
              <td>{id}</td>
            </tr>
            <tr>
              <td>Title :</td>
              <td>{title}</td>
            </tr>
            <tr>
              <td>Body :</td>
              <td>{body}</td>
            </tr>
          </table> 
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MyModal;