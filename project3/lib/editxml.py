import xml.etree.ElementTree as ET

path = "Y:/test.simscene.xml"
tree = ET.parse(path)
root = tree.getroot()
# print(root.tag)
# print(root.attrib)

def show_all_nodes():
    for index, level_1 in enumerate(root):
        print(index, level_1.tag, level_1.attrib)
        print("-"*10, " ↑ level 1 ↑", "-"*10)
    
        for index, level_2 in enumerate(level_1):
            print(index, level_2.tag, level_2.attrib)
            print("-"*10, "↑ level 2 ↑", "-"*10)
        
            for index, level_3 in enumerate(level_2):
                print(index, level_3.tag, level_3.attrib)
                print("-"*10, "↑ level 3 ↑", "-"*10, "\n")
                
                for index, level_4 in enumerate(level_3):
                    print(index, level_4.tag, level_4.attrib)
                print("-"*10, "↑ level 4 ↑", "-"*10, "\n")
        print("-*"*30, "\n"*2)


def modify(new_str, level1, level2, level3, level4):
    tag = root[level1][level2][level3][level4]
    tag.text = str(new_str)
    tree.write(path)

    """
    tag = root[2][0][1][0]
    print(tag.text)
    new_tag = str("500 30 5")
    tag.text = new_tag
    print(root[2][0][1][0].text)
    tree.write(path)
    '"""

# show_all_nodes()
modify("15555 0 95", 2, 0, 1, 0)
