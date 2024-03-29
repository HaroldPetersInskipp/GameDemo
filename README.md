## Download
You can download the latest version as an electron app from the [Release page](https://github.com/HaroldPetersInskipp/GameDemo/releases).

<img src="static/Screenshot.png">

## How to play
The game is played on a three-by-three (3x3) square grid of blank spaces where the cards will be placed. Each card has four numbers (known as ranks) placed in top left corner; each number corresponds to one of the four sides of the card. The ranks range from one to nine, the letter A representing ten and the letter S representing eleven. The top right of the card sometimes has an elemental symbol representing the card's element: Earth, Fire, Water, Poison, Holy, Lightning, Wind, or Ice. Pink cards belong to one player and blue cards belong to the other player.

In a basic game each player has five cards. A coin-flip decides who begins. The player who wins the coin toss may choose a card to play anywhere on the grid, or to go second. After the first card is played, their opponent may play a card on any unoccupied space on the board. The game continues with players' turns alternating. 

To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To capture a card, the active player places a card adjacent to the opponent's card. If the rank touching the opponent's card is higher, the opponent's card will be captured and flipped into the active player's color. A card can be placed on any open spot on the board. The player who goes second will have a card remaining in their hand and that card will count towards their ending score. Each player may play one card per turn.

A draw occurs if at the end the player and the opponent possess equal numbers of cards in their color. Depending on alternate card rules, this can be defined by a sudden death scenario where the game continues until a winner is defined.

<img src="static/Screenshot2.png">

## Install from source and run with node

Follow these steps to install GameDemo from the source and run it using Node.js:

1. Make sure you have an up-to-date version of Node.js installed on your system. If not, you can install it from [here](http://nodejs.org/)

2. Clone this repository ```git clone https://github.com/HaroldPetersInskipp/GameDemo.git GameDemo```

   Alternatively, download a zip archive of the repository and unzip its contents into a folder named **GameDemo**.

3. Open your terminal/command line and navigate to the GameDemo folder using: ```cd GameDemo```

4. Run the following command in the terminal/command line: ```npm install```

5. Start the GameDemo server with: ```node app.js``` in the terminal/command line.

### Running the GameDemo locally
Open your browser and go to http://localhost:8000/ui

### Playing the GameDemo from another device
Access http://XXX.XXX.XXX.XXX:8000/ui, replacing **XXX.XXX.XXX.XXX** with the IP address of the device running the GameDemo server.

## Acknowledgements
A huge thank you to [Mcindus](https://forums.qhimm.com/index.php?action=profile;u=22685) and [Hikashi](https://forums.qhimm.com/index.php?action=profile;u=30986) for their art contributions.
