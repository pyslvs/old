from pyslvs import *
from pyslvs.graph import *
from pyslvs.metaheuristics import *
from random import choice
import os.path



class CDMD:
    def __init__(self, nl, nj):
        # self.mech_expr = mech_expr
        self.nl = nl
        self.nj = nj
        
        
    def number_synthesis(self):
        # link synthesis(return link assortment) -> contracted graph + contracted link synthesis(return contracted link assorment) -> conventional graph
        link_assortment_list = link_synthesis(self.nl, self.nj)
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
        nodes_set = []
        for kc in graph_altas:
            kc_nodes = []
            for as_first in labeled_enumerate(kc):
                first_nodes = []
                first_nodes.append(as_first[0])
                print("first: ", as_first)
                for as_second in labeled_enumerate(as_first[1]):
                    second_nodes = [as_first[0]]
                    if len(kc.neighbors(as_second[0])) == 2:
                        second_nodes.append(as_second[0])
                        print("second: ", as_second)
                        # print(second_nodes)
                    else: continue
                    for as_third in labeled_enumerate(as_second[1]):
                        third_nodes = [as_first[0], as_second[0]]
                        # print("tttttttttttttttttt: ", as_third)
                        if len(kc.neighbors(as_third[0])) == 2:
                            third_nodes.append(as_third[0])
                            kc_nodes.append(third_nodes)
                            print("third: ", as_third)
                            # print(third_nodes)
                        else:
                            nb_second = kc.neighbors(as_second[0])
                            for num in nb_second:
                                # three conditions:
                                # (1) The number isn't as_third node because of the relation of adjacency nodes, then we want to get the excluded node. 
                                # (2) The as_third node must is the as_second neighbor nodes.
                                # (3) The as_third node can't be repeated.
                                if num != as_third[0] and as_third[0] in nb_second and as_third[0] not in third_nodes:
                                    # print(num)
                                    third_nodes.append(num)
                                    kc_nodes.append(third_nodes)
            print(kc_nodes)
            nodes_set.append(kc_nodes)
            print("-"*40)
        print(nodes_set)
        # ----------------------------------------------------------------------------------------------------------------------------#
        """
        entirety = [i for i in range(self.nl)]
        for kc_nodes in nodes_set:
            for nodes in kc_nodes:
                # print(nodes)
                if nodes[0] in entirety and nodes[1] in entirety and nodes[2] in entirety:
                    cp = [j for j in range(self.nl) if j != nodes[0] and j != nodes[1] and j != nodes[2]]
                    
                    for times in range(len(cp)):
                        num = choice(cp)
                        if node[len(cp) + times] != num:
                            nodes.append(num)
                            print(nodes)
                    
                    
                    
                    new_altas = nodes + cp
                    print(new_altas)
                    
                    print("-"*50)
        """


def test_isomorphic():
        #g(link as node)
        g_origin = Graph([(0, 1), (0, 2), (2, 3), (3, 1), (0, 4), (4, 5), (5, 1)])
        g0 = Graph([(2, 3), (3, 1), (4, 5), (5, 1)])
        g1 = Graph([(4, 5), (4, 0), (0, 2), (2, 3)])
        g2 = Graph([(0, 1), (3, 1), (0, 4), (4, 5), (5, 1)])
        g3 = Graph([(0, 1), (0, 2), (0, 4), (4, 5), (5, 1)])
        g4 = Graph([(0, 1), (0, 2), (2, 3), (3, 1), (5, 1)])
        g5 = Graph([(0, 1), (0, 2), (2, 3), (3, 1), (0, 4)])
        
        g23 = Graph([(0, 1), (0, 4), (4, 5), (5, 1)])
        g234 = Graph([(0, 1), (5, 1)])
        g24 =  Graph([(0, 1), (3, 1), (5, 1)])
        
        le_g_origin = labeled_enumerate(g_origin)
        le_g2 = labeled_enumerate(g2)
        le_g24 = labeled_enumerate(g24)
        print(le_g_origin, "\n")
        print(le_g2, "\n")
        print(le_g24)
        
        nb = g_origin.neighbors(4)
        print(nb)
        
        ism = g0.is_isomorphic(g3)
        # print(ism)
        
        
def test_similar():
    g = Graph([(2, 3), (3, 1), (4, 5), (5, 1)])
    g2 = Graph([(0, 1), (0, 2), (2, 3), (3, 1), (0, 4), (4, 5), (5, 1)])
    la = link_assortment(g2)
    cla = contracted_link_assortment(g2)
    print(la)
    print(cla)
    
def test_neighbor(graph_altas):
    g1 = (0, Graph([(2, 3), (3, 1), (4, 5), (5, 1)]))
    g2 = (2, Graph([(0, 1), (3, 1), (0, 4), (4, 5), (5, 1)]))
    ga = graph_altas[0].neighbors(g2[0])
    print(ga)        


def test_external_loop_layout():
    g1 = Graph([(0, 1), (0, 2), (2, 3), (3, 1), (0, 4), (4, 5), (5, 1)])
    ell = external_loop_layout(g1, True)
    print(ell)      
    
    
def get_vpoints():
    sixbar1 = Graph([(0, 1), (0, 2), (2, 3), (3, 1), (0, 4), (4, 5), (5, 1)])
    pos = {
        0: (0, 0),
        1: (20, 30),
        2: (25, -10),
        3: (53, 32),
        4: (50, -33),
        5: (10, -66), 
        6: (46, -91)
    }
    vpoints = graph2vpoints(sixbar1, pos)
    print(vpoints)
    vlinks = get_vlinks(vpoints)
    # print(vlinks)

    
if __name__ == "__main__":
    mech= CDMD(6, 7)
    graph_altas = mech.number_synthesis()
    mech.specialization(graph_altas)
    
    # graph1 = graph_altas[0]
    # print(graph1)
    # print(graph_altas, "\n")
    
    # get_vpoints()
    # mech.test_spe(graph_altas)
    # mech.test_spe2(graph_altas)
    # test_neighbor(graph_altas)
    
    # mech.test_spe3(graph_altas)
    # test_isomorphic()
    
    
    