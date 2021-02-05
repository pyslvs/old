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

g1=test()[0][0]
g2=test()[1][0]
result = Graph.is_isomorphic(g1,g2)#Determine whether it is isomorphic
print(f"Determine whether it is isomorphic: {result}")

