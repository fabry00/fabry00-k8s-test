echo "#### Starting minikube ####"
minishift start —metrics

echo "#### Starting server ####"
minishift dashboard

echo "#### Configuring OC"
minishift oc-env
eval $(minishift oc-env)
