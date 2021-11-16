import './help.css';
import PropTypes from 'prop-types';

const Help = ({ showModal }) => {
  return (
    <div className="helpcontainer" key={window.location.pathname}>
      {/* Button Help header */}
      <div
        className="help"
        aria-hidden="true"
        onClick={() => showModal(window.location.pathname)}
      >
        <p>?</p>
      </div>
    </div>
  );
};

Help.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Help;
