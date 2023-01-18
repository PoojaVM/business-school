import './App.css';
import { EVENTS, MONTH_NAMES } from './EventsData';
import { SocialIcon } from 'react-social-icons'

function App() {
  const rows = EVENTS.map((item, index) => 
  <div className='Event-Container'>
    <div className='Each-Event'>
      <span style={{fontSize: '1rem', lineHeight: 1.125, fontFamily: 'Saira Extra Condensed,sans-serif', fontStyle: 'normal', fontWeight: 700}}>{MONTH_NAMES[item.month]} {item.date}, {item.year}</span>
      <span style={{color: '#a32638', fontSize: '1.575rem', fontFamily: 'Saira Extra Condensed,sans-serif', fontStyle: 'normal', fontWeight: 400}}>{item.title}</span>
      <span style={{fontFamily: 'Bitter,serif', fontStyle: 'normal', fontWeight: 400, fontSize: '1.1rem', color: '#000', marginTop: '0.625rem'}}>{item.description}</span>
      <span style={{fontFamily: 'Saira Extra Condensed,sans-serif', fontStyle: 'normal', fontSize: '0.9rem', fontWeight: 400, marginTop: '0.425rem', color: '#363d45', lineHeight: 1.125}}>{item.location}</span>
      <span style={{fontFamily: 'Saira Extra Condensed,sans-serif', fontStyle: 'normal', fontSize: '0.9rem', fontWeight: 400, color: '#363d45', lineHeight: 1.125}}>{item.time}</span>
    </div>
    <div className='Image'>
      <span>Image goes here</span>
    </div>
  </div>
  );
  return (
    <div className="App">
      <header className='App-header'>
        STEVENS SCHOOL OF BUSINESS EVENTS
      </header>
      <tbody className='List'>{rows}</tbody>
      <footer className='App-Footer'>
        <SocialIcon network="facebook" className='Icon' url="https://www.facebook.com/hanlonlabs" target="_blank" />
        <SocialIcon network="twitter" className='Icon' url="https://twitter.com/hanlonlab" target="_blank" />
        <SocialIcon network="instagram" className='Icon' url="https://www.instagram.com/hanlonlab" target="_blank" />
        <SocialIcon network="email" className='Icon' url="mailto:fscadmin@stevens.edu" />
      </footer>
    </div>
  );
}

export default App;


        // {/* <img src={logo} className="App-logo" alt="logo" /> */}
        // {/* <p>
        //   Edit <code>src/App.js</code> and save to reload.
        // </p> */}
        // {/* <a
        //   className="App-link"
        //   href="https://reactjs.org"
        //   target="_blank"
        //   rel="noopener noreferrer"
        // >
        //   Learn React
        // </a> */}
