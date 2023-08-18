// import styles from '../styles/Home.module.css';
import { useNavigate } from "@solidjs/router";

const Banana = () => {
    let navigate = useNavigate();

    return (
        <view id="bananaView" onBack={() => navigate('/')}>
            <img x={500} y={500} h={100} w={100} scale={3} src="/assets/banana.png" autofocus />
        </view>
    )
}

export default Banana;