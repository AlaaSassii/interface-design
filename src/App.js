import React from 'react';
import './App.css';

function App() {
  const [login,setLogin] = React.useState(true)
  const [signup,setsignup] = React.useState(false)
  return (
    <div className='body'>
      <section className='section1'>
   {(login || signup) &&   
   <div onClick={()=>{setLogin(false);setsignup(false)}} className='sign'>
      {
        login ? 
        <div className='center'>
          <h1>Login</h1>
        </div>
        :
        <div className='center'>
        <h1>signin</h1>
      </div>
      }
    </div>
  }
      <div className='buttons'>
        <button className='button1' onClick={()=>setLogin(true)}>Sign Up</button>
        <button className='button2' onClick={()=>setsignup(true)}>Sign In</button>
      </div>
        <div className='one'>
        <img src='https://assets-global.website-files.com/5fce901dab92e15349a36fb7/605f093934d3b8754db96697_logo.svg'/>
        <h1>Stay ahead of the curve and become a better <span>
        interface designer.</span></h1>
        <p>
        With a Pttrns membership, gain access to thousands of curated mobile design patterns, get online advice, and connect with other designers from all over the world.
        </p>
        </div>
        <div className='image'>
          <img src='https://assets-global.website-files.com/5fce901dab92e15349a36fb7/61420382017a28d8781ba236_hero-illustration%402x.png' />
        </div>
      </section>

      <section className='section2'>
      
      <h5>Used daily by individuals, teams, and companies of all sizes</h5>
      <div className='div'>
        <div className='div1'>
      <div><img src="https://assets-global.website-files.com/5fce901dab92e15349a36fb7/614360f07c1a86b4106522a4_square.svg"/></div>
      <div><img src="https://assets-global.website-files.com/5fce901dab92e15349a36fb7/614360f04909ca9e56a81178_airbnb.svg"/></div>
      <div><img src="https://assets-global.website-files.com/5fce901dab92e15349a36fb7/614360f04302f23f22bb1ed8_ibm.svg"/></div>
      <div><img src="https://assets-global.website-files.com/5fce901dab92e15349a36fb7/614360ef1177056b10fbc843_google.svg"/></div>
      <div><img src="https://assets-global.website-files.com/5fce901dab92e15349a36fb7/614360f509ec1ab0b55a1ecb_us-bank.svg"/></div>
     
        </div>
        <div className='div2'>
        <div><img src="https://assets-global.website-files.com/5fce901dab92e15349a36fb7/614360f0f0dcd268484bb1eb_pinterest.svg"/></div><div><img src="https://assets-global.website-files.com/5fce901dab92e15349a36fb7/614360f0b193b80b981e7e20_netflix.svg"/></div><div><img src="https://assets-global.website-files.com/5fce901dab92e15349a36fb7/614360f009ec1afdc65a1eb1_shopify.svg"/></div>
        </div>
      </div>
      </section>

      <section className='section3'>

        <div className='one'>
        <h1>What you get.</h1>
        <div>
        <h3>UX and UI patterns</h3>
        <p>Learn and follow industry best practices that can be applied to your app to help ensure the best user experience possible.</p>
        </div>
        <div>
        <h3>App database</h3>
        <p>Save hours of research time with Pttrns’ curated collection of the best in-production app interfaces and screenshots.</p>
        </div>
        <div>
        <h3>Favorites and Collections</h3>
        <p>Stay organized, store and reference all your best research and inspirational finds with Favorites or create a Collection for each project you are working on.</p>
        </div>
        <div>
          <h3 className='heading3'>Design guides {'&'} teardowns</h3>
          <p>Dive deeper into the specifics of strategy, tone and craft, and the principles behind successful apps and interfaces.</p>
        </div>
        <div>
          <h3 className='heading3 three'>Pttrns Studio</h3>
          <p>Interact with other designers from all over the world who, like you, want to talk candidly about design, receive feedback on their work, and get their questions answered from people who walk in their shoes.</p>
        </div>
        </div>
        <div className='two'>
          <img src="https://assets-global.website-files.com/5fce901dab92e15349a36fb7/615ef11f549d5263a18f4a10_wyg-screenshot-%402x-p-1600.png"/>
        </div>
      </section>

      <section className='section4'>
        <div className='shewesh'>
        <div>
          <img src="https://assets-global.website-files.com/5fce901dab92e15349a36fb7/614a2fbaaf92eb5b7a83b6df_studio-illustration.svg"/>
        </div>
        <div>
          <h1>
Where the best designers go for inspiration and community.</h1>
          <p>Over 40,000 designers trust Pttrns as one of their top sources for production UI design research and inspiration. Improve your ideation and concept generation skills while saving hours of research time.
          </p>
        </div>
        </div>
        
      </section>
      <section className='section5'>
        <div className='black'>
        <div  className='one'>
        <h1>Level up your craft and career with Pttrns.</h1>
        <h3>Join designers from across the globe focused on continual improvement and inspiration you can use.</h3>
        <h6>Choose the right plan for you.</h6>
        </div>
        <div className='two'>
          <div className='two-one'>
          <div className='uno'>
          <p>Quarterly plan</p>
          <h1  >$27</h1>
          <h2>$9 per month</h2>
          <h5>Billed every 3 months</h5>
          <li> icon Save hours of research time</li>
          <li>icon Store your favorites for future reference</li>
          <li> icon Access to 7k+ patterns... and counting</li>
          <button>Start your free trial </button>
        </div>
        <div className='dos'>
          <p>Quarterly plan</p>
          <h1 >$27</h1>
          <h2>$9 per month</h2>
          <h5>Billed every 3 months</h5>
          <li> icon Save hours of research time</li>
          <li>icon Store your favorites for future reference</li>
          <li> icon Access to 7k+ patterns... and counting</li>
          <button>Start your free trial </button>
        </div>
        </div>
        <div className='flex'>
        <div className='tres'>
          <p>Quarterly plan</p>
          <h1>$72</h1>
          <h2>$9 per month</h2>
          <li>Billed every 3 months</li>
          <li> icon Save hours of research time</li>
          <li>icon Store your favorites for future reference</li>
          <li> icon Access to 7k+ patterns... and counting</li>
          <button>Start your free trial </button>
        </div>
        <div className='quatro'>
          <p>Month-to-month plan</p>
          <h2>$12 per month</h2>
          <h5>$9 per month</h5>
          <li style={{padding:'15px 0'}}>Rather just pay for 1 month at a time?</li>
          <button>Start your free trial </button>
        </div>
        </div>
        </div>
        </div>
      </section>
      <section className='section6'>
        <nav>
          <div className='image'>
            <img src="https://assets-global.website-files.com/5fce901dab92e15349a36fb7/5fce91926f360490331e4a4a_logo%20-%20updated%402x.png"/>
          </div>
          <ul>
            <li>Contact</li>
            <li>Support</li>
            <li>Privacy {'&'} Terms</li>
            <li>Twitter</li>
          </ul>
        </nav>
        <div className='bye'>
        <h3>Stay ahead of the curve and become a better interface designer.</h3>
        <p>© 2022 Pttrns. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
