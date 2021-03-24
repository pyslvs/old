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
### define the parameters (CVA suspension)###
    num_links = 4
    pos = {
        0: (0, 0),
        1: (-25.5, 209.5),
        2: (-70, -35.6),
        3: (-105, 251),
        4: (-416, 57.5),
        5: (34.5, 207)
    }
    cus = {4: 2, 5: 3}
    input = [(0, 2), (0, 360)]
    placement = {0: (0, 0, 10), 1: (-25.5, 209.5, 10)}
    pass_point = {
        4: [
            [-406.9852659893411, 139.81994457715848],
            [-417.9852659893411, 100.81994457715848],
            [-423.9852659893411, 61.81994457715848],
            [-417.9852659893411, 22.81994457715848],
            [-401.9852659893411, -17.18005542284152],
        ]
    }

    set = settings(num_links, pos, input, placement, pass_point, cus)
    # print(type(set))
    ### define the parameters ###
    
    
    mech_expr = synthesis(set)
    print("mech_expr:\n", mech_expr, "\n")
    """
    joint_coord = get_joint_coord(mech_expr)
    print("joint_coord:\n", joint_coord, "\n")
    link_point = get_link_point(mech_expr)
    print("link_point:\n", link_point, "\n")
    # link_gen(joint_coord, link_point)
    """
    
    



        
