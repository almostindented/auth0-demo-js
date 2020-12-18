# Setup
Thanks for trying out this project! :grin:
Here's how to get started. You'll need [Node.js](https://nodejs.org/en/) installed.

1. Log in to (or sign up for) [the Auth0 Dashboard](https://manage.auth0.com).
2. Navigate to the _Applications_ section using the left-hand menu.
3. Click to create a new application, and click _Single Page Application_ as the type.
4. Then, once created, switch to the Settings tab and note the __Domain__ and the __Client ID__. You'll need these in the next step.

Once complete, run `npm i` to install dependencies.
Then, create a new file in the project root called _auth_config.json_. __Do not _ever_ commit this file__; it contains sensitive information.

Lastly, copy, paste and fill in the JSON file, replacing __[domain]__ and __[client_id]__ as necessary:

    {
        "domain": "[domain]",
        "clientId": "[client_id]"
    }

Then, you're done! :tada: You can run `npm run dev` to run your app, then point your browser of choice to `localhost:3000` to view it.

Enjoy!