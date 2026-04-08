#!/usr/bin/env python3

from typing import Callable

def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Creates a multiplier function.

    Args:
        multiplier (float): The multiplier.

    Returns:
        Callable[[float], float]: A function that multiplies a number by the multiplier.
    """
    def multiplier_func(number: float) -> float:
        """Multiplies a number by the multiplier.

        Args:
            number (float): The number to multiply.

        Returns:
            float: The result of the multiplication.
        """
        return number * multiplier

    return multiplier_func
