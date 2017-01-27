import AWS = require("aws-sdk");

async function getQueueUrl() {
    try {
        const sqs = new AWS.SQS({
            region: "us-east-1"
        });

        let queueAttributesResult = await sqs.getQueueAttributes({
            QueueUrl: "https://sqs.us-east-1.amazonaws.com/294119457871/Dev-CONTRA-EmailSummary-WriteEmailSummaryFunctionDeadLetterQueue",
            AttributeNames: [
                "All"
            ]}).promise();

        console.log("QueueUrl:", queueAttributesResult.Attributes);
    } catch(error) {
        console.error("Failed:", error);
    }
}

(async function () {
    await getQueueUrl();
    console.log("boom");
})();