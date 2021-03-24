from pyslvs import *
from pyslvs.graph import *
from pyslvs.metaheuristics import *
import os.path


class settings:
    def __init__(self, num_links, pos, input, placement, pass_point, cus={}, same={}):
        self.num_links = num_links
        self.pos = pos
        # self.expr = PMKSexpr
        self.input = input
        # self.graph = graph
        self.placement = placement
        self.pass_point = pass_point
        self.cus = cus
        self.same = same
        
    def structural_synthesis(self, j2=0, dof=1) -> list([Graph]):
        nj = (dof - 3*(self.num_links - 1) + j2) / (-2)
        link_list = link_synthesis(self.num_links, nj)
        # print(type(link_list))
        # print(link_list)

        contracted_graph_list = contracted_graph(link_list[0]) 
        contracted_link_list = contracted_link_synthesis(link_list[0])
        # print("contracted_graph_list: ", contracted_graph_list)
        # print("contracted_link_list: ", contracted_link_list)
        
        list_graphs = []
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
        list_vpoints = graph2vpoints(graph[0][0], self.pos, grounded=0, cus=self.cus)
        # print(self.expr)
        # print(list_vpoints, "\n")
        return list_vpoints
        
    def cus_vpoints(self, index, links, type_int, angle, x, y):
        list_vpoints = self.graph2vpoints()
        cus_joint = list_vpoints[index].slider_joint(links, type_int, angle, x, y)
        list_vpoints[index] = cus_joint
        return list_vpoints
        
    def collection(self) -> dict:
        # The relative function "FMatch", The FMatch class needs the each parameters.
        format = {
        'expression': self.graph2vpoints(),
        """
        'expression': [
        VPoint(["ground", "L1"], 0, 0, "green", 0, 0),
        VPoint(["ground", "L2"], 0, 0, "green", 90, 0),
        VPoint(["L1", "L3"], 0, 0, "green", 12.92, 32.53),
        VPoint(["L2", "L3"], 0, 0, "green", 73.28, 67.97),
        VPoint(["L3"], 0, 0, "green", 33.3, 66.95),
        ],
        """
        'input': [self.input],
        # 'graph': self.graph,
        'placement': self.placement,
        'target': self.pass_point,
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
    # print(set.structural_synthesis()[0][0])
    # print("ssssss: ", set.graph2vpoints())
    four_bar = set.collection()
    # print(type(four_bar))
    mech_expr = algorithm_RGA(four_bar)
    # print(f"The expression of synthesis result:\n {result}")
    return mech_expr


def synthesis_import_test():
    filename = os.path.basename(__file__)
    return filename + " import successfully !"
    

if __name__ == "__main__":
    _run()
    # print(_run(), "\n")
    # print(synthesis_import_test())
    # print(set.collection())
    
    
    
