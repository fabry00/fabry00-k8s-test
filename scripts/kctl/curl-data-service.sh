export NODE_PORT=$(kubectl get services/data-service -o go-template='{{(index .spec.ports 0).nodePort}}' -n=k8s-test-${1})
echo "Contacting endpoint: $(minikube ip):$NODE_PORT/actuator/health"
curl $(minikube ip):$NODE_PORT/actuator/health -v