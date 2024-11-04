## Attention
Before running Docker containers, please ensure that you do not have Nginx or MySQL processes running on your system to avoid conflicts.

**Command for Linux**
To stop Nginx and MySQL, run the following commands.
```bash
sudo systemctl stop nginx
sudo systemctl stop MySQL
```


### Installation and Running

**Navigate to the `order_management_server` directory where the `docker-compose.yml` file is located:**
cd path/to/order_management_server

**Run Docker Compose to create and start the containers:**
docker-compose up

### Order Management Project
*This project represents an order management system consisting of two main components: the server and the client. The server uses Docker to deploy the application, including a MySQL database and an Nginx web server on the client.*

# Project Structure

*The project has the following directory structure:*

- **order_management_server/**
  - **mysql/**
    - `init.sql`
  - **docker/**
    - **script/**
      - `entrypoint.sh`
  - `Dockerfile`
  - `docker-compose.yml`

- **order_management_client/**
  - **nginx/**
    - `nginx.conf`
  - **docker/**
    - **script/**
      - `entrypoint.sh`
  - `Dockerfile`


### File Descriptions

order_management_server/

	•	mysql/init.sql: Initialization script for setting up the MySQL database.
	•	docker/script/entrypoint.sh: Startup script for the server container.
	•	Dockerfile: File describing how to build the server image.
	•	docker-compose.yml: Docker Compose configuration file for managing a multi-container application.

order_management_client/

	•	nginx/nginx.conf: Nginx configuration file for setting up the web server.
	•	docker/script/entrypoint.sh: Startup script for the client container.
	•	Dockerfile: File describing how to build the client image.
