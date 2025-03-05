export default function generatePass() {
    let password: string = ''
    let characters: string = '!@#$*QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%*'
    let passwordLenght = 8

    for (let index = 0; index < passwordLenght; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password
}