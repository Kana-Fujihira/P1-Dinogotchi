

function Button({  }) {

    // const [heart, setHeart] = useState(0)
    // function handleHeart() {
    //     setHeart(heart = 10 ? imgSrc.dinoGotchi[2][0] : imgSrc.dinoGotchi[0][0]);
    // }

    // const [cookie, setCookie] = useState(0)
    // function handleCookie() {
    //     setCookie(cookie = 10 ? imgSrc.dinoGotchi[1][0] : imgSrc.dinoGotchi[0][0]);
    // }
    return (
        <>
            <figure>
                <img src={imageSrc}></img>
            </figure>
            {/* 
            <button onClick={handleHeart}>Manger </button>
            <button onClick={handleCookie}>Caliner</button> */}
        </>
    );
}


export default Button ;