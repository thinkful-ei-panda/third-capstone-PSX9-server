const REGEX_UPPER_LOWER_NUMBER = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\S]+/;
const xss = require('xss');
const bcrypt = require('bcryptjs');

const AdminService = {
    getAllUsers(db) {
      return db
      .select(
        '*'
      )
      .from('users')
    },

    deleteUser(db, email) {
      return db("users")
      .where(
        db.raw(`email=${email}`)
      )
      .delete();
    }
}

module.exports = AdminService