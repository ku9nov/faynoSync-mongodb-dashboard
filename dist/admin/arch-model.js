import mongoose from 'mongoose';

const ArchsSchema = new mongoose.Schema({
    arch_id: {
        type: String,
        required: true,
        unique: true,

    },
    updated_at: {
        type: Date,
        default: Date.now,
    },

}, { collection: 'apps_meta' }); 

const Archs = mongoose.models.Archs || mongoose.model('Archs', ArchsSchema);
  
  export default Archs;
