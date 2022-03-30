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

function passwordGenerate(passwordLength=15){
    // Returns a cryptographic random number generated password
    data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ',', ';', ':', "'", '"', '{', '}', '[', ']', '(', ')', '-', '_', '=', '+', 
    '*', '/', '&', '^', '%', '$', '#', '@', '!', '~', '?', '<', '>']
    let password = ""
    for (let i= 0 ; i<passwordLength;i++){
        let num = crypto.getRandomValues(new Uint8Array(12))[0]
        for (let j = 0; j<10;j++) {
            if (num >= 91){
                num = num%91
            }else{
                j = 11
            }
        }
        password += data[num]
        // console.log(num)
    }
    console.log(password)
    console.log(password.length)
    return password
}

// Take in master password and use it to try and decrypt the databade of the given username
const submit = document.getElementById("submitButton")
const usernameInput = document.getElementById("usernameInput")
const passwordInput = document.getElementById("passwordInput")
submit.addEventListener("click",submitFunction)
function submitFunction(){
    console.log("The submit button works!!")
    let givenUsername = usernameInput.value
    usernameInput.value = ""
    let givenPassword = passwordInput.value
    passwordInput.value = ""
    console.log("Username- "+givenUsername)
    console.log("Passowrd- "+givenPassword)
    

}
// Render the decrypted database with each accounts username and password with can be clicked to be copied
// Add a lock button which will lock the database
// Add a 'add' button which can be used to add an account, passwords of the accounts will be encrypted using aes and the user's master password
// Each account can optionally have a link attached
// Add an export button which will export the entire database of all users as a JSON file




