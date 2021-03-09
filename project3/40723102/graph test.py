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

print(f"ALL: {test(6)}",
    "-" * 80,  sep="\n")


###########
graph1=test(6)[0][0]
graph2=test(6)[1][0]

def isomorphic(graph1,graph2):
    #Determine whether it is isomorphic
    result = Graph.is_isomorphic(graph1,graph2)
    
    if result == True:
        print(f"Isomorphic Warning: The graphs are isomorphic.")
    else:
       pass
       


##錯誤未完全修正
def triangle(graph):
    #Determine  whether Graph has triangle
    for i in range(10):
        graph(i)= graph
        result1= Graph.has_triangle(graph)
        if result1== True:
            print(f"Triangle Warning: graph2 has triangle.")
        else:
            #print("YES")
            pass
    a = triangle(graph)
    return a

'''

def cutlink(graph1,graph2):
    result3= Graph.has_cut_link(graph1)
    result4= Graph.has_cut_link(graph2)
    if result3== True:
        print(f"Cut Link Warning: graph2 has cut link.")
    elif result4== True:
        print(f"Cut Link Warning: graph2 has cut link.")
    else:
        pass


def degenerate(graph1,graph2):
    result5= Graph.is_degenerate(graph1)
    result6= Graph.is_degenerate(graph2)
    if result5== True:
        print(f"Degenerate Warning: The graphs is degenerate.")
    elif result6== True:
        print(f"Degenerate Warning:  The graphs is degenerate.")
    else:
        pass

print(__name__)
'''
if __name__ == "__main__":
    isomorphic(graph1,graph2)
    triangle(graph)
    cutlink(graph1,graph2)
    degenerate(graph1,graph2)

