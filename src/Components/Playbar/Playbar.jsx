import '../../App.css';
import image from '../../assets/image11.png'
import image1 from '../../assets/bx_bxs-heart.png'
import image2 from '../../assets/Music Player Options.png'
import image3 from '../../assets/Right options.png'




function Playbar() {

    return (

        <>
            <div className="playing">

                <div className="play_bar">

                    <div className="play_card"></div>
                    <img src={image} alt="" />
                    <div>
                        <div><b>Dreaming On</b></div>
                        <div><b>NEFFEX</b></div>
                    </div>
                    <img src={image1} alt="" />
                </div>


                <div className="play_pause">
                    <img src={image2} alt="" />
                </div>
                <div className="right_play">
                    <img src={image3} alt="" />

                </div>
                <div className="playing_green">

                </div>

            </div>
        </>
    )
}

export default Playbar