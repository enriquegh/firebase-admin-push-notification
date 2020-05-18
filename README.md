# firebase-admin-push-notification

Send a simple notification to a topic called "weather"

# Set up
1. Change the databaseURL to your Firebase project URL inside `index.js`
2. Follow this link to create and set up your Admin Firebase Service Account:  
https://firebase.google.com/docs/admin/setup#initialize-sdk  
You should have a .json file downloaded it's path on an environment variable called `GOOGLE_APPLICATION_CREDENTIALS`

Example:
```bash
export GOOGLE_APPLICATION_CREDENTIALS=/Users/enriquegonzalez/Desktop/mycreds.json
```
3. Install with `npm install`
4. Run with `node index.js`