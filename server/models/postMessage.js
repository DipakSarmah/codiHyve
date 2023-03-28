import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    creator: String,
    bucket: {
        type: String,
        required: true,
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;