# Use an official Node.js runtime as the base image
FROM node:18-alpine

ENV NODE_ENV=build

# Set the working directory within the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install project dependencies using Yarn
RUN npm install

# Copy the rest of your application code to the container
COPY . .

EXPOSE 8080

# Specify the command to run when the container starts
CMD ["node", "index.js"]