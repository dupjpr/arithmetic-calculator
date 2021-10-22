import { useDispatch, useSelector } from "react-redux";
import Display from "../display/Display";
import Keyboard from "../keyboard/Keyboard";
import './home.style.scss';

const DefaultComponent = () => {

  return (
    <section className='sectionHome-container'>
      <Display/>
      <Keyboard/>
      
    </section>
  );
}

export default DefaultComponent;
