import mongoose from 'mongoose'; 

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://Quizapp123:Quizapp123@cluster0.zu4v0o0.mongodb.net/?appName=Cluster0')
    .then( () => {console.log('Connected to Database')})

    }

