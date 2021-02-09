from pyslvs import *
from pyslvs.graph import *
from pyslvs.metaheuristics import *


class settings:
    def __init__(self, PMKSexpr, input, graph, placement, track_point, pass_point, cus={}, same={}):
        self.expr = PMKSexpr
        self.input = input
        self.graph = graph
        self.placement = placement
        self.track_point = track_point
        self.pass_point = pass_point
        self.cus = cus
        self.same = same
        self.collection = self.collection()
        
        
    def collection(self) -> dict:
        format = {
            'expression': self.expr,
            'input': [self.input],
            'graph': self.graph,
            'placement': self.placement,
            'target': {self.track_point: self.pass_point},
            'cus': self.cus,
            'same': self.same,
            'upper': 100,
            'lower': 0,
        }
        return format
        
    
def PMKS_expr(*args: VPoint) -> list:
    vp_list = []
    for vp in args:
        vp_list.append(vp)
    # print(vp_list)
    return vp_list
    
    
def mech_expr(*args: VPoint) -> str:
    mech_exprs = ""
    for vp in args:
        mech_expr = vp.expr()
        mech_exprs += mech_expr + "," + "\n"
    result = "M[" + "\n" + mech_exprs + "]"
    # print(result)
    return result


def algorithm_RGA(collection: settings.collection) -> str:
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
    
    # define the parameters
    input = [(0, 2), (0, 360)]
    graph = ((0, 1), (0, 2), (1, 3), (2, 3))
    placement = {0: (-70, -70, 10), 1: (70, -70, 10)}
    track_point = 4
    pass_point = [(60.3, 118.12), (31.02, 115.62), (3.52, 110.62)]
    
    
    set = settings(expr, input, graph, placement, track_point, pass_point)
    four_bar = set.collection
    # print(type(four_bar))
    result = algorithm_RGA(four_bar)
    print(f"The expression of synthesis result:\n {result}")
    # print(f"four_bar: {four_bar}")

    
if __name__ == "__main__":
    run()
    # print(set.collection())
    
