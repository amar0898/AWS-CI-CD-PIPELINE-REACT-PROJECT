#!/bin/bash
set -e

# Pull the Docker image from Docker Hub
docker pull amar0898/aws-ci-cd-react-app

# Run the Docker image as a container
docker run -d -p 80:80 amar0898/aws-ci-cd-react-app