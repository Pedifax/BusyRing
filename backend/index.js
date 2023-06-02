const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const corsOption = {
  origin: ["http://localhost:4000"],
  credentials: true,
};

const app = express();
app.use(cors(corsOption));

app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

/* tools and controllers to go through

app.use("/oauth", oauthRoutes);

oauth(app);
auth(app);
profile(app);
article(app);
following(app);
error_handler(app);

*/

mongoose
  .connect(`GET THE CONNECTION URL FROM MONGODB`)
  .then(() => {
    const port = process.env.PORT || 4000;
    app.listen(port, () =>
      console.log(`Listening on http://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.log(`mongoose.connect error: ${err}`);
  });
