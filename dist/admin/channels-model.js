import mongoose from 'mongoose';

const ChannelsSchema = new mongoose.Schema({
    channel_name: {
        type: String,
        required: true,
        unique: true,

    },
    updated_at: {
        type: Date,
        default: Date.now,
    },

}, { collection: 'apps_meta' }); 

const Channels = mongoose.models.Channels || mongoose.model('Channels', ChannelsSchema);

  export default Channels;
