# When using a single VM for Kubernetes, it’s useful to reuse Minikube’s built-in Docker daemon.
# Reusing the built-in daemon means you don’t have to build a Docker registry on your host machine
# and push the image into it. Instead, you can build inside the same Docker daemon as Minikube, which speeds up local experiments.
minikube docker-env
eval $(minikube -p minikube docker-env)

# Build and create image
./mvnw package
RESULT=$?
if [ $RESULT -eq 0 ]; then
  docker build -t "fabry/k8s-test-todo-service:${1}" --build-arg app_version=${1} --rm=true --force-rm=true .
  docker push "fabry/k8s-test-todo-service:${1}"
  exit 0
fi

echo "Build failed"
exit 1
