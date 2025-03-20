// test/setup.js
process.env.NODE_ENV = "test"; // Important: Set to test environment
process.env.JWT_SECRET = "test-secret"; // Use a test secret
process.env.AWS_BUCKET_NAME = "test-bucket";
process.env.AWS_REGION = "test-region";
process.env.AWS_MI_BUCKET_NAME = "test-mi-bucket";

// You might also include database connection setup *for integration tests* here,
// but for *unit tests*, we'll mock the database interactions.
