import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './dialog.css';

const Dialog = ({ isOpen, onClose, content }) => {
  const lastFocusedElement = useRef(document.activeElement);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current && dialogRef.current.focus();
      closeButtonRef.current.tabIndex = 1;

      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        lastFocusedElement.current.focus();
      };
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen && closeButtonRef.current) {
      closeButtonRef.current.tabIndex = 0;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" role='dialog' aria-describedby='alert-dialog-description' onClick={(e) => e.stopPropagation()} ref={dialogRef} tabIndex={-1}>
        <div className="dialog-body">
          <h1 id='alert-dialog-description'>{content.title}</h1>
          <button ref={closeButtonRef} onClick={onClose} tabIndex="0">{content.buttonText}</button>
        </div>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.shape({
    content: PropTypes.string,
  }).isRequired,
};

export default Dialog;
