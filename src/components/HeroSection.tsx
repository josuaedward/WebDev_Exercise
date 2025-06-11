import heroImage from '../assets/hero-image.jpg';
import '../App.css'
import '../index.css'

const HeroSection = () => {
  return (
    <section
      className='Hero' 
      // className="HeroImage"
      // style={{
      //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat'
      // }}
    >
      <div className="HeroText">
        <div className="">
          <h2 className="">Pondok Ayam Kabita</h2>
          <p className="">Nikmati cita rasa asli Nusantara</p>
          <button className="HeroButton">
            Pesan Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;