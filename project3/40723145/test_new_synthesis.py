from pyslvs import *
from pyslvs.graph import *
from pyslvs.metaheuristics import *
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
        node = []
        grounded_gph = []
        # print(graph_altas)
        for graph in graph_altas:   # Get the whole types of kinematic chains.
            assign_ground = labeled_enumerate(graph)
            # print(assign_ground, "\n")
            for gph in assign_ground:   # Get the unisomorphic  kinematic chains after asssigning the grounded link.
                # print(gph)
                grounded_node = []
                grounded_gph.append(gph[1])
                node.append([gph[0]])
        # print(node, "\n")
        # print(f"The specialization chains after assign the grounded link:\n {grounded_gph}")
        
        piston_gph = []
        for ground_index, graph in enumerate(grounded_gph):  # Get the whole types of kinematic chains.
            assign_piston = labeled_enumerate(graph)
            # print(assign_piston)
            for index, gph in enumerate(assign_piston):
                # print(gph)
                if piston_gph == []:
                    piston_gph.append(gph[1])
                    node[ground_index].append(gph[0])
                elif gph[1].is_isomorphic(piston_gph[:][0]) == True:
                    continue
                else:
                    piston_gph.append(gph[1])
                    node[ground_index].append(gph[0])
            # print("\n")
        print(node)
        # print(piston_gph[:])
        # print(len(piston_gph))
        
        swingarm_gph = []
        for graph in piston_gph:
            assign_arm = labeled_enumerate(graph)
            for gph in assign_arm:
                # print(gph)
                if swingarm_gph == []:
                    swingarm_gph.append(gph[1])
                elif gph[1].is_isomorphic(swingarm_gph[:][0]) == True:
                    continue
                else:
                    swingarm_gph.append(gph[1])
        print(swingarm_gph[3])
        print(type(swingarm_gph[3]))
        print(len(swingarm_gph))
        
        
    def test_spe(graph_altas):
        g = []
        for i in rangle(len(self.nl)):
            for graph in graph_altas:
                assignment = labeled_enumerate(graph)
                for gph in assignment:
                 g.append(gph[1])   


def test_neighbor(graph_altas):
    g1 = (0, Graph([(2, 3), (3, 1), (4, 5), (5, 1)]))
    g2 = (2, Graph([(0, 1), (3, 1), (0, 4), (4, 5), (5, 1)]))
    ga = graph_altas[0].neighbors(g1[0])
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

    
if __name__ == "__main__":
    mech= CDMD(6, 7)
    graph_altas = mech.number_synthesis()
    spe = mech.specialization(graph_altas)
    
    # graph1 = graph_altas[0]
    # print(graph1)
    # print(graph_altas, "\n")
    
    
    
    