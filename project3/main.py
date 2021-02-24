from lib.synthesis import *
from lib.link_gen import *
import re

# print(synthesis_import_test())
# print(link_gen_import_test())

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
print(result)
# print(f"The expression of synthesis result:\n{result}")



# organize mechanism expression of the joint coordinate and let it be the type of tuple in the list that we can call it later.
coord_list = []
XorY_coord_list = re.findall("[-]*\d*[.]\d*", result)
for index in range(len(XorY_coord_list)):
    if index % 2 != 0:
        continue
    else:
        coord = (float(XorY_coord_list[index]), float(XorY_coord_list[index + 1]))
        coord_list.append(coord)

print(coord_list)
print(coord_list[4][1])
print(type(coord_list[4][1]))





        
