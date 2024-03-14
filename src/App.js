import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  const signatureRef = useRef();

  const clearSignature = () => {
    signatureRef.current.clear();
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    html2canvas(document.body).then(canvas => {
      // Convert canvas to an image and download it
      const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'waiver.png';
      link.click();
    });
  };
  
  return (
    <div className='app'>
      <div style={{textAlign:"center", backgroundColor:"black"}}>
        <img style={{width:"100%"}}
        src='imgs/logo.png'
        alt='Powerhouse Logo'
        />
      </div>
      <h1 style={{textAlign:"center"}}>Athlete Waiver</h1>
      <ul>
        <li>I, agree to participate in the services of Powerhouse Fitness NC, which include strength training, running, agility drills, jumping, intense cardiovascular activities, and flexibility training.</li><br/>
        <li>I understand that incorrect performance of exercises can lead to injury, and I commit to asking for assistance for any exercise I am unsure of how to perform safely.</li><br/>
        <li>I acknowledge that the activities of the gym may require me to spend time outside in the heat/cold, as well as inside. I further acknowledge and assume the risks involved in participating in physical activities, including, but not limited to, those caused by terrain, facilities, temperature, weather, my physical condition, equipment, and actions of other people, including participants, volunteers, and supervisors.</li><br/>
        <li>I agree to release and discharge Powerhouse Fitness NC, its employees, volunteers, supervisors, host facility, and owners from any injuries, damages, or losses sustained by me as a result of participation in this facility.</li><br/>
        <li>I agree to indemnify and hold harmless Powerhouse Fitness NC, its employees, volunteers, supervisors, facilities, and owners against any liability, loss, cost, claim, or damage incurred as a result of such injury or loss. I represent that I am in good health and have no condition that could endanger my well-being through participation. I will notify Powerhouse Fitness NC in writing of any such defects prior to enrolling in this program.</li><br/>
        <li>By signing below, I agree to save and hold harmless and indemnify each and all the parties referred to above from all liability, loss, cost, claim, or damage whatsoever which may be imposed upon said parties because of any defect in or lack of such capacity to so act and release said parties on behalf of myself.</li>
      </ul>
      <form className='form' onSubmit={handleSubmit}>
        <div className='input'>
          <label>FIRST NAME:</label>
          <input
          type='text'
          name='firstName'
          required
          />
        </div>
        <div className='input'>
          <label>LAST NAME:</label>
          <input
            type='text'
            name='lastName'
            required
            />
        </div>
        <div className='input'>
          <label>PHONE NUMBER:</label>
          <input
          type='tel'
          name='phone'
          required
          />
        </div>
        <div className='input'>
          <label>EMAIL:</label>
          <input
          type='email'
          name='email'
          required
          />
        </div>
        <div className='input'>
          <label>SIGNATURE:</label>
          <div>
          <SignatureCanvas
            ref={signatureRef}
            canvasProps={{ width: 500, height: 200, style: { border: '1px solid black', width: "100%" }}}
          />
          </div>
          <div className='btnContainer'>
            <button type="button" onClick={clearSignature}>CLEAR</button>
            <button type='submit'>SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
