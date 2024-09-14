import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import './Card.css';
import video1 from '../../assets/chatroom.mp4'
import video2 from '../../assets/livestreamvid.mp4'
import video3 from '../../assets/channelvid.mp4';
import video4 from '../../assets/postimg.jpg'
import video5 from '../../assets/monitizevid.mp4'
function Card() {
  const customBoxStyle = {
    backgroundColor: "black",
    borderRadius: '50px',
    border: '5px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
    width: '60vw',
    padding: '10px',
    margin: '60px auto 20px auto',
    minWidth: '300px',
    overflow: 'hidden',
  };

  const videoStyle = {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
  };

  const rightSideStyle = {
    padding: '2%',
  };

  const headingStyle = {
    fontSize: '1.15rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: '10px',
  };

  const paragraphStyle = {
    fontSize: '.85rem',
    fontWeight: 'bold',
  };

  const slideIn = useSpring({
    from: { transform: 'translateX(-100%)' },  
    to: { transform: 'translateX(0)' },      
    config: { duration: 2000 }                
  });
  
  
  return (
    <>
      <div className='container-fluid bg-black'>
        <div className="container-fluid text-white d-flex justify-content-center align-items-center">
          <div className="d-flex items-center justify-center">
            <animated.div
              className="custom-box d-flex flex-column flex-md-row overflow-hidden rounded-xl"
              style={{ ...customBoxStyle, ...slideIn }}
            >
              <div className="left-side col-md-6 p-3 d-flex items-center justify-center">
                <video
                  src={video1}
                  style={videoStyle}
                  autoPlay
                  loop
                />
              </div>
              <div className="right-side col-md-6 d-flex ml-3 items-center justify-center" style={rightSideStyle}>
                <div>
                  <h2 style={headingStyle}>Engage in Real-Time Conversations!</h2>
                  <p className="lead pt-4" style={paragraphStyle}>
                  Join our chat room for real-time discussions and instant support. Share ideas and enjoy seamless conversations anytime!                  </p>
                </div>
              </div>
            </animated.div>
          </div>
        </div>
    
        <div className="container-fluid text-white d-flex justify-content-center align-items-center">  
          <div className="d-flex justify-content-center align-items-center w-100">
            <motion.div
              className="custom-box d-flex flex-column flex-md-row overflow-hidden rounded-xl"
              style={customBoxStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="right-side col-md-6 d-flex items-center justify-center" style={rightSideStyle}>
                <div>
                  <h2 style={headingStyle}>Experience Seamless Live Streaming</h2>
                  <p className="lead pt-4 font-semibold" style={paragraphStyle}>
                  Join the world of live streaming with ease. Share your moments in real-time and engage with your audience instantly.
                  </p>
                </div>
              </div>
              <div className="left-side col-md-6 p-3 d-flex justify-content-center align-items-center">
                <video
                  src={video2}
                  style={videoStyle}
                  autoPlay
                  loop
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container-fluid text-white d-flex justify-content-center align-items-center">      
          <div className="d-flex justify-content-center align-items-center w-100">
          <animated.div
              className="custom-box d-flex flex-column flex-md-row overflow-hidden rounded-xl"
              style={{ ...customBoxStyle, ...slideIn }} // Apply slideIn animation here
            >
              <div className="left-side col-md-6 p-4 d-flex justify-content-center align-items-center">
                <video
                src={video3}
                  style={videoStyle}
                  autoPlay
                  loop
                />
              </div>
              <div className="right-side col-md-6 d-flex items-center justify-center" style={rightSideStyle}>
                <div>
                  <h2 style={headingStyle} className='max-sm:text-center'>Create Custom Channels on StreamNest</h2>
                  <p className="lead pt-4" style={paragraphStyle}>
                  StreamNest lets you create personalized channels for different topics and groups. Organize your conversations and keep everything in one place easily.
                  </p>
                </div>
              </div>
            </animated.div>
          </div>
        </div>

        <div className="container-fluid text-white d-flex justify-content-center align-items-center">       
          <div className="d-flex justify-content-center align-items-center w-100">
            <motion.div
              className="custom-box d-flex flex-column flex-md-row overflow-hidden rounded-xl"
              style={customBoxStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="right-side col-md-6 d-flex items-center justify-center" style={rightSideStyle}>
                <div>
                  <h2 style={headingStyle}>Share Images Seamlessly on StreamNest</h2>
                  <p className="lead pt-4" style={paragraphStyle}>
                  With StreamNest, you can easily share images in your chat rooms. Stay connected and express yourself visually with just a few clicks.
                  </p>
                </div>
              </div>
              <div className="left-side col-md-6 p-4 d-flex justify-content-center align-items-center">
                <video
                src={video4}
                  style={videoStyle}
                  autoPlay
                  loop
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container-fluid text-white d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center w-100">
          <animated.div
              className="custom-box d-flex flex-column flex-md-row overflow-hidden rounded-xl"
              style={{ ...customBoxStyle, ...slideIn }} // Apply slideIn animation here
            >
              <div className="left-side col-md-6 p-4 d-flex justify-content-center align-items-center">
                <video
                src={video5}
                  style={videoStyle}
                  autoPlay
                  loop
                />
              </div>
              <div className="right-side col-md-6 d-flex items-center justify-center" style={rightSideStyle}>
                <div>
                  <h2 style={headingStyle}>Monetize Your Channel with Ease</h2>
                  <p className="lead pt-4" style={paragraphStyle}>
                  Turn your content into revenue by monetizing your channel. Earn through ads, subscriptions, and sponsorships while growing your audience.                  </p>
                </div>
              </div>
            </animated.div>
          </div>
        </div>

        <div className="container-fluid text-white d-flex justify-content-center align-items-center">        
          <div className="d-flex mb-5 justify-content-center align-items-center w-100">
            <motion.div
              className="custom-box d-flex flex-column flex-md-row p-2 overflow-hidden rounded-xl "
              style={customBoxStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="right-side col-md-6 d-flex items-center justify-center" style={rightSideStyle}>
                <div>
                  <h2 style={headingStyle}>Download Videos and Audio Easily</h2>
                  <p className="lead pt-4" style={paragraphStyle}>
                  Access powerful tools to download videos and audio effortlessly. Save your favorite content for offline use with just a few clicks.                  </p>
                </div>
              </div>
              <div className="left-side col-md-6 p-4 d-flex justify-content-center align-items-center">
                <video
                  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c8e7cb756886cd8d61af_Discord_Website_Refresh_Platforms-transcode.mp4"
                  style={videoStyle}
                  autoPlay
                  loop
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* <div className={`text-center mt-5 bg-${props.mode === 'dark' ? 'black' : props.mode === 'light' ? 'light' : 'primary'}`}>
          <style>
            {`
              @keyframes blink {
              0% { opacity: 1; }
              50% { opacity: 0; }
              100% { opacity: 1; }
              }
            `}
          </style>

          <h1 className={`text-${props.mode === 'light' ? 'black' : 'white' } pb-5 pt-5 fw-bold`} style={{
           animation: 'blink 1s infinite', 
           }}>
           YOU CAN'T SCROLL ANYMORE. <br />BETTER GO CHAT.
          </h1>
          <div className="mt-3" style={lastImageContainerStyle}>
            <img
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6658cc069d1eb1caf9426914_Footer-Art_cut-p-2000.webp"
              alt="Footer Art"
              style={{ maxWidth: '100%', height: 'auto' }}/>
          </div>
        </div> */}
    </div>
    </>
  );
}

export default Card;