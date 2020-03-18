export NODE_PORT=$(kubectl get services/reverse-proxy -o go-template='{{(index .spec.ports 0).nodePort}}' -n=k8s-test-${1})
echo "PROXY endpoint: $(minikube ip):$NODE_PORT"
