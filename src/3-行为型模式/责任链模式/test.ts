/**
 * 涉及4个主体：
 * 1.TeamLeader（团队领导）
 *  * 对于请假：1天以内，直接审批；否则上报
 *  * 对于加班：无权审批，直接上报
 *  * 对于加薪：无权审批，直接上报
 * 2.DepartmentManager（部门经理）
 *  * 对于请假：3天以内，直接审批；否则上报
 *  * 对于加班：无权审批，直接上报
 *  * 对于加薪：无权审批，直接上报
 * 3.BusinessDirector（业务总监）
 *  * 对于请假：10天以内，直接审批；否则上报
 *  * 对于加班：天以内，直接审批；否则上报
 *  * 对于加薪：暂不审批
 * 4.HRBP（人力总监）
 *  * 对于请假：直接审批
 *  * 对于加班：直接审批
 *  * 对于加薪：无权审批
 * 
 * 3种申请：
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


let request1 = new WorkRequest(RequestType.Leave, '请假理由：身体不舒服', 1)
teamLeader.handleRequest(request1)

let request2 = new WorkRequest(RequestType.Leave, '请假理由：身体不舒服', 4)
teamLeader.handleRequest(request2)

let request3 = new WorkRequest(RequestType.Overtime, '加班理由：重大项目', 3)
teamLeader.handleRequest(request3)

let request4 = new WorkRequest(RequestType.Raises, '加薪理由：无', 1000)
teamLeader.handleRequest(request4)