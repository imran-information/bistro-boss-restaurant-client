import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const FoodDetails = ({ isOpen, setIsOpen, items, handleAddToCart }) => {
    const { name, recipe, image, price, category } = items || {};

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                {/* Backdrop */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
                </Transition.Child>

                {/* Modal Container */}
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex items-start justify-center min-h-full pt-16 p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 -translate-y-10"
                            enterTo="opacity-100 translate-y-0"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-10"
                        >
                            <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-left align-middle shadow-2xl transition-all border border-gray-700 overflow-hidden">
                                {/* Food Image */}
                                <div className="relative h-64 w-full overflow-hidden group">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 right-4 bg-amber-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                        ${price}
                                    </div>
                                </div>

                                {/* Food Details */}
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-2xl font-bold text-white"
                                        >
                                            {name}
                                        </Dialog.Title>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-700/80 text-amber-400 border border-amber-400/30">
                                            {category}
                                        </span>
                                    </div>

                                    <div className="mt-2">
                                        <p className="text-gray-300 leading-relaxed">{recipe}</p>
                                    </div>

                                    <div className="flex gap-3 pt-4">
                                        <button
                                            onClick={closeModal}
                                            className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-md"
                                        >
                                            Close
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleAddToCart(items);
                                                closeModal();
                                            }}
                                            className="flex-1 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-md flex items-center justify-center gap-2"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                            </svg>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default FoodDetails;