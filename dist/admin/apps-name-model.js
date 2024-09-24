import mongoose from 'mongoose';

const AppsNamesSchema = new mongoose.Schema({
    app_name: {
        type: String,
        required: true,
        unique: true,
    },

    updated_at: {
        type: Date,
        default: Date.now,
    },
}, { collection: 'apps_meta' }); 

const AppsNames = mongoose.models.AppsNames || mongoose.model('AppsNames', AppsNamesSchema);

export default AppsNames;