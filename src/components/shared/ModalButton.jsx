import React, { useState } from 'react';
import Modal from './Modal';
import { MdKeyboardArrowDown } from 'react-icons/md';

const ModalButton = ({ title, name, biography }) => {
  let [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <div className=''>
        <button
          type='button'
          onClick={() => setIsOpen(true)}
          className='rounded-md  bg-gray-400 bg-opacity-20 px-2 py-1 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
        >
          <MdKeyboardArrowDown size={25} />
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        name={name}
        biography={biography}
      />
    </>
  );
};

export default ModalButton;
