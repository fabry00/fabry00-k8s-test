export NODE_PORT=$(kubectl get services/api-gateway-service -o go-template='{{(index .spec.ports 0).nodePort}}' -n=k8s-test-${1})
echo "Contacting endpoint: $(minikube ip):$NODE_PORT/actuator/health"
echo "----------------"
echo
echo "#### USER 1 ######"
curl $(minikube ip):$NODE_PORT/api/users/1
echo
echo "----------------"
echo
echo "#### TODO 1 ######"
curl $(minikube ip):$NODE_PORT/api/todos/1
echo