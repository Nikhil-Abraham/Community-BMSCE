import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from '../components/NavBarComp';
import Img from '../assets/img1.png'
import Img1 from '../assets/feed1.jfif'
import Img2 from '../assets/feed2.jfif'
import Img3 from '../assets/feed3.jfif'
import Img4 from '../assets/feed4.jfif'
import Img5 from '../assets/feed5.jfif'
function Home () {
  return (
    <div>
      {/* \\<NavBarComp/> */}
      <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={Img}
              alt=""
            />
          </div>
          <div class="col-lg-5">
          <h1 class="font-weight-light" style={{backgroundColor: "#696061"}}>Home</h1>
            <p style={{backgroundColor: "#696061"}}>
              Welcome to the homepage of Community-Bmsce.
              We hope to provide you with ample amount of information about
              the topic you are interested it.
              Go on and explore the website to know more.  
            </p>
          </div>
        </div>
        </div>
      </div>
      <h1 class="font-weight-light" style={{backgroundColor: "lightblue"}}>Feed</h1>
      <div className="test">
      <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={Img1}
              alt=""
            />
        <p class="font-weight-light" style={{width:'320px',padding: "10px",border: "5px solid gray",margin: "0"}}>
          <a href='https://www.google.com/' style={{color: "black"}}>
          Belkin 2-in-1 Wireless Charger Stand with MagSafe 15W</a></p>
      </div>
      <br></br>
      <div className="test">
      <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={Img2}
              alt=""
            />
        <p class="font-weight-light" style={{width:'320px',padding: "10px",border: "5px solid gray",margin: "0"}}>
        <a href='https://www.google.com/' style={{color: "black"}}>
          Mirror Home Gym</a></p>
      </div>
      <br></br>
      <div className="test">
      <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={Img3}
              alt=""
            />
        <p class="font-weight-light" style={{width:'320px',padding: "10px",border: "5px solid gray",margin: "0"}}>
        <a href='https://www.google.com/' style={{color: "black"}}>
          SmartHome Ultraloq Bluetooth, Fingerprint, and Touchscreen Smart Lock</a></p>
      </div>
      <br></br>
      <div className="test">
      <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={Img4}
              alt=""
            />
        <p class="font-weight-light" style={{width:'320px',padding: "10px",border: "5px solid gray",margin: "0"}}>
        <a href='https://www.google.com/' style={{color: "black"}}>
          Luminar Software</a></p>
      </div>
      <br></br>
      <div className="test">
      <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={Img5}
              alt=""
            />
        <p class="font-weight-light" style={{width:'320px',padding: "10px",border: "5px solid gray",margin: "0"}}>
        <a href='https://www.google.com/' style={{color: "black"}}>
          Oculus Virtual Headset</a></p>
      </div>
    </div>
  );
}

export default Home;