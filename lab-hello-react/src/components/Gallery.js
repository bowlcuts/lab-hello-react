import Icon1 from "./Icon1";
import Icon2 from './Icon2';
import Icon3 from './Icon3';
import Icon4 from './Icon4';

function Gallery(){
    return(
        <div id='gallery'>
            <div id='icon1'>
                <Icon1 />
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div id='icon2'>
                <Icon2 />
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div id='icon3'>
                <Icon3 />
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div id='icon4'>
                <Icon4 />
                <h3>JSX</h3>
                <p>Statically-typed. designed to run on modern browsers.</p>
            </div>
        </div>
    )
}

export default Gallery;