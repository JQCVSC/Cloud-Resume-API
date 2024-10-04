# 🌥️ Cloud Resume API

Welcome to the **Cloud Resume API Project**! This project showcases how to build and deploy a serverless API using **Google Cloud Functions**, **Firestore**, and **GitHub Actions**. The API serves resume data in JSON format.

---

## 📝 Prerequisites

Before getting started, ensure you have the following:

- [Google Cloud Platform](https://cloud.google.com) account
- [GitHub](https://github.com) account

---

## ⚙️ Setup

### 1. Create a New Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com) and create a new project.
2. Enable the **Cloud Functions API** and **Firestore** for your project.

### 2. Set Up Firestore

1. In the **Google Cloud Console**, create a new **Firestore** database.
2. Create a collection named `resume-database`.
3. Add your resume data as a document inside the `resume-database` collection.

### 3. Create a GitHub Repository

1. Create a new repository on [GitHub](https://github.com/new) for your project.
2. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   ```
   
## 🚀 Cloud Function Setup
1. Add Cloud Function Code
In the root directory of your cloned repository, create a new file named index.js.

Add your Cloud Function code into index.js:

javascript
Copy code
```bash
// Your Cloud Function code here
```
2. Create package.json
In the root directory, create a package.json file.

Add the following content to the package.json:

json
Copy code

```bash
{
  "name": "cloud-resume-api",
  "version": "1.0.0",
  "dependencies": {
    "@google-cloud/functions-framework": "^3.1.3",
    "@google-cloud/firestore": "^6.4.2"
  }
}
```
## 🔄 Automate Deployment with GitHub Actions
1. Set Up GitHub Actions Workflow
In your GitHub repository, create a new folder and file at .github/workflows/deploy-function.yml.
Add the following configuration to deploy-function.yml:

yaml
Copy code

```bash
# GitHub Actions workflow for deploying Cloud Functions
# Your GitHub Actions workflow configuration here
```

2. Add GitHub Secrets
In your GitHub repository, navigate to Settings > Secrets > Actions.
Add a new secret named GCP_SA_KEY with the value of your Google Cloud service account key that has permissions to deploy Cloud Functions.

## 📤 Deploy the API
1. Commit & Push Changes
Commit and push your changes to GitHub:

bash
Copy code

```bash
git add .
git commit -m "Initial commit"
git push
```
This will trigger your GitHub Actions workflow to deploy the Cloud Function automatically.

🔧 Test Your API
After a successful deployment, test your API by sending a request to the Cloud Function URL provided in the Google Cloud Console.

📚 Additional Resources
Google Cloud Functions Documentation
GitHub Actions Documentation
