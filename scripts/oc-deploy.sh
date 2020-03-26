echo "--- ${1} ----"
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"


oc apply -f ${DIR}/../k8s/${1}
oc apply -f -f ${DIR}/../k8s