#!/usr/bin/env python3

""" that changes all topics of a school document based on the name"""


def update_topics(mongo_collection, name, topics):
    """ return the new topic"""
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
