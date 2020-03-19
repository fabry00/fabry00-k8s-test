export NODE_PORT=$(kubectl get services/reverse-proxy -o go-template='{{(index .spec.ports 0).nodePort}}' -n=k8s-test-${1})
echo "PROXY UI endpoint    : http://$(minikube ip):$NODE_PORT"
echo "Proxy status endpoint: http://$(minikube ip):$NODE_PORT/nginx_status"