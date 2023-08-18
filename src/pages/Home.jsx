// import styles from '../styles/Home.module.css';
import { createSignal, createEffect, on } from "solid-js";

const Home = () => {
    // const [divOneColor, setdivOneColor] = createSignal('yellow');

    let divOne, divTwo, divThree;
    let divs = [];
    let index = 0;

    createEffect(() => {
        divs = [divOne, divTwo, divThree];
    });

    const move = (direction) => {
        console.log('move', direction);

        const prevDiv = divs[index];

        index += direction;

        if (index >= divs.length) {
            index = 0;
        }

        if (index < 0) {
            index = divs.length - 1;
        }

        const newDiv = divs[index];
        newDiv.focus();
        prevDiv.y = 50;
        prevDiv.color = 'blue';
        newDiv.color = 'yellow';
        newDiv.y = 70;
    }
        

    return (
      <view>
          {/* <div lng={{ x: 50, y:50, color:'yellow', h: 100, w: 100 }}  */}
          <div x={50} y={50} color={'yellow'} h={100} w={100}
              onBlur={() =>{ console.log('divOne blur') }}
              onFocus={() => { console.log('divOne focus') }}
              onLeft={() => move(-1)}
              onRight={() => move(1)}
              autofocus
              ref={divOne}
            >
            <p>Hello fucking world.</p>
          </div>
          <div id="bla" x={200} y={50} color={'blue'} h={100} w={100}
            onLeft={() => move(-1)}
            onRight={() => move(1)}
            ref={divTwo} />
    
          <div x={350} y={50} color={'blue'} h={100} w={100} 
            onLeft={() => move(-1)}
            onRight={() => move(1)}
            ref={divThree} />
      </view>
    )
}

export default Home;