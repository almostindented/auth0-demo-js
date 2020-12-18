/*

            Copyright 2020 @almostindented.
 Distributed under the Boost Software License, Version 1.0.
        (See accompanying file LICENSE or copy at
          https://www.boost.org/LICENSE_1_0.txt)

 */

const express = require("express");
const { join } = require("path");
const app = express();

// Serve static assets from the /public folder
app.use(express.static(join(__dirname, "public")));

// Endpoint to serve the configuration file
app.get("/auth_config.json", (req, res) => {
    res.sendFile(join(__dirname, "auth_config.json"));
});

// Serve the index page for all other requests
app.get("/", (_, res) => {
    res.sendFile(join(__dirname, "index.html"));
});

// Listen on port 3000
app.listen(3000, () => console.log("Application running on port 3000"));