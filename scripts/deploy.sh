echo "--- ${1} ----"
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Namespace
kubectl apply -f ${DIR}/../k8s/00-namespace-${1}.yml 

# Config map
kubectl apply -f ${DIR}/../k8s/01-config-map-${1}.yml -n=k8s-test-${1}

# Data service
kubectl apply -f ${DIR}/../services/todo-service/k8s/01-deployment.yml -n=k8s-test-${1}
kubectl apply -f ${DIR}/../services/todo-service/k8s/02-service.yml -n=k8s-test-${1}

# User service
kubectl apply -f ${DIR}/../services/user-service/k8s/01-deployment.yml -n=k8s-test-${1}
kubectl apply -f ${DIR}/../services/user-service/k8s/02-service.yml -n=k8s-test-${1}

# Api Gateway service
kubectl apply -f ${DIR}/../services/api-gateway-service/k8s/01-deployment.yml -n=k8s-test-${1}
kubectl apply -f ${DIR}/../services/api-gateway-service/k8s/02-service.yml -n=k8s-test-${1}

# UI
kubectl apply -f ${DIR}/../services/ui/k8s/01-deployment.yml -n=k8s-test-${1}
kubectl apply -f ${DIR}/../services/ui/k8s/02-service.yml -n=k8s-test-${1}

# REVERSE-PROXY
kubectl apply -f ${DIR}/../k8s/02-reverse-proxy-config.yml -n=k8s-test-${1}
kubectl apply -f ${DIR}/../k8s/02-reverse-proxy-deployment.yml -n=k8s-test-${1}
kubectl apply -f ${DIR}/../k8s/02-reverse-proxy-service.yml -n=k8s-test-${1}
