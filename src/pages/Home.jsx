// import styles from '../styles/Home.module.css';

const Home = () => {
    return (
      <view>
          <div lng={{ x: 50, y:50, color:'yellow', h: 100, w: 100 }} 
              onBlur={() => { console.log('beepboop blur')}}
              onFocus={() => { console.log('beepboop focus')}}
              autofocus
            >
            <p>Hello fucking world.</p>
          </div>
          <div  lng={{ x:200, y:50, color:'blue', h: 100, w: 100 }} />
          <div  lng={{ x:350, y:50, color:'blue', h: 100, w: 100 }} />
      </view>
    )
}

export default Home;