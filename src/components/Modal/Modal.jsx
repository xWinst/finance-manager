import { Button, Icon } from 'components';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import icons from 'images/icons.svg';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ text, onClose, onConfirm }) => {
    useEffect(() => {
        window.addEventListener('keydown', closeModal);
        return () => window.removeEventListener('keydown', closeModal);
    });

    const closeModal = event => {
        if (event.code === 'Escape') {
            onClose();
        }
    };

    const onClick = event => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div className={s.overlay} onClick={onClick}>
            <div className={s.modal}>
                <Icon className={s.icon} href={`${icons}#close`} width="14" height="14" onClick={onClose} />
                <span className={s.text}>{text}</span>
                <div className={s.container}>
                    <Button onClick={onConfirm} text="Yes" />
                    <Button onClick={onClose} text="No" />
                </div>
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;
