echo "#### Starting minikube ####"
minishift start —metrics

echo "#### Enabling metrics server ####"
minishift addons enable metrics-server

echo "#### Starting server ####"
minishift dashboard

echo "#### Configuring OC"
minishift oc-env
eval $(minishift oc-env)
