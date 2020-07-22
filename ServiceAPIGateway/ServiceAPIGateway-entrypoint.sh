#!/bin/sh
while ! nc -z config-server 8888 ; do
    echo "Waiting for the Config Server"
    sleep 3
done
while ! nc -z eureka-server 8761 ; do
    echo "Waiting for the Eureka Server"
    sleep 3
done
java -jar /opt/lib/ServiceAPIGateway-0.0.1-SNAPSHOT.jar