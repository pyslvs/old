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
    

def test_link_gen(joint_coord, link_point):
    # generate the links by the coordinate.
    part = inv()
    for index, link in enumerate(link_point):
        # print(link)
        
        if len(link) == 2:
            part.open('Y:/pyslvs.io/project3/40723145/binary_link.ipt')
            part.parameter(
                x1=joint_coord[link[0]][0], y1=joint_coord[link[0]][1],
                x2=joint_coord[link[1]][0], y2=joint_coord[link[1]][1],
                hole=3,
                thickness=10
            )
        elif len(link) == 3:
            part.open('Y:/pyslvs.io/project3/40723145/ternary_link.ipt')
            part.parameter(
                x1=joint_coord[link[0]][0], y1=joint_coord[link[0]][1],
                x2=joint_coord[link[1]][0], y2=joint_coord[link[1]][1],
                x3=joint_coord[link[2]][0], y3=joint_coord[link[2]][1],
                hole=3,
                thickness=10
            )
        else:
            print(f"The template doesn't support the {len(link)}-joints-link")


def dis_func(x1, x2, y1, y2):
    result = sqrt((x1-x2)**2 + (y1-y2)**2)
    print(result)


def test_vpointclass():
    vpoints = set.graph2vpoints()
    print("original vpoints: ", vpoints, "\n")
    # print(vpoints[0], "\n")
    slider_joint = vpoints[0].slider_joint(("L1", "ground") , type_int=VJoint.P, angle=30, x=50, y=50)
    # print(slider_joint, "\n")
    vpoints[0] = slider_joint
    print("replace_vpoints: ", vpoints)
    
    
def test_vp():
    sixbar1 = [(0, 1), (0, 2), (2, 3), (3, 1), (0, 4), (4, 5), (5, 1)]
    gv = graph2vpoints(sixbar1)
    print(gv)
    
    
if __name__ == "__main__":
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
    mechanism = set.collection()
    mech_expr = algorithm_RGA(mechanism)
    # print(mech_expr, "\n")
    
    test_vpointclass()
    
    # vlinks = get_vlink(mech_expr)
    # print(vlinks[0])
    # test_vp()