import math 
import time
import sim 
import simConst


class  ConnectedremoteAPI:
    def __init__(self):
        sim.simxFinish(-1)
        self.clientID = sim.simxStart('127.0.0.1', 19997, True, True, 5000, 5)
        print("Connection success")
          
    def connectedAPI(self):
        if self.clientID!=-1:
            print ('Connected to remote API server')
        else:
            print('cant not to connnected')
            
    def inputxmlfile(self):
        sim.simxStopSimulation(self.clientID, sim.simx_opmode_oneshot)
        #number returnCode = simxCloseScene（number clientID，number operationMode）
        sim.simxCloseScene(self.clientID,sim.simx_opmode_blocking)
        #number returnCode=simxLoadScene(number clientID,string scenePathAndName,number options,number operationMode)
        sim.simxLoadScene(self.clientID,"D:\fall2020_v2\data\home\Desktop\40723103\add_stl.simscene.xml",0x00,sim.simx_opmode_blocking)
        
        '''
        # relative to remote API client location, relative path:
        sim.simxLoadScene(clientID,'test/testScene.ttt',0xFF,vrep.simx_opmode_blocking)
        # relative to V-REP executable location, relative path:
        sim.simxLoadScene(clientID,'scenes/collisionDetectionDemo.ttt',0x00,vrep.simx_opmode_blocking)
        # relative to remote API client location, absolute path:
        sim.simxLoadScene(clientID,'c:/python27/test/testScene.ttt',0xFF,vrep.simx_opmode_blocking)
        # relative to V-REP executable location, absolute path:
        sim.simxLoadScene(clientID,'d:/v_rep/qrelease/release/scenes/collisionDetectionDemo.ttt',0x00,vrep.simx_opmode_blocking)
        '''
        
        print("successful input file")
        
    def simulation(self) :
        sim.simxSynchronous(self.clientID,1)
        #同步模式
        sim.simxSynchronousTrigger(self.clientID)
        # Start simulation
        sim.simxStartSimulation(self.clientID, sim.simx_opmode_oneshot_wait)
        print ("Simulation start")
        
    def velocity(self,max1,max2):
        #res,joint0 = sim.simxGetObjectHandle(clientID, "Revolute_joint0",  sim.simx_opmode_oneshot_wait)
        #res,joint1 = sim.simxGetObjectHandle(clientID, "Revolute_joint1",  sim.simx_opmode_oneshot_wait)
        res,main_handle = sim.simxGetObjectHandle(self.clientID, 'Cuboid0', sim.simx_opmode_blocking)
        res,joint0 = sim.simxGetObjectHandle(self.clientID, "motor",  sim.simx_opmode_oneshot_wait)
        #res,joint1 = sim.simxGetObjectHandle(self.clientID, "right_motor",  sim.simx_opmode_oneshot_wait)
        sim.simxSynchronousTrigger(self.clientID)
        
        left_Code =sim.simxSetJointTargetVelocity(self.clientID,joint0 ,max1,sim.simx_opmode_oneshot_wait)
        #right_Code = sim.simxSetJointTargetVelocity(self.clientID,joint1 ,max2,sim.simx_opmode_oneshot_wait)
        #right_Code = sim.simxSetJointTargetVelocity(clientID,joint1 ,max3,sim.simx_opmode_oneshot_wait)
        print('finish velocity setting')
         

    def settime(A):
        #sim.simxGetSimulationTime()
         if max1>0 :
             A=sim.getSimulationTime()+3 

    def sleeptime(sec):
        #return hour*3600 + min*60 + sec
        #second = sleeptime(hour,min,sec)
        while 1==1:
            time.sleep(sec)
            print ('finish')
            return sec
    '''
    def setworkingtime(sec):       
            
        start = time.process_time()
        
        for i in range(10000):
        "-".join(str(n) for n in range(100))

        end = time.process_time()
        
        print("執行時間：%f 秒" % (end - start))
        
        start = time.time(sec)
        run_fun()
        end = time.time(sec)
        print end-start
        '''
#sim.simxStopSimulation(clientID, sim.simx_opmode_oneshot)
#sim.simxFinish(clientID)



#call code section!!!!!

connected = ConnectedremoteAPI( )
connected. connectedAPI()
#connected.inputxmlfile()
connected.simulation()
connected.velocity(1,0)
connected.settime=time.sleep(5)
#connected.setworkingtime(5)
#settime(2)

print('finish entire code')

'''
def main_position()
 res, main_position = sim.simxGetObjectPosition(clientID, main_handle, -1, sim.simx_opmode_blocking)
        if res >= 0:
            print('main_position'  + str(main_position))
        else:
            print('cant found main_position')
'''