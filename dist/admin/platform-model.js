import mongoose from 'mongoose';

const PlatformsSchema = new mongoose.Schema({
    platform_name: {
        type: String,
        required: true,
        unique: true,

    },
    updated_at: {
        type: Date,
        default: Date.now,
    },

}, { collection: 'apps_meta' }); 

const Platforms = mongoose.models.Platforms || mongoose.model('Platforms', PlatformsSchema);
  
  export default Platforms;
