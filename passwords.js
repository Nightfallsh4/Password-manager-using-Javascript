function keyDerivation(password){
    let salt = CryptoJS.lib.WordArray.random(256 / 8) // Salt
    console.log("Salt- "+ salt)
    let sha256 = CryptoJS.algo.SHA256.create()
    let key256Bits = CryptoJS.PBKDF2(
        password, 
        salt.toString(), 
        {
            keySize: 128 / 32, 
            iterations:1000, 
            hasher: sha256
        }) //Password based key derivation
      console.log("Key- "+ key256Bits)
      return key256Bits
}

function encryptAES(key, plainText){
    let encryptedText = CryptoJS.AES.encrypt(plainText,key.toString())
    console.log(encryptedText)
    return encryptedText
}
key = keyDerivation("Thisisapassword!")
encryptedText = encryptAES(key, "Hello my name is shanmuga")
