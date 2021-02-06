import pythoncom
import win32com.client
import win32api
import os


class inv:
    def __init__(self):
        """     Initialize the settings of the Invertor     """
        self.invApp = win32com.client.Dispatch("Inventor.Application")
        self.invApp.Visible = True
        self.invApp.SilentOperation = True
    

    def open(self, partName: str):
        """     Open Inventor     """
        self.oDoc = self.invApp.Documents.Open(partName)
        
        
    def parameter(self, **kwargs):
        """     Modify the dimension of the part     """
        for key, value in kwargs.items():
            # print(key, value)
            par = self.oDoc.ComponentDefinition.Parameters.Item(str(key))
            par.Value = value
            
        
    def update(self):
        """     Update the dimension of the part     """
        is_update = self.oDoc.Update()
        if is_update == None:
            print("The part is updated.")
        else:
            print("Fail !")


    def save_as(self, newfilename: str):
        """     Save as the new part     """
        self.Doc.SaveAs(newfilename)
        
        
    def close(self):
        """     Close Inventor     """
        self.invApp.Quit()
        


inv = inv()
inv.open('Y:/pyslvs.io/project3/40723145/test.ipt')
inv.parameter(center_length=20, diameter=5)
inv.update()




