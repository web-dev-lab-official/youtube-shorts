FROM node:22

WORKDIR /app

# Source code
COPY . .

# Build tools + dependencies
RUN npm install

# Build the app
RUN npm run build

# Run the app
CMD ["node", "dist/index.js"]