import FEDevelop from './commad/FEDevelop'
import RDDevelop from './commad/RDDevelop'
import QADevelop from './commad/QADevelop'
import FE from './executor/FE'
import RD from './executor/RD'
import QA from './executor/QA'
import PMO from './PMO'

/*
* 情景一：pm发布需求，表单新增一个字段
*/

//1.需要FE、RD、QA都参与
let fe = new FE()
let feDevelop = new FEDevelop(fe, '增加输入框')

let rd = new RD()
let rdDevelop = new RDDevelop(rd, '服务器扩展字段')

let qa = new QA()
let qaDevelop = new QADevelop(qa, '测试新增字段')

//2.PMO负责组织开发
let pmo = new PMO()
pmo.organizeDevelop(feDevelop).organizeDevelop(rdDevelop).organizeDevelop(qaDevelop)
pmo.notify()

//3.运行结果：
// 前端：增加输入框
// 后端：服务器扩展字段
// QA：测试新增字段






/*
* 情景二：pm发布需求，扫码跳转到小程序
*/

//1.pmo先把上次需求结项
pmo.finish()

//2.需要FE、RD、QA都参与
feDevelop = new FEDevelop(fe, '增加二维码；小程序接受跳转参数')
rdDevelop = new RDDevelop(rd, '提供跳转协议')
qaDevelop = new QADevelop(qa, '测试跳转功能')

//3.PMO负责组织开发
pmo.organizeDevelop(feDevelop).organizeDevelop(rdDevelop).organizeDevelop(qaDevelop)

//4.需求变更，发现不需要RD参与
pmo.removeDevelop(rdDevelop)
pmo.notify()

//5.运行结果：
// 前端：增加二维码；小程序接受跳转参数
// QA：测试跳转功能




