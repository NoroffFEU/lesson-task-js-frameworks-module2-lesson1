import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { displayTime } from "../constants/modal";

function DisappearingModal() {
	const [open, setOpen] = useState(false);
	// we need a timeoutId state variable so we can clear the timeout
	const [timeoutId, setTimeoutId] = useState(undefined);

	const handleClose = () => {
		setOpen(false);
		// clear the timeout any time the modal is closed
		clearTimeout(timeoutId);
	};

	const handleOpen = () => {
		setOpen(true);
		// store the timeout id in the timeoutId state variable
		setTimeoutId(
			setTimeout(() => {
				// close the modal after x amount of time
				handleClose();
			}, displayTime)
		);
	};

	return (
		<>
			<Button variant="dark" onClick={handleOpen}>
				Open modal
			</Button>

			<Modal show={open} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Module 2 | Lesson Task 1</Modal.Title>
				</Modal.Header>
				<Modal.Body>This will close after {displayTime / 1000} seconds</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DisappearingModal;
