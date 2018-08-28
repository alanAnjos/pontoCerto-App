import mongoose from 'mongoose';

mongoose.Promise = Promise;
const connect = () => mongoose.connect("mongodb://localhost:27017/pontocerto", { useNewUrlParser: true });

export default { connect }