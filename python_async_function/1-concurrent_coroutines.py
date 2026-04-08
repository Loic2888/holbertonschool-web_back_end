#!/usr/bin/env python3


import asyncio
from 0-basic_async_syntax import wait_random


async def wait_n(n: int, max_delay: int = 10) -> list:
    """Returns a list of all the delays (float values) of the coroutines.

    Args:
        n (int): number of coroutines to wait for.
        max_delay (int, optional): maximum delay in seconds. Defaults to 10.

    Returns:
        list: list of all the delays (float values) of the coroutines.
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    return await asyncio.gather(*tasks)
