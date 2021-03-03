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
    num_links = 6
    pos = {
        0: (-33.62, -19),
        1: (-48.37, 12.12),
        2: (17.12, 33.87),
        3: (51.38, -12.63),
        4: (50.35, 53.11),
        5: (143.45, 65.96),
        6: (99.24, 20.447)
    }
    input = [(0, 3), (0, 360)]
    placement = {2: (51.38, -12.63, 10), 1: (99.24, 20.447, 10), 0: (-33.62, -19, 10)}
    pass_point = {
        5: [
            [93.18042299933363, 85.07324618729241],
            [114.39254421145483, 81.28536739941362],
            [137.11981693872755, 72.19445830850454],
            [154.54405936297, 51.739912853959076],
            [161.3622411811518, 31.285367399413623],
        ]
    }
    # cus = {4: 2}

    set = settings(num_links, pos, input, placement, pass_point)
    # print(type(set))
    ### define the parameters ###
    
    
    mech_expr = synthesis(set)
    print("mech_expr:\n", mech_expr, "\n")
    joint_coord = get_joint_coord(mech_expr)
    print("joint_coord:\n", joint_coord, "\n")
    link_point = get_link_point(mech_expr)
    print("link_point:\n", link_point, "\n")
    # link_gen(joint_coord, link_point)
    
    



        
