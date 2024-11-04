#!/bin/bash
set -e

echo "Start of backend-entrypoint.sh"

# Install dependencies
yarn

# Run database migrations
yarn migrate

# Start the application with PM2
pm2 start --name order_management_server npm -- start

# Keep the container running
while true; do
  sleep 60
done

echo "End of backend-entrypoint.sh"
