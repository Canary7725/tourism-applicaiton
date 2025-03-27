# README - CI/CD Deployment with GitHub Runner

## Overview
This repository showcases the implementation of a CI/CD pipeline using GitHub Actions. It details how to automated build, push, pull and run docker images via Dockerhub into a remote ubuntu server.

## Prerequisites
- A Linux-based remote server (e.g., Ubuntu)
- SSH access with a key pair
- A container registry (e.g., DockerHub)
- GitHub Personal Access Token (PAT)

## Steps Implemented

### 1. Server Setup and Project Setup
1. **Establish Connection**: Connected to a remote server via SSH.
2. **Create Key Pair**: Generated SSH keys and configured authentication.
3. **Clone MERN Project**: Cloned the application inside `/var/www/html/`.
4. **Run Setup Script**: Executed a Bash script to install Docker and Nginx.
5. **Configure Nginx**:
   - Created an Nginx config file in `/etc/nginx/sites-enabled/`
   - Configured proxying requests from port `80` to `3000`
   - Restarted Nginx service
5. **Write Dockerfiles**:
   - Created a `Dockerfile` for both frontend and backend.
7. **Set Up GitHub Integration**:
   - Generated a GitHub PAT.
   - Connected the GitHub account with the server.
   - Pushed the project code to GitHub.

### 3. CI/CD Pipeline
#### CI (Continuous Integration)
- Wrote `ci.yml` GitHub Actions workflow.
- Built Docker images and pushed them to a private registry.
- Configured necessary repository secrets in GitHub.

#### CD (Continuous Deployment)
- Wrote `cd.yml` GitHub Actions workflow.
- Pulled the latest Docker images from the registry.
- Deployed and ran the containers on the remote server.

#### Execution
- Pushed code to the `main` branch.
- GitHub Actions triggered CI workflow (`ci.yml`).
- After successful execution, CD workflow (`cd.yml`) pulled and deployed containers.

### 4. Results
- Successfully deployed MERN stack application with CI/CD automation.
- Every new code push triggers automated building, pushing, and deployment.
- Dockerized application runs on the remote server with Nginx as a reverse proxy.

## Repository Structure
```
/ (root)
|-- .github/workflows
|   |-- ci.yml  # CI GitHub Actions workflow
|   |-- cd.yml  # CD GitHub Actions workflow
|
|-- backend
|   |-- controllers/
|   |-- models/
|   |-- routes/
|   |-- utils/
|   |-- .dockerignore
|   |-- .env
|   |-- .gitignore
|   |-- Dockerfile  # Backend Dockerfile
|   |-- generateJwtSecret.js
|   |-- index.js
|   |-- package.json
|   |-- package-lock.json
|
|-- frontend
|   |-- public/
|   |-- src/
|   |-- .dockerignore
|   |-- .env
|   |-- .gitignore
|   |-- Dockerfile  # Frontend Dockerfile
|   |-- package.json
|   |-- package-lock.json
|   |-- README.md
|
|-- script
|   |-- setup.sh  # Bash script for setting up Docker and Nginx
|   |-- docker-compose.yml
|
|-- README.md  # Documentation
```

## Screenshots
All relevant screenshots of setup, deployment, and execution are stored in the `/pictures` directory.

## References
- [Docker Installation](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)
- [Nginx Configuration](https://www.digitalocean.com/community/tutorials/understanding-the-nginx-configuration-file-structure-and-configuration-contexts#the-location-context)

## Conclusion
This project successfully implemented a CI/CD pipeline using GitHub Actions, Docker, and Nginx. The setup ensures automated deployment whenever new changes are pushed to the repository.

