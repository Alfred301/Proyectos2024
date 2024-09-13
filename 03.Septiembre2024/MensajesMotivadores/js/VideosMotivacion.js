
/*
// Lista de IDs de videos de YouTube
const videos = [
    "Vozs6Dy7Kx0",
    "_ozfZBZqwtE",
    "CGxew7J4uMs",
    "dO_32uxnPbg",
    "OpjncyX2NgE",
    "2aiOBN1CpGs",
    "jtAGi0jtNv0",
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
    "DvKCRk8TIjI"
];

const generateBtn = document.getElementById("generate-btn");
const videoFrame = document.getElementById("video-frame");

// Función para generar un video aleatorio
generateBtn.addEventListener("click", function() {
    // Obtener un video aleatorio
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideoId = videos[randomIndex];

    // Mostrar el video en el iframe
    videoFrame.src = `https://www.youtube.com/embed/${randomVideoId}?controls=0&modestbranding=1&showinfo=0&autoplay=1&rel=0`;
    videoFrame.style.display = "block";

    document.getElementById("numero__id").textContent = "Codigo de YT: "+ randomVideoId;
});

*/

const videos = {
    youtube: [
        "Vozs6Dy7Kx0",
        "CGxew7J4uMs", 
        "Vozs6Dy7Kx0",
        "_ozfZBZqwtE",
        "CGxew7J4uMs",
        "dO_32uxnPbg",
        "OpjncyX2NgE",
        "2aiOBN1CpGs",
        "jtAGi0jtNv0",
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
        "DvKCRk8TIjI"],
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
        "7250986946409893125"
    ],
    facebook: [
        "853600840050207",
        "3355698834736955",
        "483854037815254",
        "1915585142277965",
        "406099538813666",
        "490345440460944",
        "7831372183639407"
    ]
};

const generateBtn = document.getElementById("generate-btn");
const videoFrame = document.getElementById("video-frame");

generateBtn.addEventListener("click", function() {
    const platforms = Object.keys(videos);
    const randomPlatform = platforms[Math.floor(Math.random() * platforms.length)];
    const randomVideoId = videos[randomPlatform][Math.floor(Math.random() * videos[randomPlatform].length)];
    
    let videoSrc = "";
    if (randomPlatform === "youtube") {
        videoSrc = `https://www.youtube.com/embed/${randomVideoId}?controls=0&modestbranding=1&showinfo=0&autoplay=1&rel=0`;
    } else if (randomPlatform === "tiktok") {
        videoSrc = `https://www.tiktok.com/embed/v2/${randomVideoId}`;
    } else if (randomPlatform === "facebook") {
        videoSrc = `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/facebook/videos/${randomVideoId}`;
    }

    videoFrame.src = videoSrc;
    videoFrame.style.display = "block";
    document.getElementById("numero__id").textContent = `Plataforma: ${randomPlatform}, Código: ${randomVideoId}`;
});
