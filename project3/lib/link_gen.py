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
                print(f"\"{key}\" is not the parameter in part")
                break
            
        is_update = self.oDoc.Update()
        if is_update == None:
            print("The part is updated.")
        else:
            print("Fail !")

    def save_as(self, newfilename: str):
        """     Save as the new part     """
        self.oDoc.SaveAs(newfilename)
        
    def close(self):
        """     Close Inventor     """
        self.invApp.Quit()


def link_gen_import_test():
    filename = os.path.basename(__file__)
    return filename + " import successfully !"


if __name__ == "__main__":
    inv = inv()

    """
    inv.open('Y:/pyslvs.io/project3/40723145/binary_link.ipt')
    inv.parameter(
        # binary link
        x1=40, y1=55,
        x2=80, y2=85,
        hole=3,
        thickness=3
    )
    """
    # inv.save_as("D:\kmol\fall2020_v4_pyslvs\data\pyslvs.io\project3\lib\test.ipt")
    
    
    """
    inv.open('Y:/pyslvs.io/project3/40723145/ternary_link.ipt')
    inv.parameter(
        # ternary link
        x1=140, y1=138,
        x2=210, y2=225,
        x3=234, y3=125,
        hole=10,
        thickness=3
    )
    """
    



