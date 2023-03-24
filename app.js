const T = require("node-tesseract-ocr");

const config = {
    lang: "eng",
    oem: 1,
    psm: 3
};


T.recognize("https://i.ibb.co/jTKYQqP/Captcha-United.png", config)
    .then((Text) => {
        console.log("Result:", Text);
    })

    .catch((error) => {
        console.log(error.message);
    })