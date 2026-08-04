import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../css/MovieDetails.css";

function LoginModal({ show, handleClose, onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            onLogin(username);
            handleClose();
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered className="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title>{t("login")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </Form.Group>
                    <Button type="submit" className="w-100 btn-login">{t("login")}</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default LoginModal;