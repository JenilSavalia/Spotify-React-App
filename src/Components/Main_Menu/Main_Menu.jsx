import '../../App.css'
import image1 from '../../assets/image2.png'

function Main_Menu() {
    const data = [
        { id: 1, src: image1, title: "Liked Songs" },
        { id: 2, src: image1, title: "Neffix Playlist" },
        { id: 3, src: image1, title: "K/DA" },
        { id: 4, src: image1, title: "Liked Songs" },
        { id: 4, src: image1, title: "Liked Songs" },
    ];

    return (
        <>

            {
                data.map(details => (
                    <div className="playlist_card" key={details.id}>
                        <img src={details.src} alt={details.title} />
                        <span><b>{details.title}</b></span>
                    </div>
                ))
            }


            {/* {
                    data.map((details) => {
                        return (
                            <div className="playlist_card" key={details.id}>
                                <img src={details.src} alt={details.title} />
                                <span><b>{details.title}</b></span>
                            </div>
                        );
                    })
                } */}

        </>
    );
}

export default Main_Menu;
