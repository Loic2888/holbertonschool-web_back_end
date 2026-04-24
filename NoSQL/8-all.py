#!/usr/bin/env python3

""" module that lists all documents in a collection"""


def list_all(mongo_collection):
    """ return a list of documents"""
    if mongo_collection is None:
        return []

    return (list(mongo_collection.find()))
