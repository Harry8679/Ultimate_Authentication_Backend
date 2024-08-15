const { Schema, model } = require('mongoose');
const crypto = require('crypto');

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        max:32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    role: {
        type: String,
        default: 'subscriber'
    },
    resetPasswordLink: {
        data: String,
        default: ''
    }
}, { timestamps: true });

userSchema
    .virtual('password')
    .set(function(password) {
        // Create a temporarity variable called _password
        this._password = password;
        // Generate salt
        this.salt = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

userSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function(password) {
        if (!password) return '';

        try {
            return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
        } catch(err) {
            return '';
        }
    },

    makeSalt: function() {
        return Math.round(new Date().valueOf() * Math.random()) + '';
    }
};

module.exports = model('User', userSchema);