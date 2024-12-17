module.exports = {
  launch: {
    headless: true,
    args: ['--no-sandbox']
  },
  server: {
    command: 'npm start', // Command to start your local server
    port: 3000, // Port your app is running on
    launchTimeout: 30000 // Adjust if needed
  }
};