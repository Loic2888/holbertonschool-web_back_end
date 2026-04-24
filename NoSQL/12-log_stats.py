#!/usr/bin/env python3

"""Provides statistics about Nginx logs stored in MongoDB."""


from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient("mongodb://127.0.0.1:27017")
    collection = client.logs.nginx

    # Nombre total de logs
    total_logs = collection.count_documents({})
    print("{} logs".format(total_logs))

    print("Methods:")

    # Liste des méthodes HTTP à compter
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, count))

    # Nombre de documents avec method=GET et path=/status
    status_check_count = collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print("{} status check".format(status_check_count))
