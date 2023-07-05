const MarketingCloudClient = require("@adobe/target-nodejs-sdk");

const createClient = () => {
  const targetSDKConfig = {
    client: "RANDOM",
    organizationId: "67ARANDOM@AdobeOrg",
    deliveryEndpoint:
      "https://RANDOM.tt.omtrdc.net/rest/v1/mbox/my-session-123?client=RANDOM",
  };

  const marketingCloudClient = MarketingCloudClient.create(targetSDKConfig);
  return marketingCloudClient;
};

module.exports = createClient;

const newClient = createClient();

console.log(newClient);
