# Use an official node.js runtime as a parent image
FROM node:22-alpine

# Install build dependencies for native modules
RUN apk add --no-cache python3 make g++ postgresql-client

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and the package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy sequelize configuration and models
COPY config ./config
COPY models ./models
COPY migrations ./migrations
COPY seeders ./seeders

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 5003

# Define the command to run your application
CMD [ "node", "./src/server.js" ]