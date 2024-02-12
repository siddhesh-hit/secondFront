import React from "react";
import { Modal } from "react-bootstrap";

const PopupHome = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="closebutton" closeButton></Modal.Header>
        <Modal.Body className="smfkdnmk">
          <p>
            हे पोर्टलचे बीटा आवृत्तीचे प्रतिनिधित्व करतो, ज्यामध्ये २०१३
            पर्यंतची माहिती अद्यतनित केलेली आहे.
          </p>
        </Modal.Body>
        {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default PopupHome;
