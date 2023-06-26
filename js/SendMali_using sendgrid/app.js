// const sdmail =  require('@sendgrid/mail');
// const api_key = 
// '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';

// sdmail.setApiKey(api_key);

// const message_mail = {
//     to : 'SS19CO008prernamahabare@gmail.com',
//     form: 'patelyashodhar012@gmail.com',
//     subject : 'hello',
//     text : 'hello everyone',
//     html : '<h2>hello everyone</h2>'
// };

// sdmail
//     .send(message_mail)
//     .then((resopnse) => console.log('Email send.....'))
//     // .catch((error) => console.log('error'));


const sgmail = require('@sendgrid/mail');

const API_KEY = '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';

sgmail.setApiKey(API_KEY);

const msg = {
    to: "prernasmahabare24@gmail.com",
    from: "patelyashodhar012@gmail.com",
    subject: 'hello',
    text: 'hello everyone',
    html:  '<h1>hello everyone</h1>',
};

sgmail.send(msg)
    .then((response) => {
        console.log('Email sent...');
    }).catch((error) => {
        console.log(error.msg);
    });
