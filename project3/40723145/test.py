# The file is testing the "Class Vlinks" parse from the mechanism expression.

import sys
import os
sys.path.append("..")    # add the directory path as "project3"
from lib.synthesis import *


#cwd = os.getcwd()
# print(synthesis_import_test())

def _run() -> str:
    ### define the parameters ###
    num_links = 4
    pos = {0: (0, 0), 1: (90, 0), 2: (12.92, 32.53), 3: (73.28, 67.97), 4: (33.3, 66.95)}
    # expr is unuse now 
    expr = PMKS_expr(
        [
        VPoint(["ground", "L1"], 0, 0, "green", 0, 0),
        VPoint(["ground", "L2"], 0, 0, "green", 90, 0),
        VPoint(["L1", "L3"], 0, 0, "green", 12.92, 32.53),
        VPoint(["L2", "L3"], 0, 0, "green", 73.28, 67.97),
        VPoint(["L3"], 0, 0, "green", 33.3, 66.95),
        ]
    )
    input = [(0, 2), (0, 360)]
    # graph = [(0, 1), (0, 2), (1, 3), (2, 3)]
    placement = {0: (-70, -70, 10), 1: (70, -70, 10)}
    pass_point = {4: [(60.3, 118.12), (31.02, 115.62), (3.52, 110.62)]}
    cus = {4: 2}
    ### define the parameters ###
    
    set = settings(num_links, pos, input, placement, pass_point, cus)
    # set.graph2vpoints()
    four_bar = set.collection()
    # print(type(four_bar))
    mech_expr = algorithm_RGA(four_bar)
    # print(f"The expression of synthesis result:\n {result}")
    return mech_expr
    
    
def get_vlink(mech_expr):
    vlinks = parse_vlinks(mech_expr)
    print(vlinks)
    return vlinks
    
    
def test_parse_func(mech_expr):
    vpoints = parse_vpoints(mech_expr)
    print(vpoints, "\n")
    pos = parse_pos(mech_expr)
    print(pos, "\n")
    vlinks = parse_vlinks(mech_expr)
    print(vlinks, "\n")


if __name__ == "__main__":
    mech_expr = _run()
    print(mech_expr, "\n")
    vlinks = get_vlink(mech_expr)
    print(vlinks[0])