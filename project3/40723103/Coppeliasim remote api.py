import math 
import time
import sim 
import simConst

sim.simxFinish(-1)

clientID = sim.simxStart('127.0.0.1', 19997, True, True, 5000, 5)
print("Connection success")

#dt = 50.0 ms
#simulatioTimeStepDT = 200.0

if clientID!=-1:
    print ('Connected to remote API server')
    sim.simxSynchronous(clientID,1)
    #同步模式
    sim.simxSynchronousTrigger(clientID)
    # Start simulation
    sim.simxStartSimulation(clientID, sim.simx_opmode_oneshot_wait)
    print ("Simulation start")
    
    res,bubbleRob_leftMotor = sim.simxGetObjectHandle(clientID, "left_motor",  sim.simx_opmode_oneshot_wait)
    res,bubbleRob_rightMotor = sim.simxGetObjectHandle(clientID, "right_motor",  sim.simx_opmode_oneshot_wait)
    res, main_handle = sim.simxGetObjectHandle(clientID, 'bubbleRob', sim.simx_opmode_blocking)
    
    left_Code =sim.simxSetJointTargetVelocity(clientID,bubbleRob_leftMotor ,10,sim.simx_opmode_oneshot_wait)
    right_Code = sim.simxSetJointTargetVelocity(clientID,bubbleRob_rightMotor ,10,sim.simx_opmode_oneshot_wait)
    time.sleep(2)
    print('finish velocity setting')
    
    res, main_position = sim.simxGetObjectPosition(clientID, main_handle, -1, sim.simx_opmode_blocking)
    if res >= 0:
        print('main_position'  + str(main_position))
    else:
        print('cant found main_position')
    
    #sim.simxGetLastCmdTime(clientID)
    #number returnCode,number pingTime=simxGetPingTime(number clientID)
    #res,1000=sim.simxGetPingTime(clientID)
    
    
    #sim.simxSynchronousTrigger(clientID)#can tridder next code Instructions
    #array position=simxGetObjectPosition(number clientID,number objectHandle,number relativeToObjectHandle,number operationMode)
    

    
    #print('main position = ' + str(main_position))
    
    #Stop simulation
    
time.sleep(2)
sim.simxStopSimulation(clientID, sim.simx_opmode_oneshot)
sim.simxFinish(clientID)
print('finish entire code')
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    