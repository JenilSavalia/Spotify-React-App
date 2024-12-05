import './App.css';
import logo from './assets/Spotify_Logo.png';
import home from './assets/Home.png';
import liked from './assets/Liked.png'
import arrow from './assets/top arrow navigation.png'
import user from './assets/User.png'
import image from './assets/image9.png'


function App() {


  return (
    <>

      <section>
        <div className="left_menu">

          <div className="logo">
            <img src={logo} />
          </div>


          <div className="left_menu_1">
            <div className="inner_box">
              <img src={home} />
              <span>Home</span>
            </div>
            <div className="inner_box">
              <img src={home} />
              <span>Home</span>
            </div>
            <div className="inner_box">
              <img src={home} />
              <span>Home</span>
            </div>
          </div>



          <div className="left_menu_2">
            <div className="inner_box">
              <img src={home} />
              <span>Home</span>
            </div>
            <div className="inner_box">
              <img src={home} />
              <span>Home</span>
            </div>
            <div className="inner_box">
              <img src={home} />
              <span>Home</span>
            </div>
          </div>

          <div className="left_menu_2">
            <div className="inner_box">
              <span>FAV</span>
            </div>
            <div className="inner_box">
              <span>Daily Mix</span>
            </div>
            <div className="inner_box">
              <span>Discover</span>
            </div>
            <div className="inner_box">
              <span>EDM/Disco</span>
            </div>
            <div className="inner_box">
              <span>Indiii/Podcasts</span>
            </div>
          </div>

          <div className="install">
            <div className="inner_box">
              <img src={home} />
              <span><strong>Install App</strong></span>
            </div>
          </div>

        </div>





        <div className="main_body">


          <div className="body_top">
            <img src={arrow} />
            <img src={user} />
          </div>

          <h1 className="heading">Good Morning</h1>

          <div className="playlist_menu">

            <div className="playlist_card">
              <img src={liked} />
              <span><b>Liked Songs</b></span>
            </div>
            <div className="playlist_card">
              <img src={liked} />
              <span><b>Liked Songs</b></span>
            </div>
            <div className="playlist_card">
              <img src={liked} />
              <span><b>Liked Songs</b></span>
            </div>
            <div className="playlist_card">
              <img src={liked} />
              <span><b>Liked Songs</b></span>
            </div>
            <div className="playlist_card">
              <img src={liked} />
              <span><b>Liked Songs</b></span>
            </div>

          </div>


          <h1 className="heading">Shows you might like</h1>

          <div className="show_menu">

            <div className="show_card">

              <img src={image} />

              <div className="text">
                <h3>Weekly Motivation</h3>
                <div>Jenil Savalia</div>
              </div>

            </div>
            <div className="show_card">

              <img src={image} />

              <div className="text">
                <h3>Weekly Motivation</h3>
                <div>Jenil Savalia</div>
              </div>

            </div>
            <div className="show_card">

              <img src={image} />

              <div className="text">
                <h3>Weekly Motivation</h3>
                <div>Jenil Savalia</div>
              </div>

            </div>
            <div className="show_card">

              <img src={image} />

              <div className="text">
                <h3>Weekly Motivation</h3>
                <div>Jenil Savalia</div>
              </div>

            </div>
            <div className="show_card">

              <img src={image} />

              <div className="text">
                <h3>Weekly Motivation</h3>
                <div>Jenil Savalia</div>
              </div>

            </div>
            <div className="show_card">

              <img src={image} />

              <div className="text">
                <h3>Weekly Motivation</h3>
                <div>Jenil Savalia</div>
              </div>

            </div>


          </div>


        </div>

      </section>
    </>
  )
}

export default App
