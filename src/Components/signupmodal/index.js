import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Signupform from '../Signupform/index';

function Signupmodal(){
    
        const [isModalOpen, setIsModalOpen] = useState(false);
        const showModal = () => {
          setIsModalOpen(true);
        };
        const handleOk = () => {
          setIsModalOpen(false);
        };
        const handleCancel = () => {
          setIsModalOpen(false);
        };
        return (
          <>
            <a onClick={showModal}>
             Sign Up
            </a>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Signupform/>
            </Modal>
          </>
        
    )
}
export default Signupmodal;