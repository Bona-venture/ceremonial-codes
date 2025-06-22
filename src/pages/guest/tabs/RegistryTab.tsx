import React, { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import Modal from '../../../components/common/Modal';
import BackgroundImage from '../../../components/common/BackgroundImage';
import FlowerBorder from '../../../components/common/FlowerBorder';

const RegistryTab: React.FC = () => {
  const { state } = useAppContext();
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    item: string;
    price: number;
  } | null>(null);
  
  const handleContribute = (item: string, price: number) => {
    setSelectedItem({ item, price });
    setShowModal(true);
  };
  
  return (
    <BackgroundImage imageUrl={state.settings.welcomeImage}>
      <div>
        <h2 className="text-3xl md:text-4xl text-center mb-8 text-rose-700 font-dancing">Wedding Registry</h2>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 hover:shadow-lg transition-shadow duration-300">
          <p className="text-center mb-6">If you would like to contribute to our wedding registry, you can select from the items below or make a cash gift to the provided account details.</p>
          
          <div className="md:flex md:justify-center md:space-x-8 p-6 bg-gray-50 rounded-lg">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">Account Details:</h4>
              <p>Account Name: {state.paymentDetails.accountName}</p>
              <p>Account Number: {state.paymentDetails.accountNumber}</p>
              <p>Bank: {state.paymentDetails.bankName}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Contact:</h4>
              <p>For any questions about gifts or contributions</p>
              <a 
                href={`https://wa.me/${state.paymentDetails.whatsappNumber}`} 
                className="text-green-600 flex items-center mt-2 hover:text-green-700 transition-colors duration-200" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {state.registryItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.item} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold mb-1 text-sm">{item.item}</h3>
                <p className="text-gray-600 mb-2 text-xs line-clamp-2">{item.description}</p>
                <p className="text-rose-600 font-semibold mb-3 text-sm">
                  ₦{item.price.toFixed(2)}
                </p>
                
                <div className="flex flex-col space-y-2">
                  {item.link && item.link !== '#' && (
                    <a 
                      href={item.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition duration-300 text-center text-xs"
                    >
                      Purchase
                    </a>
                  )}
                  
                  <button 
                    onClick={() => handleContribute(item.item, item.price)}
                    className="px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300 text-xs"
                  >
                    Contribute
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {state.registryItems.length === 0 && (
            <div className="col-span-full text-center py-10 text-gray-500 bg-white rounded-lg shadow-md">
              No registry items available yet.
            </div>
          )}
        </div>
        
        {/* Contribute Modal */}
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={`Contribute to ${selectedItem?.item || ''}`}
        >
          {selectedItem && (
            <div>
              <p className="mb-6">
                To contribute to this gift ({selectedItem.item}), please use the payment details below:
              </p>
              
              <div className="p-4 bg-gray-50 rounded-lg mb-6">
                <p className="mb-2"><strong>Account Name:</strong> {state.paymentDetails.accountName}</p>
                <p className="mb-2"><strong>Account Number:</strong> {state.paymentDetails.accountNumber}</p>
                <p className="mb-2"><strong>Bank:</strong> {state.paymentDetails.bankName}</p>
                <p className="mb-2"><strong>Amount:</strong> ₦{selectedItem.price.toFixed(2)}</p>
                <p className="mb-2"><strong>Payment Reference:</strong> {selectedItem.item} Gift</p>
              </div>
              
              <p className="mb-4">
                After making the payment, please contact us to notify us of your contribution:
              </p>
              
              <a 
                href={`https://wa.me/${state.paymentDetails.whatsappNumber}?text=I have made a contribution for the ${selectedItem.item} gift for your wedding.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Notify via WhatsApp
              </a>
            </div>
          )}
        </Modal>
        
        <FlowerBorder />
      </div>
    </BackgroundImage>
  );
};

export default RegistryTab;