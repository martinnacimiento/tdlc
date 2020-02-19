set -e
# Ejecutar contenedor enlazando el actual directorio
docker run --rm -it --name teoria -v $PWD:/home/node/app -p 8080:8080 tdlc_node:1.0 bash