import React, { useState } from 'react';
// import './Popup.css'; // Assurez-vous d'avoir un fichier CSS pour styliser votre pop-up

const Credit = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

   return (
    <div className="popup-container">
      <button onClick={togglePopup}>Crédits</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Dinosaure Vecteurs par Vecteezy </h2>
            <p>Les illustrations ont été fournies par <a href="https://fr.vecteezy.com/vecteur-libre/dinosaure">Dinosaure Vecteurs par Vecteezy</a></p>
            <button onClick={togglePopup}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};


export default Credit ;


