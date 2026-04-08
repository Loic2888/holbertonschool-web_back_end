#!/usr/bin/env python3

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Creates a tuple of the key and the square of the value.

    Args:
        k (str): The key.
        v (Union[int, float]): The value (int or float).

    Returns:
        Tuple[str, float]: A tuple of the key and the square of the value.
    """
    return (k, v ** 2)
