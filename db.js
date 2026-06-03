const mongoose = require('mongoose');
console.log("Connecting to MongoDB...");
mongoose.connect("mongodb+srv://100xdev:n%40ZG24Si3cfjxG8@cluster0.bcfulpq.mongodb.net/coursera-app");
const Schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;


const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,  
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    ImageUrl: String,
    creatorId: objectId,
});

const purchaseSchema = new Schema({
    userId: objectId,
    courseId: objectId,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
};