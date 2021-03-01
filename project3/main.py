from lib.synthesis import *
from lib.link_gen import *
from math import sqrt
import re

# print(synthesis_import_test())
# print(link_gen_import_test())


def synthesis(set: settings) -> str:
    mechanism = set.collection()
    mech_expr = algorithm_RGA(mechanism)
    # print(f"The expression of synthesis result:\n{mech_expr}")
    return mech_expr


def get_joint_coord(mech_expr: str) -> list([tuple([float, float])]):
    coord_list = []
    XorY_coord_list = re.findall("[-]*\d*[.]\d*", mech_expr)
    # print(XorY_coord_list)
    for index in range(len(XorY_coord_list)):
        if index % 2 != 0:
            continue
        else:
            coord = (float(XorY_coord_list[index]), float(XorY_coord_list[index + 1]))
            coord_list.append(coord)
    # print(coord_list)
    return coord_list


def get_link_point(mech_expr: str) -> list([tuple([int, int])]):
    link_point_list = []
    vlink = parse_vlinks(mech_expr)
    # The regular expression, the seeked characters may be shorten.
    link_num = re.findall("[(]\d[,{1}]\s\d[)$]|[(]\d[,{1}]\s\d[,]\s\d[)$]", str(vlink))
    
    # convert the data type which come from the regular expression and the build the "link point list"
    for str_link_point in link_num:
        str_link_point_cha_list = []
        for str_link_point_cha in str_link_point:
            if str_link_point_cha.isdigit():
                str_link_point_cha_list.append(int(str_link_point_cha))
        link_point_list.append(tuple(str_link_point_cha_list))
    return link_point_list
    
    
def link_gen(joint_coord, link_point: list):
    part = inv()
    for index, link in enumerate(link_point):
        # print(link)
        
        if len(link) == 2:
            part.open('Y:/pyslvs.io/project3/40723145/binary_link.ipt')
            part.parameter(
                center_distance = abs(joint_coord[link[0]][0] -  joint_coord[link[1]][0]),
                hole=3,
                thickness=10
            )
        elif len(link) == 3:
            part.open('Y:/pyslvs.io/project3/40723145/ternary_link.ipt')
            part.parameter(
                center_distance1 = sqrt((joint_coord[link[0]][0] - joint_coord[link[1]][0])**2 + (joint_coord[link[0]][1] - joint_coord[link[1]][1])**2),    #1,2
                center_distance2 = sqrt((joint_coord[link[0]][0] - joint_coord[link[2]][0])**2 + (joint_coord[link[0]][1] - joint_coord[link[2]][1])**2),    #1,3
                center_distance3 = sqrt((joint_coord[link[1]][0] - joint_coord[link[2]][0])**2 + (joint_coord[link[1]][1] - joint_coord[link[2]][1])**2),    #2,3
                hole=3,
                thickness=10
            )
        else:
            print(f"The template doesn't support the {len(link)}-joints-link")
        tag = str(link)
        part.save_as("Y:/pyslvs.io/project3/40723145/test.ipt")


if __name__ == "__main__":
### define the parameters ###
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
    cus = {4: 2}

    set = settings(num_links, pos, input, placement, pass_point, cus)
    # print(type(set))
    ### define the parameters ###
    
    
    mech_expr = synthesis(set)
    print("mech_expr:\n", mech_expr, "\n")
    joint_coord = get_joint_coord(mech_expr)
    print("joint_coord:\n", joint_coord, "\n")
    link_point = get_link_point(mech_expr)
    print("link_point:\n", link_point, "\n")
    link_gen(joint_coord, link_point)
    
    



        
