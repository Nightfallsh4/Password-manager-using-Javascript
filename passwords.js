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
function decryptAES(key, cipherText){
    let decryptedText = CryptoJS.AES.decrypt(cipherText,key.toString())
    let plainText = decryptedText.toString(CryptoJS.enc.Utf8)
    console.log(plainText)
    return plainText
}

let key = keyDerivation("Thisisapassword!")
let encryptedText = encryptAES(key, "Hello my name is shanmuga")
let text = decryptAES(key, encryptedText)