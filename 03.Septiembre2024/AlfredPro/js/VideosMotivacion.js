//Lista de videos de tik tok y youtube mediante su ID

const videos = {

    // https://www.youtube.com/embed/Vozs6Dy7Kx0
    youtube: [
        "Vozs6Dy7Kx0",
        "CGxew7J4uMs", 
        "Vozs6Dy7Kx0",
        "_ozfZBZqwtE",
        "CGxew7J4uMs",
        "dO_32uxnPbg",
        "OpjncyX2NgE",
        "2aiOBN1CpGs",
        "q81WDRDmIaI",
        "a2jgt7rR5p0",
        "5ECkpLPj_hE",
        "evF-40TZKPg",
        "dboIXX4UrK0",
        "Qb5_eUg_v3c",
        "HYYRthMB_Nc",
        "COwkseAMKus",
        "2iJwCJjlNco",
        "2iJwCJjlNco",
        "UGciKTleXg4",
        "E_ZzubqY_9s",
        "brFTGUw6PLE",
        "DvKCRk8TIjI",
        "UoMOmRKVvZQ",
        "3SwR4BuB5Gg",
        "Nin2w3s8dgM"
    ],

    // https://www.tiktok.com/embed/v2/7347311166521085189
    tiktok: [
        "7347311166521085189",
        "7308855399069879585",
        "7279121789727427873",
        "7349084144481111301",
        "7398628019646024965",
        "7386939792287698182",
        "7229034105097276698",
        "7364798076239777030",
        "7359255089472654598",
        "7250986946409893125",
        "7328218659548171526",
        "7197451261426388229",
        "7379082071743941893",
        "7398752179852528902",
        "7266146656326913285",
        "7264997196796382470",
        "7313143307792698657",
        "7395403700245728517",
        "7360466662136614150",
        "7381682916725755141",
        "7371348768576244998",
        "7347907625188871429",
        "7317370750367829254",
        "7392086032763686150"
    ]

};

//Llamamos al boton de generar y el frame donde se mostrara
const generateBtn = document.getElementById("generate-btn");
const videoFrame = document.getElementById("video-frame");

// Accion cuando damos click a generar
generateBtn.addEventListener("click", function() {

    // Llamamos al array videos
    const platforms = Object.keys(videos);

    // Obtenemos o tik tok o youtube
    const randomPlatform = platforms[Math.floor(Math.random() * platforms.length)];
    
    // Dependiento de la plataforma obtenemos un id del video random
    const randomVideoId = videos[randomPlatform][Math.floor(Math.random() * videos[randomPlatform].length)];
    
    // Variable donde guardaremos el link
    let videoSrc = "";
    
    // Verificamos la plataforma y guardamos el link dependiendo el id
    if (randomPlatform === "youtube") {
        videoSrc = `https://www.youtube.com/embed/${randomVideoId}?controls=0&modestbranding=1&showinfo=0&autoplay=1&rel=0`;
    } else if (randomPlatform === "tiktok") {
        videoSrc = `https://www.tiktok.com/embed/v2/${randomVideoId}`;
    }

    // Guardamos el link
    videoFrame.src = videoSrc;
    videoFrame.style.display = "block";

    // Mostrarmos el id
    document.getElementById("numero__id").textContent = `Plataforma: ${randomPlatform}, Código: ${randomVideoId}`;
});
