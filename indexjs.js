"use strict";

const AWS = require("aws-sdk");

function getQueueUrl() {

        const sqs = new AWS.SQS({
            region: "us-east-1"
        });

        sqs.getQueueAttributes({
            QueueUrl: "https://sqs.us-east-1.amazonaws.com/294119457871/Dev-CONTRA-EmailSummary-WriteEmailSummaryFunctionDeadLetterQueue",
            AttributeNames: [
                "All"
            ]})
            .promise()
            .then((queueAttributesResult) => {
                console.log("QueueUrl:", queueAttributesResult.Attributes);
            }).catch((error) => {
                console.error("Error:", error);
            });
}

getQueueUrl();