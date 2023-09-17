import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Loginform from "../Loginform/index"


function Pop1(){
    
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
             Login
            </a>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
             <Loginform/>
            </Modal>
          </>
        
    )
}
export default Pop1;