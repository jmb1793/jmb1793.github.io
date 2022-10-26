import React from 'react';
import styles from './style.js';
import { Navbar, Hero, Footer, About, Projects, ToTopButton } from './components';

const App = () => {


  return (
    
    <div className = "bg-primary w-full snap-mandatory snap-y overflow-scroll">
      {/* NavBar */}
      <div className={`${styles.paddingX} ${styles.flexCenter} border-b-2 `}>
        <div className={`${styles.boxWidth}`}>
            <Navbar />
        </div>
      </div>

    
      {/* Hero */}
      <div className={`bg-primary ${styles.flexStart} ${styles.flexCenter} h-screen snap-start block mb-4`}>
        <div className={`${styles.boxWidth} my-auto`}>
          <Hero />
        </div>
      </div>

      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} snap-proximity snap-y`}>
        <div className={`${styles.boxWidth} my-auto  `}>
          
          {/* About */}
          < About />
          
          {/* Skills */}
          < Projects />
          
          {/* Footer */}
          < Footer />
          
          <ToTopButton />
        </div>
      </div>
    </div>
    
  );
};

export default App;