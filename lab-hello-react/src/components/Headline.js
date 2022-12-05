import Button from "./Button";
import ironhack from '../images/ironhack-logo.png';
import menu from '../images/menu-bar.png';
import logo from '../logo.svg';

function Headline(){
    return(
        <div className='headline'>
            <nav>
                <img
                    id="nav-logo-left"
                    src={ironhack}
                    alt="logo" 

                />
                <img
                    id="nav-menu-right"
                    src={menu}
                    alt="menu" 
                />
            </nav>
            <h1>
                Say hello to ReactJS
            </h1>
            <p>
                You will learn how to use the most popular frontend library, and become a super Ninja developer.
            </p>
            
            <Button />

            <img
            id="background-img1"
            src={logo}
            alt="logo"
            />
            
            <img
            id="background-img2"
            src={logo}
            alt="logo"
            />
        </div>
    );
}

export default Headline;