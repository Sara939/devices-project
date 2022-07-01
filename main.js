#grid-container {
    display: grid;
    grid-template-areas: 'myArea myArea myArea myArea myArea';
    gap: 10px;
    background-color: #2196F3;
    padding: 10px;
}

#grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }