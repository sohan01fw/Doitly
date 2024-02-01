const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Decrypt } = require("../Helpers/crypto");

passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      // Assuming you have a 'users' collection in your MongoDB
      const user = await db.collection("users").findOne({ username: username });

      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }

      //verfiy password
      await Decrypt();

      // Authentication successful, pass the user object to serializeUser
      return done(null, user);
    } catch (err) {
      return done(err);
    } finally {
      await client.close();
    }
  })
);

// Other Passport configurations go here...

module.exports = passport;
