# DevOps Copilot Installation Guide

This guide walks you through the steps to set up and run the DevOps Copilot GitHub Copilot Extension.

## Prerequisites

- Node.js (>=16.x)
- npm or yarn
- GitHub account with admin access to target repositories
- GitHub organization with Verified Marketplace Publisher status (for publishing)

## Steps

1. **Clone the repository**

```bash
git clone https://github.com/your-org/devops-copilot.git
cd devops-copilot
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a GitHub App**

- Go to https://github.com/settings/apps
- Click "New GitHub App"
- Fill in the app details or use the provided [manifest.json](./manifest.json) for one-click setup
- Set the webhook URL to your server endpoint (e.g., `https://yourdomain.com/webhook`)
- Select the required permissions and events as per the manifest
- Generate a private key and save it securely
- Note the App ID and Client ID/Secret

4. **Configure environment variables**

Create a `.env` file in the root directory with the following:

```
APP_ID=your_app_id
PRIVATE_KEY_PATH=path/to/private-key.pem
WEBHOOK_SECRET=your_webhook_secret
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
```

5. **Run the backend server**

```bash
npm run start:backend
```

6. **Run the frontend dashboard**

```bash
npm run start:frontend
```

7. **Install the GitHub App**

- Install the app on your organization or repositories
- Follow the onboarding prompts in the dashboard

## Additional Resources

- See [docs/](./docs) for detailed feature documentation
- Refer to GitHub's official docs for [GitHub Apps](https://docs.github.com/en/developers/apps) and [Copilot Extensions](https://docs.github.com/en/copilot)
