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

// let key = keyDerivation("Thisisapassword!")
// let encryptedText = encryptAES(key, "Hello my name is shanmuga")
// let text = decryptAES(key, encryptedText)


function passwordGenerate(passwordLength){
    // let data  = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,;:'"{}[]()-_=+*/&^%$#@!~?<>`.split("")
    data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ',', ';', ':', "'", '"', '{', '}', '[', ']', '(', ')', '-', '_', '=', '+', 
    '*', '/', '&', '^', '%', '$', '#', '@', '!', '~', '?', '<', '>']
    let password = ""
    for (let i= 0 ; i<passwordLength;i++){
        let num = crypto.getRandomValues(new Uint8Array(12))[0]
        for (let j = 0; j<10;j++) {
            if (num > 91){
                num = num%91
            }else{
                j = 11
            }
        }
        password += data[num]
    }
    // console.log(num)
    console.log(password)
    console.log(password.length)
}

passwordGenerate(25)


