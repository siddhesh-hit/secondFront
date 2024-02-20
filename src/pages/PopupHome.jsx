import { Modal } from "react-bootstrap";

const PopupHome = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="closebutton" closeButton></Modal.Header>
        <Modal.Body className="smfkdnmk">
          <p>
            हे पोर्टल विकासाधीन ( under development ) आहे.  हि  बीटा आवृत्ती  असल्याकारणाने, पोर्टलमध्ये वापरलेली माहिती पूर्णतः तपासलेली  नाही  आहे
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
