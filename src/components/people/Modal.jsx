import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { RxCross2 } from 'react-icons/rx';

const Modal = ({ isOpen, onClose, title, name, biography }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all mx-4'>
                <div className='flex justify-between items-center mb-8'>
                  <Dialog.Title
                    as='h3'
                    className='text-2xl text-gray-900 dark:text-white'
                  >
                    {title}
                  </Dialog.Title>
                  <RxCross2
                    className='cursor-pointer text-black dark:text-white'
                    onClick={onClose}
                    size={24}
                  />
                </div>

                <Dialog.Title
                  as='h3'
                  className='text-xl leading-6 text-gray-900 dark:text-gray-300 mb-4'
                >
                  {name}
                </Dialog.Title>
                <div>
                  <p className='text-base leading-6 text-gray-500 dark:text-white'>
                    {biography}
                  </p>
                </div>

                <div className='mt-6'>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-200'
                    onClick={onClose}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
