from pyslvs.graph import *
for i in range(10):
    graph=graph(i)
print (graph)


def cutlink(graph):
    result3= Graph.has_cut_link(graph)
    if result3== True:
        print(f"Cut Link Warning: graph2 has cut link.")
    else:
        pass
    a = cutlink(graph)
    return a
    
    
def cutlink(graph):
    result4= Graph.has_cut_link(graph)
    if result4== True:
        print(f"Cut Link Warning: graph2 has cut link.")
    else:
        pass