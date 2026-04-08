#!/usr/bin/env python3
"""Concurrent coroutines"""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn wait_random n times with max_delay and return list of delays."""
    delays: List[float] = []

    for _ in range(n):
        delay = await wait_random(max_delay)
        delays.append(delay)

    ordered: List[float] = []
    for d in delays:
        i = 0
        while i < len(ordered) and ordered[i] < d:
            i += 1
        ordered.insert(i, d)

    return ordered
