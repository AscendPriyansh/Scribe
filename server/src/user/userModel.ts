import { Schema, model } from 'mongoose';
import type { User } from "./userTypes.ts";

const userSchema = new Schema<User>({
  name: { 
    type: String, 
    required: true,  
    trim: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    trim: true 
  },
  location: { 
    type: String, 
    trim: true 
  },
  description: { 
    type: String, 
    trim: true 
  }
}, { 
  timestamps: true 
});

export const UserModel = model<User>('User', userSchema);