#!/bin/bash
set -e

echo "Start of front-entrypoint.sh"

# Install dependencies
yarn

# Build the frontend application
NODE_OPTIONS="--max-old-space-size=4096" yarn build

# Restart Nginx to serve the new build
service nginx restart

# Keep the container running
while true; do
  sleep 60
done

echo "End of front-entrypoint.sh"
