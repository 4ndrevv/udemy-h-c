import reactImage from '../../assets/react-core-concepts.png';
import './Header.css';

function genRandomInt(max){
    return Math.floor(Math.random() * (max + 1));
  }

const reactDescription = ['Fundamental', 'Crucial', 'Fun'];
  
export default function Header() {
    const randomNumber = reactDescription[genRandomInt(reactDescription.length - 1)];
    return (
      <header>
          <img src={reactImage} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {randomNumber} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  }