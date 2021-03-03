from pyslvs.graph import *

 
def test(nl):
    #dof=3*(NL-1)-2*(J1)-J2
    #nl=NL=Number of links.
    #nj=J1=Number of joints. 
    ##J2=Two degree of freedom

    [dof,J2]=[1,0]
    # nl=6 #Input
    nj=( dof-3*(nl-1)+J2 )/-2
    type1= link_synthesis(nl , nj)
    #print(type(type1))

    cg_list =contracted_graph(type1[0]) 
    c_j_list=contracted_link_synthesis(type1[0])

    Graph_List=[]
    for  x in range(3):
        answer = conventional_graph(cg_list, c_j_list[x])
        if answer == []:
            continue
        Graph_List.append(answer)
    #print(L)
    return Graph_List


def isomorphic(graph1,graph2):
    #Determine whether it is isomorphic
    result = Graph.is_isomorphic(graph1,graph2)
    
    if result == True:
        print(f"Isomorphic Warning: The graphs are isomorphic.")
    else:
       pass


def multiple_triangle(graph_list):
    #Determine  whether Graph has triangle
    for graph in graph_list:
        check_triangle=graph[0].has_triangle()
    if check_triangle== True:
        print(f"Triangle Warning: {graph} has triangle.")
    else:
        #pass
        print("YES")


def multiple_cutlink(graph_list):
    for graph in graph_list:
        check_cutlink=graph[0].has_cut_link()
    if check_cutlink== True:
        print(f"Cut Link Warning: {graph} has cut link.")
    else:
        #pass
        print("YES1")


def multiple_degenerate(graph_list):
    for graph in graph_list:
        check_degenerate=graph[0].is_degenerate()
    if check_degenerate== True:
        print(f"Degenerate Warning: {graph} is degenerate.")
    else:
        #pass
        print("YES2")


def multiple_isplanar(graph_list):
    for graph in graph_list:
        check_isplanar=is_planar(graph[0])
    if check_isplanar== True:
        print("YES3")
        #pass
    else:
        print(f"Degenerate Warning: {graph} is degenerate.")


if __name__ == "__main__":
    graph1=test(6)[0][0]
    graph2=test(6)[1][0]
    graph_list=test(6)
    print(test(6))
    
    isomorphic(graph1,graph2)
    multiple_triangle(graph_list)
    multiple_cutlink(graph_list)
    multiple_degenerate(graph_list)
    multiple_isplanar(graph_list)