#!/usr/bin/env python3
""" Simple pagination """

import csv
from typing import List

index_range = __import__('0-simple_helper_function').index_range


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)

        data = self.dataset()

        return data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        assert isinstance(page, int) and page > 0  # Ajoute les assert manquants
        assert isinstance(page_size, int) and page_size > 0
        
        data = self.get_page(page, page_size)
        dataset_len = len(self.dataset())
        total_pages = (dataset_len + page_size - 1) // page_size  # Ceiling division
        
        hyper = {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': page + 1 if page < total_pages else None,  # OK avec fix
            'prev_page': page - 1 if page > 1 else None,
            'total_pages': total_pages
        }
        return hyper
