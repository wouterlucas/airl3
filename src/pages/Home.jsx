// import styles from '../styles/Home.module.css';
import { createSignal, createEffect } from "solid-js";
import { useNavigate } from "@solidjs/router";

const Home = () => {
    const navigate = useNavigate();
    const [divOneColor, setDivOneColor] = createSignal('yellow');
    const [divTwoColor, setDivTwoColor] = createSignal('blue');
    const [divThreeColor, setDivThreeColor] = createSignal('blue');

    let divOne, divTwo, divThree, bananaOne;
    let divs = [];
    let index = 0;

    createEffect(() => {
        divs = [divOne, divTwo, divThree, bananaOne];
    });

    const move = (direction) => {
        index += direction;

        if (index >= divs.length) {
            index = 0;
        }

        if (index < 0) {
            index = divs.length - 1;
        }

        const newDiv = divs[index];
        newDiv.focus();
    }
        

    return (
        <view id="home">
            <div x={50} y={50} color={divOneColor()} h={100} w={100}
                onLeft={() => move(-1)}
                onRight={() => move(1)}
                onEnter={() => setDivOneColor('red')}
                onFocus={() => { 
                    setDivOneColor('yellow')
                    const _an = divOne.animate({ y: 90}, { duration: 300 });
                    _an.start();
                    _an.waitUntilStopped().then( () => {
                        console.log('animation stopped');
                    });
                }}
                onBlur={() => {
                    setDivOneColor('blue');
                    divOne.animate({ y: 50}, { duration: 300 }).start();
                }}
                shader={{ name: 'RoundedRectangle', radius: 30 }}
                autofocus
                ref={divOne}
            >
                <p>Hello fucking world.</p>
            </div>
            <div id="bla" x={200} y={50} color={divTwoColor()} h={100} w={100}
                onLeft={() => move(-1)}
                onRight={() => move(1)}
                onEnter={() => setDivTwoColor('red')}
                onFocus={() => { 
                    setDivTwoColor('yellow')
                    divTwo.animate({ y: 90}, { duration: 300 }).start();
                }}
                onBlur={() => {
                    setDivTwoColor('blue');
                    divTwo.animate({ y: 50}, { duration: 300 }).start();
                }}
                ref={divTwo} />
    
            <div x={350} y={50} color={divThreeColor()} h={100} w={100} 
                onLeft={() => move(-1)}
                onRight={() => move(1)}
                onEnter={() => setDivThreeColor('red')}
                onFocus={() => { 
                    setDivThreeColor('yellow')
                    divThree.animate({ y: 90}, { duration: 300 }).start();
                }}
                onBlur={() => {
                    setDivThreeColor('blue');
                    divThree.animate({ y: 50}, { duration: 300 }).start();
                }}
                ref={divThree} />

            <img x={500} y={50} h={100} w={100}  
                src="/assets/banana.png"
                onLeft={() => move(-1)}
                onRight={() => move(1)}
                onFocus={() => { 
                    bananaOne.animate({ y: 90}, { duration: 300 }).start();
                }}
                onBlur={() => {
                    setDivTwoColor('blue');
                    bananaOne.animate({ y: 50}, { duration: 300 }).start();
                }}
                onEnter={() => navigate('/banana')}
                ref={bananaOne}
            />

            <div x={650} y={50} h={100} w={100} color={'red'} colorTop={'red'} colorBottom={'blue'} alpha={0.5} zIndex={1} />
            <div x={700} y={50} h={100} w={100} color={'purple'} alpha={1} zIndex={2} />
            <div x={850} y={50} h={100} w={100} color={'orange'} scale={2} zIndex={2} />
      </view>
    )
}

export default Home;