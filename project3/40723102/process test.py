
from pyslvs.graph import *
 
nl,nj = [6,7]

type1= link_synthesis(nl , nj)
print(type1)

cg_list = contracted_graph(type1[0])
c_j_list=contracted_link_synthesis(type1[0])
print(c_j_list)
#print(c_j_list[0][0])
# c_j_list = contracted_link_assortment(type1)
answer = conventional_graph(cg_list, c_j_list[2])
print(answer)


########add for迴圈#########
from pyslvs.graph import *
 
nl,nj = [6,7]
type1= link_synthesis(nl , nj)
print(type1)

cg_list =contracted_graph(type1[0]) 
c_j_list=contracted_link_synthesis(type1[0])


for  x in range(3):
    answer=conventional_graph(cg_list, c_j_list[x])
    print(x,c_j_list[x],answer)
    
    
#########add L=[]##########
from pyslvs.graph import *

nl=6
nj=7
type1= link_synthesis(nl , nj)
print(type1)

cg_list =contracted_graph(type1[0]) 
c_j_list=contracted_link_synthesis(type1[0])

L=[]
for  x in range(3):
    answer = conventional_graph(cg_list, c_j_list[x])
    L.append(answer)
print(L)

##### add dof equation#####
from pyslvs.graph import *
 
#dof=3*(NL-1)-2*(J1)-J2
#nl=NL=Number of links.
#nj=J1=Number of joints. 
##J2=Two degree of freedom

[dof,J2]=[1,0]
nl=6 #Input
nj=( dof-3*(nl-1)+J2 )/-2
type1= link_synthesis(nl , nj)
print(type1)


cg_list =contracted_graph(type1[0]) 
c_j_list=contracted_link_synthesis(type1[0])

L=[]
for  x in range(3):
    answer = conventional_graph(cg_list, c_j_list[x])
    L.append(answer)
print(L)


##### add def#####

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
    print(type1)


    cg_list =contracted_graph(type1[0]) 
    c_j_list=contracted_link_synthesis(type1[0])

    L=[]
    for  x in range(3):
        answer = conventional_graph(cg_list, c_j_list[x])
        L.append(answer)
    #print(L[0],L[2])
    return L
    
print((test())

##### add Determine whether it is isomorphic#####

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

#####  Determine  whether Graph has triangle#####
from pyslvs.graph import *
import tkinter
from tkinter import messagebox 
 
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



def isomorphic():
    #Determine whether it is isomorphic
    g1=test()[0][0]
    g2=test()[1][0]
    result = Graph.is_isomorphic(g1,g2)
    
    if result:
        root = tkinter .Tk()
        root.withdraw()#隱藏視窗
        tkinter.messagebox.showerror('Isomorphic Error','Graph.is isomorphic.')
    else:
        root = tkinter .Tk()
        root.withdraw()#隱藏視窗
        tkinter.messagebox.showinfo('Isomorphic warning','Graph.is not isomorphic.')
print(isomorphic())


    
def triangle():
    #Determine  whether Graph has triangle
    g1=test()[0][0]
    g2=test()[1][0]
    result1= Graph.has_triangle(g1)
    result2= Graph.has_triangle(g2)
    if result1:
        root = tkinter .Tk()
        root.withdraw()#隱藏視窗
        tkinter.messagebox.showerror('Tiangle Error','g1 hatriangle.')
    elif result2:
        root = tkinter .Tk()
        root.withdraw()#隱藏視窗
        tkinter.messagebox.showerror('Triangle Error','g2 has triangle.')
    else:
        root = tkinter .Tk()
        root.withdraw()#隱藏視窗
        tkinter.messagebox.showinfo('Triangle warning','g1&g2 do not have triangles.')
print(triangle())


#########修改Graph has triangle######
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


