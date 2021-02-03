from pyslvs import *
from pyslvs.metaheuristics import *

def collect_format(
                                expr: str,
                                input: list=[(0,2), (0,360)],
                                graph: tuple=((0, 1), (0, 2), (1, 3), (2, 3)),
                                placement: dict={0: (-70, -70, 10), 1:  (70, -70, 10)},
                                track_point: int=4,
                                pass_point: list=[(60.3, 118.12), (31.02, 115.62), (3.52, 110.62)],
                                cus={},
                                same={}
                               ) -> str: 
    format = {
        'expression': expr,
        'input': [input],
        'graph': graph,
        'placement': placement,
        'target': {track_point: pass_point},
        'cus': cus,
        'same': same,
        'upper': 100,
        'lower': 0,
    }
    return format


def settings():
    pass
    
    
def PMKS_expr(*args: VPoint) -> list :
    vp_list = []
    for vp in args:
        vp_list.append(vp)
    # print(vp_list)
    return vp_list
    
    
def mech_expr(*args: VPoint) -> str :
    mech_exprs = ""
    for vp in args:
        mech_expr = vp.expr()
        mech_exprs += mech_expr + "," + "\n"
    result = "M[" + "\n" + mech_exprs + "]"
    # print(result)
    return result


def algorithm_RGA(collection):
    planar = FMatch(collection)
    settings = {'max_gen': 10, 'report': 10}
    algorithm = ALGORITHM[AlgorithmType.RGA](planar, settings)
    result = algorithm.run()
    # history = algorithm.history()
    return result
    
    
def run() -> str:
    expr = PMKS_expr(
                            VPoint(["ground", "L1"], 0, 0, "green", 0, 0),
                            VPoint(["ground", "L2"], 0, 0, "green", 90, 0),
                            VPoint(["L1", "L3"], 0, 0, "green", 12.92, 32.53),
                            VPoint(["L2", "L3"], 0, 0, "green", 73.28, 67.97),
                            VPoint(["L3"], 0, 0, "green", 33.3, 66.95),
                            )
    four_bar = collect_format(expr)
    result = algorithm_RGA(four_bar)
    print(result)
    # print(f"four_bar: {four_bar}")

    
if __name__ == "__main__":
    # print(collect_format(expr)['expression'])
    run()
    
