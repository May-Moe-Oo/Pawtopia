const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
const SALT_ROUNDS = 6;

const usersSchema = new Schema(
  {
    name: {
      type: String,
      maxLength: 20,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      trim: true,
      minLength: 5,
      maxLength: 100,
      required: true,
    },
    userRole: {
      type: String,
      required: true,
      enum: ["user", "admin"],
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

usersSchema.pre("save", async function (next) {
  // Register a pre-save middleware function for the usersSchema
  // 'this' refers to the user document being saved
  if (!this.isModified("password")) return next(); // If the password has been modified, update it with a computed hash using bcrypt
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS); // Use bcrypt to hash the password with the specified number of salt rounds
  return next();
});

usersSchema.set("toJSON", {
  // Set the "toJSON" option for the usersSchema
  transform: function (doc, ret) {
    // Define a "transform" function
    delete ret["password"]; // Remove the "password" property from the returned object
    return ret; // Return the modified object
  },
});

module.exports = mongoose.model("User", usersSchema);
