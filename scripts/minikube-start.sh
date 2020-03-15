echo "#### Starting minikube ####"
minikube start

echo "#### Enabling metrics server ####"
minikube addons enable metrics-server

echo "#### Starting server ####"
minikube dashboard