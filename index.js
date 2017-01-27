"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const AWS = require("aws-sdk");
function getQueueUrl() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sqs = new AWS.SQS({
                region: "us-east-1"
            });
            let queueAttributesResult = yield sqs.getQueueAttributes({
                QueueUrl: "https://sqs.us-east-1.amazonaws.com/294119457871/Dev-CONTRA-EmailSummary-WriteEmailSummaryFunctionDeadLetterQueue",
                AttributeNames: [
                    "All"
                ] }).promise();
            console.log("QueueUrl:", queueAttributesResult.Attributes);
        }
        catch (error) {
            console.error("Failed:", error);
        }
    });
}
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield getQueueUrl();
        console.log("boom");
    });
})();
