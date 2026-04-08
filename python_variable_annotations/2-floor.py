#!/usr/bin/env python3
def floor(n: float) -> int:
    """Returns the floor of n."""
    return int(n) if n >= 0 or n == int(n) else int(n) - 1
