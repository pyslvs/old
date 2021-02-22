import os
from lib.synthesis import *

num_links = 4
pos = {
    0: (0, 0),
    1: (90, 0),
    2: (12.92, 32.53),
    3: (73.28, 67.97),
    4: (33.3, 66.95)
}
input = [(0, 2), (0, 360)]
placement = {0: (-70, -70, 10), 1: (70, -70, 10)}
track_point = 4
pass_point = [(60.3, 118.12), (31.02, 115.62), (3.52, 110.62)]
cus = {4: 2}


set = settings(num_links, pos, input, placement, track_point, pass_point, cus)

# The set.collection() function return error.
set.collection()
"""
four_bar = set.collection()
print(four_bar)
result = algorithm_RGA(four_bar)
print(f"The expression of synthesis result:\n {result}")
"""
