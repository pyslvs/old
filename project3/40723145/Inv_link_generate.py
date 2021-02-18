import pythoncom
import win32com.client
import win32api
import os


class inv:
    def __init__(self):
        """     Initialize the settings of the Inventor     """
        self.invApp = win32com.client.Dispatch("Inventor.Application")
        self.invApp.Visible = True
        self.invApp.SilentOperation = True

    def open(self, partName: str):
        """     Open Part     """
        try:
            self.oDoc = self.invApp.Documents.Open(partName)
        except:
            print("The part opened error !!")
        
    def parameter(self, **kwargs):
        """     Modify the dimension of the part     """
        for key, value in kwargs.items():
            # print(key, value)
            try:
                par = self.oDoc.ComponentDefinition.Parameters.Item(str(key))
            # Convert the unit from "cm" to "mm"
                par.Value = value * (10**-1)
            except:
                print("The parameter doesn't include in part.")
                break
            
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
# inv.open('Y:/pyslvs.io/project3/40723145/binary_link.ipt')
inv.open('C:/kmol/project code/inventorAPI/ternary_link.ipt')
# inv.parameter(center_length=250, diameter=50, hole=15)
inv.parameter(center_length=200, hole=20)



