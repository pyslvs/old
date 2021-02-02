from pyslvs import *

def collect_format(expr: str,
                               input=None,
                               graph=None,
                               placement=None,
                               target=None,
                               cus=None,
                               same=None) -> str: 
    format = {
        # 'expression':("M[" + "\n" + expr + "]"),
         'expression':("M[" + expr + "]"),
        'input': input,
        'graph': graph,
        'placement':placement,
        'target':target,
        'cus':cus,
        'same':same
    }
    return format


def expression():
    str_expr = ""
    vp1 = VPoint(["ground", "L1"], 0, 0, "green", 0, 0)
    vp2 = VPoint(["ground", "L2"], 0, 0, "green", 90, 0)
    vp3 = VPoint(["L1", "L3"], 0, 0, "green", 12.92, 32.53)
    vp4 = VPoint(["L2", "L3"], 0, 0, "green", 73.28, 67.97)
    vp5 = VPoint(["L3"], 0, 0, "green", 33.3, 66.95)
    vp_list = [vp1, vp2, vp3, vp4, vp5]
    for vp in vp_list:
        vp_expr = vp.expr()
        # print(vp_expr)
        # str_expr += vp_expr + "," + "\n"
        str_expr += vp_expr + ","
    return str_expr
    

def test_expr():
    vp1 = VPoint(["ground", "L1"], 0, 0, "green", 0,0)
    vp1_expr = vp1.expr()
    print(f"vp1: {vp1}",
             f"vp1_expr: {vp1_expr}",
             sep='\n')
            
    
if __name__ == "__main__":
    # test_expr()
    # print(expression())
    expr = expression()
    # print(collect_format(expr)['expression'])
    print(collect_format(expr))
    