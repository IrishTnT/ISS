# Irish Secret Sharing
## A Shamir's Secret Sharing Implementation

ISS is my first Node.JS project. It's a simple implementation of Shamir's Secret Sharing algorithm. It's not meant to be used in production, but rather as a learning tool.


### Installation
ISS requires Node.JS and NPM to be installed.
To install ISS, clone the repository and run `npm install` in the directory.

## How to use it

### Creating a secret
Enter the shares (Amount of codes that will be generated), then the threshold (Amount of shares needed to reconstruct the secret). Then enter the secret. The secret will be split into shares and the shares will be displayed.

### Reconstructing a secret
Press the "decode" button. Enter the shares, then press the "submit" button. The secret will be reconstructed and displayed.

### Usage
To start the server, run `node index.js` in the directory. The server will start on port 8080 by default.