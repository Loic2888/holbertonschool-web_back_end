#!/usr/bin/env python3
""" function that inserts a new document in a collection"""


def insert_school(mongo_collection, **kwargs):
    """ return the new _id"""
    result = mongo_collection.insert_one(kwargs)
    return (result.inserted_id)
