const createClient = require("./index");

it("should create client", () => {
  const adobeClient = createClient();

  expect(adobeClient).toBeDefined();
});
