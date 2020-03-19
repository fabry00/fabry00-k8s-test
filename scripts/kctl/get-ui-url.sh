echo "This is valid only if the service UI is NodePort"
export NODE_PORT=$(kubectl get services/ui -o go-template='{{(index .spec.ports 0).nodePort}}' -n=k8s-test-${1})
echo "UI endpoint: http://$(minikube ip):$NODE_PORT"
