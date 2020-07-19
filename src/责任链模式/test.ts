/**
 * 涉及4个主体：
 * 1.TeamLeader（团队领导）
 * 2.DepartmentManager（部门经理）
 * 3.BusinessDirector（业务总监）
 * 4.HRBP（人力总监）
 * 
 * 3种模式：
 * 1.请假申请
 * 2.加班申请
 * 3.加薪申请
*/
import TeamLeader from './TeamLeader'
import DepartmentManager from './DepartmentManager'
import BusinessDirector from './BusinessDirector'
import HRBP from './HRBP'
import RequestType from './RequestType'
import WorkRequest from './WorkRequest'

let teamLeader = new TeamLeader('强伟')
let departmentManager = new DepartmentManager('祥波')
let businessDirector = new BusinessDirector('涛哥')
let hrbp = new HRBP('周雯')

teamLeader.setSuperior(departmentManager.setSuperior(businessDirector.setSuperior(hrbp)))


let request1 = new WorkRequest(RequestType.Leave, '身体不舒服', 1)
teamLeader.handleRequest(request1)