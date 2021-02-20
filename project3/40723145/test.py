from pyslvs import *
from pyslvs.graph import *
from pyslvs.metaheuristics import *


class settings:
    def __init__(self, num_links, pos, PMKSexpr, input, placement, track_point, pass_point, cus={}, same={}):
        self.num_links = num_links
        self.pos = pos
        self.expr = PMKSexpr
        self.input = input
        self.graph = graph
        self.placement = placement
        self.track_point = track_point
        self.pass_point = pass_point
        self.cus = cus
        self.same = same
        self.collection = self.collection()
        # self.graph = self.graph()
        
    def test(self):
        print("placement: ", self.placement)
        print("type_placement: ", type(self.placement))
        print(self.placement.keys())
        print(type(self.placement.keys()))
        
    def structural_synthesis(self, j2=0, dof=1):
        nj=(dof - 3*(self.num_links - 1) + j2) / (-2)
        link_list= link_synthesis(self.num_links , nj)
        # print(type(link_list))
        # print(link_list)

        contracted_graph_list =contracted_graph(link_list[0]) 
        contracted_link_list=contracted_link_synthesis(link_list[0])
        # print("contracted_graph_list: ", contracted_graph_list)
        # print("contracted_link_list: ", contracted_link_list)
        
        list_graphs=[]
        for x in range(len(contracted_link_list)):
            answer = conventional_graph(contracted_graph_list, contracted_link_list[x])
            if answer == []:
                continue
            list_graphs.append(answer)
        #print(list_graphs)
        return list_graphs
        
    def graph2vpoints(self) -> list([VPoint]):
        graph = self.structural_synthesis()
        # print("gragh: ", graph)
        pos = self.pos
        list_vpoints = graph2vpoints(graph[0][0], pos, grounded=0, cus=self.cus)
        print(list_vpoints)
        print(self.expr)
        return list_vpoints
        
    def collection(self) -> dict:
        # The relative function "FMatch", The FMatch class needs the each parameters.
        format = {
        # 'expression': self.expr,
        'expression': self.graph2vpoints(),
        'input': [self.input],
        'graph': self.graph,
        'placement': self.placement,
        'target': {self.track_point: self.pass_point},
        # 'cus': self.cus,
        # 'same': self.same,
        'upper': 100,
        'lower': 0,
        }
        return format
        
    
def PMKS_expr(list_vpoints: list([VPoint])) -> list:
    vp_list = []
    for vp in list_vpoints:
        vp_list.append(vp)
    # print(vp_list)
    return vp_list
    
    
def mech_expr(list_vpoints: list([VPoint])) -> str:
    mech_exprs = ""
    for vp in list_vpoints:
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
    track_point = 4
    pass_point = [(60.3, 118.12), (31.02, 115.62), (3.52, 110.62)]
    cus = {4: 2}
    ### define the parameters ###
    
    set = settings(num_links, pos, expr, input, placement, track_point, pass_point, cus)
    set.graph2vpoints()
    four_bar = set.collection
    # print(type(four_bar))
    result = algorithm_RGA(four_bar)
    print(f"The expression of synthesis result:\n {result}")
    # print(f"four_bar: {four_bar}")

    
if __name__ == "__main__":
    run()
    # print(set.collection())
    # print(structural_synthesis(nl=6))
    # g2v = test_graph2vpoints()
    # print(PMKS_expr(g2v))
    

"""
    tt = Graph(((2,2), (3, 3)))    #Graph(Tuple[Tuple[int, int], ...])
    print(tt)
    print(type(tt))
"""
    
    
    
