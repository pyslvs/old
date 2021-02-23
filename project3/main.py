import os
from lib.synthesis import *

# print(synthesis_import_test())
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
pass_point = {
    4: [
        (60.3, 118.12),
        (31.02, 115.62),
        (3.52, 110.62),
        (-25.77, 104.91),
        (-81.49, 69.19),
        (-96.47, 54.906),
        (-109.34, 35.98),
        (-121.84, 13.83),
        (-127.56, -20.09),
        (-128.63, -49.74),
        (-117.56, -65.45),
    ]
}
# pass three points: {[(60.3, 118.12), (31.02, 115.62), (3.52, 110.62)]}
cus = {4: 2}

set = settings(num_links, pos, input, placement, pass_point, cus)
mechanism = set.collection()
result = algorithm_RGA(mechanism)
print(f"The expression of synthesis result:\n{result}")

