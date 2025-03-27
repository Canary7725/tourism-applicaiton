apt-get update

install_docker(){
    for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done

    sudo apt-get update
    sudo apt-get install ca-certificates curl
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc

    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update

    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-compose
}


#Checking if docker is installed or not
if ! command -v docker &> /dev/null; then
    echo "Docker not found. Installing Docker..."
    install_docker
else
    echo "Docker is already installed."
fi

install_nginx(){
    sudo apt update
    sudo apt install nginx

        cat > /etc/nginx/sites-available/tourism_app <<EOF
        server {
    listen 3000;
    server_name tourism_app.example.com;

    # Serve React frontend
    location / {
        proxy_pass http://frontend:3000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;

    }

    # API proxy to backend (Node.js server)
    location /api/ {
        proxy_pass http://backend:4000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;

    }

    error_page 404 /index.html;
}

    
EOF
    ln -s /etc/nginx/sites-available/tourism_app  /etc/nginx/sites-enabled/
        systemctl restart nginx
}

if ! command -v nginx &> /dev/null; then
    echo "Nginx not found. Installing Nginx..."
    install_nginx
else
    echo "Nginx is already installed. Configuring..."
    install_nginx
fi

echo "Server setup complete!"



