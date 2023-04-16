import { Link } from 'react-router-dom';
import './stepper.css';


export default function Stepper({ children, activeStep, steps }) {
    return (
        <div className="container">
            <div className="steps">
                <ul>
                    <li className={activeStep === 0 ? "active" : "normal"}>
                        <span>1</span>
                        <span>{steps[0]}</span>
                    </li>
                    <li className={activeStep === 1 ? "active" : "normal"}>
                        <span>2</span>
                        <span>{steps[1]}</span>
                    </li>
                </ul>
            </div>
            <div className="alignCenter">
                {activeStep === steps.length ? (
                    <div className="stepsCompleted">
                        <p>Request submitted </p>
                        <Link to='/service-list'>Click here to Track</Link>

                    </div>
                ) : (
                    <div >
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}
