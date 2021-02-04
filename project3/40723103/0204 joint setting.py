import math 
import time
import sim 
import simConst

sim.simxFinish(-1)

clientID = sim.simxStart('127.0.0.1', 19997, True, True, 5000, 5)
print("Connection success")

if clientID!=-1:
    print ('Connected to remote API server')
    
    
    res,left_motor = sim.simxGetObjectHandle(clientID, "left_motor",  sim.simx_opmode_oneshot_wait)
    
    sim.simxSynchronous(clientID,1)# -啟用同步模式（客戶端）。服務器端（即CoppeliaSim）也需要啟用。
    
    sim.simxStartSimulation(clientID,sim.simx_opmode_oneshot)# //開始仿真
    
    sim.simxSetJointForce(clientID,left_motor,1.0f,sim.simx_opmode_oneshot）;#//設置聯合力/扭矩
    
    sim.simxSetJointTargetVelocity(clientID,left_motor,180.0f * 3.1415f / 180.0f,sim.simx_opmode_oneshot)# //設置聯合目標速度
    
    sim.simxSynchronousTrigger(clientID);#//觸發下一個模擬步驟。上面的命令將被應用
    
    sim.simxSetJointForce(clientID,left_motor,0.5f,sim.simx_opmode_oneshot)# //設置聯合力/扭矩
    
    sim.simxSetJointTargetVelocity(clientID,left_motor,180.0f * 3.1415f / 180.0f,sim.simx_opmode_oneshot)# //設置聯合目標速度
    
    sim.simxSynchronousTrigger(clientID)# //下一個模擬步驟執行。上面的命令將被應用
    
    sim.simxSetJointForce(clientID,left_motor,2.0f,sim.simx_opmode_oneshot)# //設置聯合力/扭矩
    
    sim.simxSetJointTargetVelocity(clientID,left_motor,180.0f * 3.1415f / 180.0f,sim.simx_opmode_oneshot)# //設置關節目標速度
    