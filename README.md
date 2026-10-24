# Netflix Clone Frontend: CI/CD Deployment on AWS

React frontend for a Netflix-style streaming app, containerized with Docker and deployed to AWS EC2.

## What I built
- Separate frontend and backend repositories
- GitHub Actions pipeline that builds a Docker image and pushes it to Amazon ECR on every push to main
- Dedicated IAM user for the pipeline, with credentials stored as GitHub secrets
- Deployment on EC2 with Docker Compose and Portainer
- Fixed a hardcoded backend address at the source so every build ships the correct API URL

## Stack
React, Docker, GitHub Actions, Amazon ECR, AWS EC2, AWS IAM, Portainer

## Status
Completed and decommissioned to control cloud costs.

## Author
Emmanuel Ibegbu, Cloud Security and DevOps Engineer
