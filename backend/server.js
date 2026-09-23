const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const produto = [
    {
    nome: "Mouse Gamer",
    preco: 150,
    categoria: "Periféricos",
    imagem: "https://www.bing.com/images/search?view=detailV2&ccid=ld5Te4K0&id=C9F535A91992FFF3EE10A7B8BE272E8571E26A7B&thid=OIP.ld5Te4K0UUkKxdLsAd8lmAHaEJ&mediaurl=https%3a%2f%2fimg.freepik.com%2ffotos-premium%2ffoto-de-um-mouse-sem-fio-e-um-teclado-mecanico_1056572-14997.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.95de537b82b451490ac5d2ec01df2598%3frik%3de2ricYUuJ764pw%26pid%3dImgRaw%26r%3d0&exph=351&expw=626&q=me+d%c3%aa+uma+imagem+de+um+mouse+gamer&FORM=IRPRST&ck=5F310E8611E025EA01DDBCF57AADB514&selectedIndex=0&itb=0"
    },
    {
    nome: "Webcam Full HD",
    preco: 180,
    categoria: "Acessórios",
    imagem: "https://www.bing.com/images/search?view=detailV2&ccid=kis7FjZP&id=AFCA50957B186FCB09C2A5787F97DB24146574E6&thid=OIP.kis7FjZPXP4Af3hZ_TfZgQHaIJ&mediaurl=https%3a%2f%2fm.media-amazon.com%2fimages%2fI%2f61BW1Spm%2bUL._AC_.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.922b3b16364f5cfe007f7859fd37d981%3frik%3d5nRlFCTbl394pQ%26pid%3dImgRaw%26r%3d0&exph=1419&expw=1289&q=web+cam+ful+hd&FORM=IRPRST&ck=8AA8A1D77C6D993EE842D0596F52F410&selectedIndex=3&itb=0"
    },
    {
    nome: "Caixa de Som Bluetooth",
    preco: 200,
    categoria: "Áudio",
    imagem: "https://www.bing.com/images/search?view=detailV2&ccid=z3ZyMjxU&id=3E5FDC863DFCF8321EC09566B045781FCC498D0A&thid=OIP.z3ZyMjxU6XWmZtfCsu4gTwHaE6&mediaurl=https%3a%2f%2fm.media-amazon.com%2fimages%2fI%2f71gO6NMh1UL._AC_.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.cf7672323c54e975a666d7c2b2ee204f%3frik%3dCo1JzB94RbBmlQ%26pid%3dImgRaw%26r%3d0&exph=836&expw=1260&q=caixa+de+som+bluethoot&FORM=IRPRST&ck=D3236D0DEF01E37086D4261D24F2C203&selectedIndex=18&itb=0"
    }
];

app.get("/", (req, res) => {
    res.json(produto);
});

app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000");
});