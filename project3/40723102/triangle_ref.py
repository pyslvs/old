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


# 輸入一個graph
def single_triangle(graph):
    check_triangle = graph.has_triangle()
    if check_triangle == True:
            print(f"Triangle Warning: {graph} has triangle.")
    else:
        print("OK")
            
    
# 輸入一個graph的list檢查裡面所有的graph
def multiple_triangle(graph_list):
    for graph in graph_list:
        check_triangle = graph[0].has_triangle()
        if check_triangle == True:
            print(f"Triangle Warning: {graph} has triangle.")
        else:
            print("OK")


if __name__ == "__main__":
    graph1=test(6)[0][0]
    graph2=test(6)[1][0]
    graph_list = test(6)
    print(test(6))
    
    single_triangle(graph1)
    multiple_triangle(graph_list)

