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
        
    def get_vpoints(self) -> list([VPoint]):
        graph = self.structural_synthesis()
        # print("gragh: ", graph)
        pos = self.pos
        list_vpoints = graph2vpoints(graph[0][0], pos)
        print(list_vpoints)
        print(self.expr)
        return list_vpoints
        
    def collection(self) -> dict:
        format = {
        # 'expression': self.expr,
        'expression': self.get_vpoints(),
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
    ### define the parameters ###
    
    set = settings(num_links, pos, expr, input, placement, track_point, pass_point)
    four_bar = set.collection
    # print(type(four_bar))
    result = algorithm_RGA(four_bar)
    print(f"The expression of synthesis result:\n {result}")
    # print(f"four_bar: {four_bar}")


def structural_synthesis(nl, j2=0, dof=1):
    # [dof,J2]=[1,0]
    # nl=6 #Input
    nj=( dof-3*(nl-1)+j2 )/-2
    type1= link_synthesis(nl , nj)
    #print(type(type1))

    cg_list =contracted_graph(type1[0]) 
    c_j_list=contracted_link_synthesis(type1[0])

    L=[]
    for  x in range(3):
        answer = conventional_graph(cg_list, c_j_list[x])
        if answer == []:
            continue
        L.append(answer)
    #print(L)
    return L  ##return graph
    
    
def test_graph2vpoints(graph, pos):
    graph1 = structural_synthesis(nl=6)[0][0]
    graph2 = structural_synthesis(nl=6)[1][0]
    
    # print(graph1)
    pos = {0: (12.3, 15.6), 1: (15.2, 10.23), 2: (15.2, 10.23), 3: (15.2, 10.23), 4: (15.2, 10.23), 5:(15.2, 10.23), 6:(15.2, 10.23)}
    # print(pos.keys())
    # print(pos.values())
    g2v = graph2vpoints(graph1, pos)
    print(g2v)
    print(type(g2v[0]))
    return g2v
    
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
    
    
    
