require('dotenv').config();

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({
  region: 'your-region',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const params = {
    TableName: 'your-table-name',
    KeyConditionExpression: 'partitionKey = :partitionKey',
    ExpressionAttributeValues: {
      ':partitionKey': { S: 'your-partition-key-value' }
    }
  };
  
  dynamodb.query(params, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
  