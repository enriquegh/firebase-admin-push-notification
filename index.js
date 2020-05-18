var admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://<PROJECT_NAME>.firebaseio.com'
  });
  

// The topic name can be optionally prefixed with "/topics/".
var topic = 'weather';

var message = {
    notification: {
      title: '$GOOG up 1.43% on the day',
      body: '$GOOG gained 11.80 points to close at 835.67, up 1.43% on the day.'
    },
    topic: topic
  };
// Send a message to devices subscribed to the provided topic.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });
