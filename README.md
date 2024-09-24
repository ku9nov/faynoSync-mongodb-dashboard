# FaynoSync MongoDB Admin Dashboard

FaynoSync Admin Dashboard is a custom-built administrative interface for managing your MongoDB database directly. Powered by [AdminJS](https://github.com/SoftwareBrothers/adminjs), a powerful tool for creating administration panels.

> Note: This dashboard is meant to work directly with MongoDB and is not intended to be a frontend for any application or interact with an API.

## Installation
### Prerequisites
```
Node.js (version 20 or later)
Yarn (package manager)
```

### Steps

1. Clone the repository to your local machine:
```
git clone https://github.com/ku9nov/faynoSync-mongodb-dashboard.git
cd faynoSync-mongodb-dashboard
```
2. Use Yarn to install the necessary dependencies:

```
yarn
```
3. Copy the `.env.example` file to `.env` and adjust the variables according to your environment:

```
cp .env.example .env
```
Edit the `.env` file to set your MongoDB connection string and other environment variables correctly.
4. Start the dashboard by running:

```
yarn start
```

The dashboard will be available at [http://localhost:3000/admin](http://localhost:3000/admin).

## Usage
This admin dashboard allows you to view, create, update, and delete records directly in your MongoDB database without going through an application API. It provides a robust and straightforward way to manage your data in a controlled environment.

## Security Notice
Since this dashboard interacts directly with your MongoDB instance, ensure that you run it in a secure environment and restrict access to authorized personnel only. It is not intended for public or unsecured deployment.