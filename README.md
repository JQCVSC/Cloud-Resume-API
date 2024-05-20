This is my cloud resume project

Cloud Resume API
This project demonstrates how to build and deploy a serverless API using Google Cloud Functions, Firestore, and GitHub Actions. The API serves resume data in JSON format.
Prerequisites

Google Cloud Platform account
GitHub account

Setup

Create a new Google Cloud project

Go to the Google Cloud Console and create a new project.
Enable the Cloud Functions API and Firestore in your project.


Set up Firestore

In the Google Cloud Console, create a new Firestore database.
Create a collection named "resume-database".
Add your resume data as a document in the "resume-database" collection.


Create a GitHub repository

Create a new GitHub repository for your project.
Clone the repository to your local machine.


Add your Cloud Function code

Create a new file named index.js in the root directory of your repository.
Copy and paste the following code into index.js:
javascriptCopy code// Your Cloud Function code here



Create a package.json file

In the root directory of your repository, create a new file named package.json.
Add the following content to package.json:
jsonCopy code{
  "name": "cloud-resume-api",
  "version": "1.0.0",
  "dependencies": {
    "@google-cloud/functions-framework": "^3.1.3",
    "@google-cloud/firestore": "^6.4.2"
  }
}



Set up GitHub Actions

In your GitHub repository, create a new file at .github/workflows/deploy-function.yml.
Copy and paste the following content into deploy-function.yml:
yamlCopy code# Your GitHub Actions workflow configuration here



Add GitHub Secrets

In your GitHub repository, go to Settings > Secrets > Actions.
Add a new secret named GCP_SA_KEY with the value of a service account key that has permissions to deploy Cloud Functions.


Commit and push your changes

Commit and push your changes to your GitHub repository.
Copy codegit add .
git commit -m "Initial commit"
git push

This should trigger the GitHub Actions workflow to deploy your Cloud Function.


Test your API

After a successful deployment, you can test your API by sending a request to the Cloud Function URL provided in the Google Cloud Console.



Make sure to replace the placeholders in the code snippets with your actual code and configuration.
Additional Resources

Google Cloud Functions Documentation
GitHub Actions Documentation

Note: This README assumes that you've already completed the necessary steps to set up your Cloud Function and GitHub Actions workflow successfully. If you encounter any issues or have specific questions, please refer to the logs and troubleshooting steps provided during the challenge.