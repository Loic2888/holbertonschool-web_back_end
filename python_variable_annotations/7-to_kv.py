#!/usr/bin/python3
def to_kv(k: str, v: int or float) -> tuple:
    """Creates a tuple of the key and the square of the value.

    Args:
        k (str): The key.
        v (int or float): The value.

    Returns:
        tuple: A tuple of the key and the square of the value.
    """
    return (k, v ** 2)
