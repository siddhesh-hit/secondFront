import { Modal } from "react-bootstrap";
import { popup } from "../data/constant";
import useLang from "../hooks/useLang";
const PopupHome = (props) => {
  const { checkLang } = useLang();
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
            {popup[checkLang].text}
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
