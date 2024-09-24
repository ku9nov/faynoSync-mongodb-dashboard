import { DefaultAuthProvider } from 'adminjs';
import componentLoader from './component-loader.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
});
const Admin = mongoose.model('Admin', AdminSchema);

const provider = new DefaultAuthProvider({
    componentLoader,
    authenticate: async ({ email, password }) => {
        const admin = await Admin.findOne({ username: email });

        if (admin) {
            const match = await bcrypt.compare(password, admin.password);
            if (match) {
                return { email: admin.username }; 
            }
        }
        return null; 
    },
});

export default provider;

