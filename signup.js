const signup = (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required.');
    }
    return { success: true, message: 'Signup successful.' };
  };
  module.exports = {signup };