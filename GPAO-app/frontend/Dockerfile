# Use an official Node.js runtime as a parent image
FROM node:14-alpine as build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code to the container
COPY . .

# Build the Angular application
RUN npm run build  --prod

# Use a smaller, optimized base image for production
FROM nginx:alpine

# Copy the built Angular application to the container
COPY --from=build /app/dist/my-angular-app /usr/share/nginx/html

# Expose port 80 for the application
EXPOSE 80

# Start Nginx to serve the Angular application
CMD ["nginx", "-g", "daemon off;"]
