import './App.css';
import gambar from './assets/image/primadona.jpg'
import vdio from './assets/primadona.mp4';

function App() {
  return (
    <div className="container">
      <video autoPlay loop className="background-video">
        <source src={vdio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="card">
          <div className="image-container">
            <img src={gambar} alt="Gambar" />
          </div>
          <div className="card-content">
          <h1>PRIMADONA</h1>
          <h2>Kota Jakarta</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
