# Unhandled Promise Rejection in Firebase
This repository demonstrates a common error in Firebase applications: unhandled promise rejections when accessing document snapshot properties before the promise resolves.  The bug and its solution are shown in separate JavaScript files.

**Bug:** The `bug.js` file shows how accessing snapshot data before the promise resolves leads to errors.

**Solution:** The `bugSolution.js` file demonstrates the correct approach using async/await to handle the asynchronous nature of Firebase operations, preventing the error.

This issue often arises due to the asynchronous nature of Firebase's data retrieval methods.  Always ensure you handle promises correctly to avoid these errors.