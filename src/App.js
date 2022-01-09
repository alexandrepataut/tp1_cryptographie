import './App.css';
import React, { useState } from 'react';
var md5 = require('md5');
var sha256 = require('js-sha256');
var sha512 = require('js-sha3');
var ripemd160 = require('ripemd160-js');


function App() {
  const [input, setInput] = useState("");

  const [encodedinMD5, setencodedinMD5] = useState("");
  const toEncodeinMD5 = () => {
    setencodedinMD5(md5(input))
  }

  const [encodedinSHA256, setencodedinSHA256] = useState("");
  const toEncodeinSHA256 = () => {
    setencodedinSHA256(sha256(input))
  }

  const [encodedinSHA3, setencodedinSHA3] = useState("");
  const toEncodeinSHA3 = () => {
    setencodedinSHA3(sha512.sha3_512(input))
  }

  const [encodedinKeccak_512, setencodedinKeccak_512] = useState("");
  const toEncodeinKeccak_512 = () => {
    setencodedinKeccak_512(sha512.keccak_512(input))
  }

  const [encodedinRipeMD160, setencodedinRipeMD160] = useState("");
  const toEncodeinRipeMD160 = async() => {
    let encoded = await ripemd160(input);
    setencodedinRipeMD160(encoded)
  }

  return (
    <div className="App">
      <header className="App-header">
          <h2>Encryption form</h2>
        <div>
          <input onChange={(e) => setInput(e.target.value)} placeholder="Your input" />
        </div>
        <div id="form_container">
              <button onClick={() => toEncodeinMD5()}>Encode in MD5</button>
            
            <p>{encodedinMD5}</p>
              <button onClick={() => toEncodeinSHA256()}>Encode in sha256</button>
            
            <p>{encodedinSHA256}</p>
              <button onClick={() => toEncodeinSHA3()}>Encode in sha3-512</button>
         
            <p>{encodedinSHA3}</p>
              <button onClick={() => toEncodeinKeccak_512()}>Encode in Keccak-512</button>
            
            <p>{encodedinKeccak_512}</p>
              <button onClick={() => toEncodeinRipeMD160()}>Encode in RipeMD160</button>
            
            <p>{encodedinRipeMD160}</p>

        </div>
      </header>
      <body>
      </body>
    </div>

  );
}



export default App;
