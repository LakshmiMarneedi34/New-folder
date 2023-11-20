import './popup.css'; 

const Popup = ({ isOpen, onClose }) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <h2>Company Info</h2>
        <p><b>Company: </b> &nbsp;Geeksynergy Technologies Pvt Ltd</p>
        <p><b>Address: </b> &nbsp;&nbsp;&nbsp; XXXXXXXXX09</p>
        <p><b>Email: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; XXXXXX@gmail.com</p>
        <button onClick={onClose} className='close-button'>Close</button>
      </div>
    </div>
  );
};

export default Popup;