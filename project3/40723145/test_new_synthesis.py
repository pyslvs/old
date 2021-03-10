from pyslvs import *
from pyslvs.graph import *
from pyslvs.metaheuristics import *
import os.path


class CDMD:
    def __init__(self):
        # self.mech_expr = mech_expr
        pass
        
    def number_synthesis(self, nl, nj):
        # link synthesis(return link assortment) -> contracted graph + contracted link synthesis(return contracted link assorment) -> conventional graph
        link_assortment_list = link_synthesis(nl, nj)
        contracted_link_assortment_list = contracted_link_synthesis(link_assortment_list[0])
        contracted_graph_list = contracted_graph(link_assortment_list[0])
        
        graph_altas = []
        for contracted_link_assortment in contracted_link_assortment_list:
            conventional_g =  conventional_graph(contracted_graph_list, contracted_link_assortment, no_degenerate=1)
            if conventional_g == []:
                continue
            else:
                graph_altas.append(conventional_g[0])
        return graph_altas
        
    def specialization(self, graph_altas):
        # print(graph_altas)
        for graph in graph_altas:
            print(graph)
            d = graph.duplicate((0, 1), 1)
            print(d)
            print("-" * 20)
        
        
        
        
def test_edges_view(g1):
    empty = []
    # g1 = Graph([(0, 1), (0, 2), (2, 3), (3, 1), (0, 4), (4, 5), (5, 1)])
    ev = edges_view(g1)
    for i in ev:
        empty.append(i[1])
    # print(empty)
    """
    print(next(ev))
    print(next(ev))
    print(next(ev))
    print(next(ev))
    print(next(ev))
    print(next(ev))
    print(next(ev))
    """
    # Test to convert the data type
    # print(Graph(empty))
    

def mark_num():
    gg = Graph([(0, 1), (0, 2), (2, 3), (3, 1), (0, 4), (4, 5), (5, 1)])
    em = labeled_enumerate(gg)
    labeled_gg = em[0][1]
    em_label = labeled_enumerate(labeled_gg)
    print(em, "\n")
    print(em_label)
    
    
    
def test_Watt(graph1):
    
    chains1 = []
    chains2 = []
    edge_expression = edges_view(graph1)
    for edge in edge_expression:
        chains1.append(edge[1])
        chains2.append(edge[1])
    # print(chains)
    
    
    """
    for element in chains1:
        chains.remove(element)
    """
    chains1.pop(0)
    chains2.pop(2)
    print(chains1, link_assortment(Graph(chains1)))
    '''
    check_isomo = Graph(chains2).is_isomorphic(Graph(chains1))
    print(f"{chains1}\n {chains2}\n isomorphic: {check_isomo}")
    '''
    
    
if __name__ == "__main__":
    mech= CDMD()
    graph_altas = mech.number_synthesis(6, 7)
    
    
    graph1 = graph_altas[0]
    # print(graph1)
    # print(graph_altas, "\n")
    
    mark_num()
    # test_Watt(graph1)
    
    