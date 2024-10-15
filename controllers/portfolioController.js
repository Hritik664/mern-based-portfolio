const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport')

//transporter
const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth:{
            api_key: process.env.API_SENDGRID,
        },
    })
)

const sendEmailController = (req,res) =>{
    try{
        const {name,email,msg} = req.body

        if(!name || !email || !msg){
            return res.status(500).send({
                    success:false,
                    message: 'Please fill in all fields',
                }
            )
        }

        //email matter
        transporter.sendMail({
            to:'singhhritik560@gmail.com',
            from:'singhhritik561@gmail.com',
            subject:'Regarding Mern Portfolio App',
            html:`
            <h5>Detail Information</h5>
            <ul>
                <li><p>Name: ${name}</p></li>
                <li><p>Email: ${email}</p></li>
                <li><p>Message: ${msg}</p></li>
            </ul>
            `,
        });


        return res.status(200).send({
            success:true,
            message:"Your message Send Successfully"
        })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Send Email API Erorr',
            error
        })
    }
};


module.exports = {sendEmailController};