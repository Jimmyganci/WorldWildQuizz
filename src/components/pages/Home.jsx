import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeCard from '../HomeCard';
import gameType from '../../gameType';
import CardQuizRapid from '../CardQuizRapid';
import CardCultureHome from '../CardCultureHome';
import './home.css';
import Logo from '../Logo';

const Home = ({ showPresentation, setShowPresentation }) => {
  return (
    <div className="home">
      {showPresentation && (
        <div className="logoPresentation">
          <Logo />
          <button
            onMouseUp={() => setShowPresentation(false)}
            type="button"
            className="btnStart"
          >
            Start
          </button>
        </div>
      )}
      <h1 className="homeH1">Welcome to the World Wild Quiz</h1>
      <div className="choiceGame">
        <div className="homeQuizCard">
          <Link className="linkDiv" to="/Quiz">
            <HomeCard gameType={gameType[0]} />
          </Link>
        </div>
        <div className="homeMemoryCard">
          <Link className="linkDiv" to="/Memory">
            <HomeCard gameType={gameType[1]} />
          </Link>
        </div>
        <div className="homeQuizRapidCard">
          <Link className="linkDiv" to="/Quizrapid">
            <CardQuizRapid />
          </Link>
        </div>
        <div className="homeCultureCard">
          <Link className="linkDiv" to="/Culture">
            <CardCultureHome />
          </Link>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  showPresentation: PropTypes.bool.isRequired,
  setShowPresentation: PropTypes.func.isRequired,
};

export default Home;
