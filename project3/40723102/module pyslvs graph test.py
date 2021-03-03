'''
from pyslvs import example_list, parse_vpoints, t_config, expr_solving

# Get example with name
expr, inputs = example_list("Jansen's linkage (Single)")
# Parse the mechanism expression into a list of joint data
vpoints = parse_vpoints(expr)
# Config joint data and control data for the solver
exprs = t_config(vpoints, inputs)
# Solve the position
result = expr_solving(exprs, vpoints, {pair: 0. for pair in inputs})
# Get the result from joint 7
x, y = result[2]
print(x,y)
# print(result)  # -43.170055 -91.753226
print(len(result))




a = [1,2]
b = (1,2)
print(type(a))
print(type(b))




def add (a, b):
    num1 = a
    num2 =b
    result = num1 + num2
    # print(result)
    return result
    
print(add(1, 2))



#####contracted_link_assortment######
# import pyslvs.graph.Graph as gh
import pyslvs.graph as gh
from pyslvs.graph import Graph as G

graph1 = ((0, 1), (0, 2), (2, 3), (3, 1), (0, 4), (4, 5), (5, 1))
graph2 = [(0, 1), (0, 4), (0, 5), (1, 2), (1, 3), (2, 4), (3, 5), (3, 7), (4, 6), (6, 7)]
graph3 = [(0, 2), (0, 3), (1, 2), (1, 3), (0, 4), (4, 5), (5, 3), (1, 6), (6, 7), (7, 2)]


#print(type(graph))
print(type(  G(graph3)  )  )

assort = gh.contracted_link_assortment(G(graph3))
print(assort)

#####labeled_enumerate######
import pyslvs.graph as gh
from pyslvs.graph import Graph as G

graph1 = [(0, 1), (1, 2), (2, 3), (0, 3)]
graph2 = [(0, 1), (0, 2), (2, 3), (3, 1), (0, 4), (4, 5), (5, 1)]
graph3 = [(0, 2), (0, 3), (1, 2), (1, 3), (0, 4), (4, 5), (5, 3), (1, 6), (6, 7), (7, 2)]
graph4 =[(0, 1), (0, 4), (0, 5), (1, 2), (1, 3), (2, 4), (3, 5), (3, 7), (4, 6), (6, 7)]


#print(type(graph))
print(type(  G(graph3)  )  )

result  = gh.labeled_enumerate(G(graph3))
print(result)


#####is_planar######
import pyslvs.graph as gh
from pyslvs.graph import Graph as G

graph1 = [(0, 1), (1, 2), (2, 3), (0, 3)]
graph2 = [(0, 1), (0, 2), (2, 3), (3, 1), (0, 4), (4, 5), (5, 1)]
graph3 = [(0, 2), (0, 3), (1, 2), (1, 3), (0, 4), (4, 5), (5, 3), (1, 6), (6, 7), (7, 2)]
graph4 =[(0, 1), (0, 4), (0, 5), (1, 2), (1, 3), (2, 4), (3, 5), (3, 7), (4, 6), (6, 7)]


#print(type(graph))
print(type(  G(graph4)  )  )

result  =gh.is_planar(G(graph4))
print(result)

#####external_loop_layout()#####
import pyslvs.graph as gh
from pyslvs.graph import Graph as G,external_loop_layout

graph1 = [(0, 1), (1, 2), (2, 3), (0, 3)]
graph3 = [(0, 2), (0, 3), (1, 2), (1, 3), (0, 4), (4, 5), (5, 3), (1, 6), (6, 7), (7, 2)]
node_mode = bool
scale = 2.0


#print(type(graph))
print(type(  G(graph1)  )  )

result  =external_loop_layout(G(graph1), node_mode , scale)
print(result)

#####external_loop_layout()#####
from pyslvs.graph import *

graph1 = [(0, 1), (1, 2), (2, 3), (0, 3)]
graph3 = [(0, 2), (0, 3), (1, 2), (1, 3), (0, 4), (4, 5), (5, 3), (1, 6), (6, 7), (7, 2)]
node_mode = False  #False
scale = 1.0
print(node_mode)
print(type(True))
print(type(node_mode))


#print(type(graph))
print(type(  Graph(graph1)  )  )

result  =external_loop_layout(Graph(graph1), node_mode , scale)
print("node_mode: ", node_mode)
print(result)


   #####contracted_graph()#####
# import pyslvs.graph as py
# from pyslvs.graph import Graph as gh
from pyslvs.graph import *


# pyslvs.graph.link_assortment()            ----------------------------
# py.link_assortment()                                 三種匯入模式差別    
# link_assortment()                                    ----------------------------


graph1 = [(0, 1), (1, 2), (2, 3), (0, 3)]
graph2 = ((0, 1), (0, 2), (2, 3), (3, 1), (0, 4), (4, 5), (5, 1))

#print(type(graph))
#print(type(  G(graph1)  )  )

link_num = link_assortment(Graph(graph2))
# con_assort = contracted_link_assortment(Graph(graph2))
print(link_num)
# print(type(con_assort))
con_graph = contracted_graph(link_num)
print(con_graph)
print(type(con_graph))


  #####conventional_graph()#####
from pyslvs.graph import *
 
graph1 =  [(0, 1), (1, 2), (2, 3), (0, 3)]
link_num = link_assortment(Graph(graph1))
cg_list = contracted_graph(link_num)
c_j_list = contracted_link_assortment(Graph(graph1))
no_degenerate =1
 
conventional_graph = conventional_graph( cg_list ,c_j_list,)

print(conventional_graph)


#####link_synthesis()#####
from pyslvs.graph import *
 
nl = 6
nj = 7
link_syn = link_synthesis( nl , nj )
print(link_syn)



#####contracted_link_synthesis()#####
from pyslvs.graph import *

graph1 = ((0, 1), (0, 2), (2, 3), (3, 1), (0, 4), (4, 5), (5, 1))
link_num_list = link_assortment(Graph(graph1))
 
clk = contracted_link_synthesis(link_num_list)
print(clk)
##########################################
 
 
 
 
#####conventional_graph()#####
 from pyslvs.graph import *
type1= [4, 2]
type_2=[2,1,0,0]
cg_list = contracted_graph(type1)
print(cg_list)
c_j = type_2
answer = conventional_graph(cg_list, c_j)
print(answer)

#####Graph.has_cut_link()#####
from pyslvs.graph import *
g1 = Graph([(0, 1), (0, 4), (1, 5), (2, 3), (2, 4), (3, 5), (4, 5)])
g2 = Graph([(0, 2), (0, 4), (1, 3), (1, 4), (2, 5), (3, 5), (4, 5)])
g3 = Graph([(0, 1), (0, 2), (1, 4), (2, 5), (3, 4), (3, 5), (4, 5)])

result = Graph.has_cut_link(g3)
print(result )

#####Graph.has_triangle()#####
from pyslvs.graph import *
g3 = Graph([(0, 1), (0, 2), (1, 4), (2, 5), (3, 4), (3, 5), (4, 5)])
g4 = Graph([(0, 1), (0, 2), (1, 4), (4, 2), (2, 1), (3, 5), (4, 5)])
result = Graph.has_triangle(g4)
print(result )

#####Graph.is_connected()**########
from pyslvs.graph import *
g3 = Graph([(0, 1), (0, 2), (1, 4), (2, 5), (3, 4), (3, 5), (4, 5)])
g4 = Graph([(0, 1), (0, 2), (1, 4), (4, 2), (2, 1), (3, 5), (4, 0)])
without = -1 
result = Graph.is_connected(g3,without)
print(result )

#####Graph.is_isomorphic()#####
from pyslvs.graph import *
g1 = Graph([(0, 1), (0, 4), (1, 5), (2, 3), (2, 4), (3, 5), (4, 5)])
g2 = Graph([(0, 2), (0, 4), (1, 3), (1, 4), (2, 5), (3, 5), (4, 5)])
g3 = Graph([(0, 1), (0, 2), (1, 4), (2, 5), (3, 4), (3, 5), (4, 5)])

result = Graph.is_isomorphic(g1,g2)
result_1 =Graph.is_isomorphic(g1,g3) 
print(result ,result_1)

#####Graph.is_isomorphic_degree_code()#####
from pyslvs.graph import *
g1 = Graph([(0, 1), (0, 4), (1, 5), (2, 3), (2, 4), (3, 5), (4, 5)])
g2 = Graph([(0, 2), (0, 4), (1, 3), (1, 4), (2, 5), (3, 5), (4, 5)])
g3 = Graph([(0, 1), (0, 2), (1, 4), (2, 5), (3, 4), (3, 5), (4, 5)])

result = Graph.is_isomorphic_degree_code(g1,g2)
print(result)
#####Graph.is_isomorphic_vf2()#####
from pyslvs.graph import *
g1 = Graph([(0, 1), (0, 4), (1, 5), (2, 3), (2, 4), (3, 5), (4, 5)])
g2 = Graph([(0, 2), (0, 4), (1, 3), (1, 4), (2, 5), (3, 5), (4, 5)])
g3 = Graph([(0, 1), (0, 2), (1, 4), (2, 5), (3, 4), (3, 5), (4, 5)])

result = Graph.is_isomorphic_vf2(g1,g3)
print(result)

#####
from pyslvs.graph import *

n=1
result=Graph.neighbors(n)
print(result)


Graph.is_connected()
Graph.is_degenerate()

#new#
 ####Graph.add_edge()####
from pyslvs.graph import *

g1 = Graph([(0, 1), (1, 2), (2, 3), (0, 3)])
print("g1_origin: ", g1)
n1=2
n2=4
result = g1.add_edge(n1,n2)
print("g1_after: ", g1)
print(result)
print(type(result))
print("-"*50)

####Graph.add_vertices()####
from pyslvs.graph import *
g1 = Graph([(0, 1), (1, 2), (2, 3), (0, 3)])
print("g1_origin: ", g1)
vertices= [n1,n2]
result = g1.add_vertices(vertices)
print("g1_after: ", g1)
print(result)

 ####Graph.duplicate()####
from pyslvs.graph import *

g1 = Graph([(0, 1), (1, 2), (2, 3), (0, 3)])
vertices = [1,2]
times = 1
result = g1.duplicate(vertices,times)
print(result)

'''


#####Graph.is_isomorphic_degree_code()#####
from pyslvs.graph import *
g1 = Graph([(0, 1), (0, 4), (1, 5), (2, 3), (2, 4), (3, 5), (4, 5)])


result =is_planar(g1)
print(result)

















