from pyslvs.graph import *

 
def test():
    #dof=3*(NL-1)-2*(J1)-J2
    #nl=NL=Number of links.
    #nj=J1=Number of joints. 
    ##J2=Two degree of freedom

    [dof,J2]=[1,0]
    nl=6 #Input
    nj=( dof-3*(nl-1)+J2 )/-2
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
    return L

print(f"ALL: {test()}",
    "-" * 80,
    f"第2維: {test()[0][0]}",
    sep="\n")


######修改######
graph1=test()[0][0]
graph2=test()[1][0]

def isomorphic(graph1,graph2):
    #Determine whether it is isomorphic
    result = Graph.is_isomorphic(graph1,graph2)
    
    if result == True:
        print(f"Isomorphic Warning: The graphs are isomorphic.")
    else:
       pass
       
isomorphic(graph1,graph2)#呼叫函式


def triangle(graph1,graph2):
    #Determine  whether Graph has triangle
    result1= Graph.has_triangle(graph1)
    result2= Graph.has_triangle(graph2)
    if result1== True:
        print(f"Triangle Warning: graph2 has triangle.")
    elif result2== True:
        print(f"Triangle Warning: graph2 has triangle.")
    else:
        #print("YES")
        pass
triangle(graph1,graph2)#呼叫函式

