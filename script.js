body {
    font-family: "Arial", sans-serif;
    background: url('https://i.imgur.com/2zGtQ3C.png') repeat;
    color: #fff;
    text-align: center;
    margin: 0;
    padding: 0;
}

header {
    background: linear-gradient(45deg, #ff00ff, #0033cc);
    padding: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
}

h1 {
    font-size: 40px;
    text-transform: uppercase;
    text-shadow: 2px 2px 5px black;
}

nav ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
}

nav a {
    text-decoration: none;
    color: #ffcc00;
    font-weight: bold;
    transition: 0.3s;
}

nav a:hover {
    color: #ff66ff;
    text-shadow: 0px 0px 5px white;
}

section {
    background: rgba(0, 0, 0, 0.8);
    margin: 20px auto;
    padding: 20px;
    width: 80%;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.3);
}

h2 {
    color: #ffcc00;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

th, td {
    padding: 10px;
    border: 1px solid #fff;
}

th {
    background-color: #ff00ff;
}

td {
    background-color: #0033cc;
}

@keyframes glow {
    0% { text-shadow: 0 0 5px white; }
    50% { text-shadow: 0 0 20px #ff66ff; }
    100% { text-shadow: 0 0 5px white; }
}

h1, h2 {
    animation: glow 2s infinite alternate;
}
