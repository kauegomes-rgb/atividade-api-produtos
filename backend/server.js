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
    imagem: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500"
    },
    {
    nome: "Webcam Full HD",
    preco: 180,
    categoria: "Acessórios",
    imagem: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500"
    },
    {
    nome: "Caixa de Som Bluetooth",
    preco: 200,
    categoria: "Áudio",
    imagem: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
    }
];

app.get("/", (req, res) => {
    res.json(produto);
});

app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000");
});