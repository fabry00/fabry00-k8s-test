echo "This is valid only if the service is NodePort"

export NODE_PORT=$(kubectl get services/user-service -o go-template='{{(index .spec.ports 0).nodePort}}' -n=k8s-test-${1})
echo "Contacting endpoint: $(minikube ip):$NODE_PORT/actuator/health"
echo "----------------"
echo
echo "#### HEALTH ######"
curl $(minikube ip):$NODE_PORT/actuator/health
echo
echo "----------------"
echo
echo "#### INFO ######"
curl $(minikube ip):$NODE_PORT/info
echo