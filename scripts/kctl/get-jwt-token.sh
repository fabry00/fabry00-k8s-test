export NODE_PORT=$(kubectl get services/reverse-proxy -o go-template='{{(index .spec.ports 0).nodePort}}' -n=k8s-test-${1})
echo "PROXY UI endpoint    : http://$(minikube ip):$NODE_PORT"

curl -X POST "http://$(minikube ip):$NODE_PORT/api/authenticate" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"password\": \"pass1\", \"username\": \"user1\"}" -v